import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiServiceProvider } from '../../providers/api-service/api-service';

import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {
  private forgot : FormGroup;
  public isDeviceOnline : boolean;
  public showForgotFailText : boolean;
  public forgotFailText : string;
  public responseData : any;
  public showSent : boolean;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams, private network: Network, private zone: NgZone,
    public apiService : ApiServiceProvider, private formBuilder: FormBuilder) {
    this.forgot = this.formBuilder.group({
      email: ['', Validators.required]
    });
    this.isDeviceOnline = true;
    // watch network for a disconnect
    this.network.onDisconnect().subscribe(() => {
      this.zone.run(() => {
        this.isDeviceOnline = false;
      });
    });
    // watch network for a connection
    this.network.onConnect().subscribe(() => {
      this.zone.run(() => {
        this.isDeviceOnline = true;
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPage');
  }

  attemptUserForgot() {
    let loading = this.loadingCtrl.create({
      content: 'Espere un momento...'
    });
    loading.present();
    var formData = new FormData();
    formData.append('e', this.forgot.value.email);
    this.apiService.postData(formData,'send_mail.php').then((result) => {
        loading.dismiss();
        this.responseData = result;
        if(this.responseData.status == 'ok'){
          this.showSent = true;
          this.showForgotFailText = false;
        }
        else {
          this.showForgotFailText = true;
          this.forgotFailText = this.responseData.msg == 'no user' ? 'Usuario no existe' : 'Error desconocido';
        }
    }, (err) => {
      // Error log
      loading.dismiss();
      this.showForgotFailText = true;
      this.forgotFailText = err;
    });
  }

  loginPage(){ this.navCtrl.setRoot(LoginPage); }
  signupPage(){ this.navCtrl.setRoot(SignupPage); }

}

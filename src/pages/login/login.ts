import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, Events, LoadingController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
//import { Facebook } from '@ionic-native/facebook';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Constants } from '../../services/constants';

import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { ForgotPage } from '../forgot/forgot';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private login : FormGroup;
  public isDeviceOnline : boolean;
  public showLoginFailText : boolean = false;
  public userInfo : any = {};
  public responseData : any;
  public loginFailText : string;

  constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams, private network: Network, private zone: NgZone,
    /*private fb: Facebook,*/ private formBuilder: FormBuilder, public events : Events, public apiService : ApiServiceProvider, public loadingCtrl: LoadingController) {
    this.login = this.formBuilder.group({
      email: ['', Validators.required],
      pwd: ['', Validators.required],
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
    console.log('ionViewDidLoad LoginPage');
  }

  signupPage(){ this.navCtrl.setRoot(SignupPage); }
  forgotPasswordPage(){ this.navCtrl.setRoot(ForgotPage); }

  fbLogin(){
    /*this.fb.login(['public_profile', 'email'])
      .then(res => {
        this.fb.api('me/?fields=id,email,first_name', ['public_profile', 'email']).then(apiRes => {
          this.userInfo = apiRes;
          this.isDeviceOnline = true;
          alert('Logged into Facebook!')
        }).catch(e => alert('Error api into Facebook'));
    }).catch(e => alert('Error logging into Facebook'  + e));*/
  }

  attemptUserLogin(){
    let loading = this.loadingCtrl.create({
      content: 'Espere un momento...'
    });
    loading.present();
    var formData = new FormData();
    formData.append('u', this.login.value.email);
    formData.append('p', this.login.value.pwd);
    this.apiService.postData(formData, 'access.php').then(result => {
        loading.dismiss();
        this.responseData = result;
        if (this.responseData.status == "ok") {
          let userArray = {
            userId: this.responseData.user.id,
            userEmail: this.responseData.user.email,
            userName: this.responseData.user.name,
            userType: this.responseData.user.user_type_id
          };

          this.storage.set(Constants.userLoggedInKey, userArray);
          this.showLoginFailText = false;
          this.events.publish('setBalance', '$' + parseFloat(this.responseData.user.amount).toFixed(2));
          this.events.publish('setMenuItems', this.responseData.user.user_type_id == 2 ? 'user' : 'store');
          this.navCtrl.setRoot(HomePage);
        }
        else {
          this.showLoginFailText = true;
          this.loginFailText = (this.responseData.msg == 'no password' ?
                                  'Contraseña incorrecta' : (this.responseData.msg == 'no user' ?
                                                                'Este usuario no existe' : 'Error desconocido'));
        }
    });
  }
}

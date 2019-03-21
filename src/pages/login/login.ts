import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, Events, LoadingController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
//import { Facebook } from '@ionic-native/facebook';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Constants } from '../../services/constants';
import { Facebook } from '@ionic-native/facebook/ngx';

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
  FB_APP_ID: number = 260676854593763;

  constructor(public navCtrl: NavController, private fb: Facebook, private storage: Storage, public navParams: NavParams, private network: Network,
    private zone: NgZone, private formBuilder: FormBuilder, public events : Events, public apiService : ApiServiceProvider,
    public loadingCtrl: LoadingController) {
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
    let loading = this.loadingCtrl.create({
      content: 'Espere un momento...'
    });
    loading.present();
    //let permissions = new Array<string>();

    //the permissions your facebook app needs from the user
    const permissions = ["public_profile", "email"];

    this.fb.login(permissions)
    .then(response =>{
      let userId = response.authResponse.userID;

      //Getting name and gender properties
      this.fb.api("/me?fields=name,email", permissions)
      .then(user =>{
        //user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
        //now we have the users info, let's save it in the NativeStorage

        var formData = new FormData();
        formData.append('n', user.name);
        formData.append('u', user.email);
        formData.append('p', '00000');
        formData.append('i', '1234567');
        formData.append('f', userId);
        formData.append('t', '2');
        this.apiService.postData(formData, 'access.php').then(result => {
          loading.dismiss();
          this.responseData = result;
          this.accessResponse(this.responseData);
        });
      });

    });
  }

  attemptUserLogin(){
    let loading = this.loadingCtrl.create({
      content: 'Espere un momento...'
    });
    loading.present();
    var formData = new FormData();
    formData.append('u', this.login.value.email);
    formData.append('p', this.login.value.pwd);
    formData.append('t', '2');
    this.apiService.postData(formData, 'access.php').then(result => {
        loading.dismiss();
        this.responseData = result;
        this.accessResponse(this.responseData);
    });
  }

  accessResponse(_responseData){
      if (_responseData.status == "ok") {
        let userArray = {
          userId: _responseData.user.id,
          userEmail: _responseData.user.email,
          userName: _responseData.user.name
        };

        this.storage.set(Constants.userLoggedInKey, userArray);
        this.showLoginFailText = false;
        this.events.publish('setBalance', '$' + parseFloat(_responseData.user.amount).toFixed(2));
        this.navCtrl.setRoot(HomePage);
      }
      else {
        this.showLoginFailText = true;
        this.loginFailText = (_responseData.msg == 'no password' ? 'Contraseña incorrecta' : (_responseData.msg == 'no user' ? 'Este usuario no existe' : (_responseData.msg == 'no platform' ? 'Plataforma incorrecta' : 'Error desconocido')));
      }
    return ;
  }
}

import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, LoadingController, Events, Platform } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { Constants } from '../../services/constants';
import { HelperService } from '../../providers/helper';
import { NFC, Ndef } from '@ionic-native/nfc';
import { Toast } from '@ionic-native/toast';

import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { ForgotPage } from '../forgot/forgot';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  public isDeviceOnline : boolean;
  private register : FormGroup;
  public responseData : any;
  public showDuplicateText: boolean = false;
  public nameValue : string;
  public emailValue : string;
  public isUserLoggedIn : boolean = false;
  public userInfo: any;

  constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams, private network: Network, private zone: NgZone,
    public apiService : ApiServiceProvider, private nfc: NFC, private ndef: Ndef, public loadingCtrl: LoadingController, private formBuilder: FormBuilder,
    public helper: HelperService, public events: Events, public platform: Platform, private toast: Toast) {
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

    this.register = this.formBuilder.group({
        email: ['', Validators.required],
        name: [''],
        pwd: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
        group : ['']
    });
    var $view = this;
    this.storage.get(Constants.userLoggedInKey).then(value => {
      if(value != null){
        this.isUserLoggedIn = true;
        this.userInfo = value;
        let loading = this.loadingCtrl.create({
            content: 'Espere un momento...'
        });
        loading.present();
        $view.register = $view.formBuilder.group({
            email: ['', Validators.required],
            name: [''],
            pwd: ['', Validators.minLength(6)],
            group : ['']
        });

        this.userInfo = value;
        this.apiService.getData({ 'id': this.userInfo.userId, 'type': 'user' }, 'users.php').then(result => {
          loading.dismiss();
          this.responseData = result;
          this.nameValue = this.responseData.user.name;
          this.emailValue = this.responseData.user.email;
        })
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  logout(){
      this.helper.logout();
      this.navCtrl.setRoot(LoginPage);
  }

  cancel(){
      this.navCtrl.setRoot(HomePage);
  }

  loginPage(){ this.navCtrl.setRoot(LoginPage); }
  forgotPasswordPage(){ this.navCtrl.setRoot(ForgotPage); }

  linkTag(){
    this.nfc.addNdefListener(() => {
      if(this.platform.is('cordova')){
        this.toast.show('successfully attached ndef listener', '5000', 'center');
      }
      else{
        alert('successfully attached ndef listener');
      }
    }, (err) => {
      if(this.platform.is('cordova')){
        this.toast.show('error attaching ndef listener' + err, '5000', 'center');
      }
      else{
        alert('error attaching ndef listener' + err);
      }
    }).subscribe((event) => {
      if(this.platform.is('cordova')){
        this.toast.show('received ndef message. the tag contains: ' + event.tag, '5000', 'center');
        this.toast.show('decoded tag id' + this.nfc.bytesToHexString(event.tag.id), '5000', 'center');
      }
      else{
        alert('received ndef message. the tag contains: ' + event.tag);
        alert('decoded tag id' + this.nfc.bytesToHexString(event.tag.id));
      }

      let message = this.ndef.textRecord(this.userInfo.userEmail);
      this.nfc.share([message]).then(success => {
        // TODO buscar si existe el tag en la bd y hacer login con ese id
        console.log(success);
      }).catch(err => {
        console.log(err);
      });
    });
  }
  attemptUserRegister(){
    this.showDuplicateText = false;
    let loading = this.loadingCtrl.create({
        content: 'Espere un momento...'
    });
    loading.present();

    var formData = new FormData();
    this.storage.get(Constants.userLoggedInKey).then(value => {
      this.userInfo = value;
      formData.append('userId', this.userInfo.userId );
      formData.append('name', this.register.value.name);
      formData.append('email', this.register.value.email);
      formData.append('user_type_id', '2');
      formData.append('uid','1234567890');
      if(value != null){
        formData.append('type', 'save');
        if(this.register.value.pwd)
          formData.append('password', this.register.value.pwd);
      }
      else{
        formData.append('type', 'new');
        formData.append('password', this.register.value.pwd);
      }

      this.apiService.postData(formData, 'users.php').then(result => {
        loading.dismiss();
        this.responseData = result;
        if (this.responseData.status == "ok") {
          let userArray = {
            userId: this.responseData.id,
            userName: this.responseData.user.name,
            userEmail: this.responseData.user.email
          };

          this.storage.set(Constants.userLoggedInKey, userArray);
          this.events.publish('setBalance', '$' + parseFloat(this.responseData.user.amount).toFixed(2));
          this.navCtrl.setRoot(HomePage);
        }
        else if(this.responseData.msg == "duplicate"){
          this.showDuplicateText = true;
        }
      });
    })
    .catch(err => {
      console.log(err);
    });
  }
}

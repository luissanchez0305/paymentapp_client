import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { Constants } from '../services/constants';
import { ApiServiceProvider } from '../providers/api-service/api-service';
import { HelperService } from '../providers/helper';

import { HomePage } from '../pages/home/home';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { TransactionsPage } from '../pages/transactions/transactions';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  userInfo: any;
  responseData:any;

  pages: Array<{title: string, component: any, type: string, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private storage: Storage,
    public apiService : ApiServiceProvider, public loadingCtrl: LoadingController, public events : Events, public helper : HelperService) {
    this.initializeApp();

    events.subscribe('setMenuItems', userType => {
      this.setMenuItems(userType);
    });

    platform.ready().then(() => {
        this.storage.get(Constants.userLoggedInKey).then((value)=>{
          if(value == null){
            this.nav.setRoot(LoginPage);
          }
          else{
            let loading = this.loadingCtrl.create({
              content: 'Espere un momento...'
            });
            loading.present();
            this.userInfo = value;
            var data = { 'id': this.userInfo.userId, 'type': 'user' }
            this.apiService.getData(data, 'users.php').then(result => {
              loading.dismiss();
              this.responseData = result;
              this.setMenuItems(this.responseData.user.user_type_id == 2 ? 'user' : 'store');
              this.events.publish("setBalance", '$' + parseFloat(this.responseData.user.amount).toFixed(2));
            }, err => {
              loading.dismiss();
            });
          }
        })
        .catch(err => {
            this.nav.setRoot(LoginPage);
        });;
    });
  }

  setMenuItems(type){
    if(type=='user'){
      // used for an example of ngFor and navigation
      this.pages = [
        { title: 'Home', component: HomePage, type: 'root', icon: '' },
        { title: 'Mi cuenta', component: AccountPage, type: 'push', icon: '' },
        { title: 'Perfil', component: SignupPage, type: 'root', icon: '' },
        { title: 'Logout', component: null, type: 'logout', icon: 'log-out' }
      ];
    }
    else{
      // used for an example of ngFor and navigation
      this.pages = [
        { title: 'Home', component: HomePage, type: 'root', icon: '' },
        { title: 'Mi cuenta', component: AccountPage, type: 'push', icon: '' },
        { title: 'Mis Ventas', component: TransactionsPage, type: 'push', icon: '' },
        { title: 'Perfil', component: SignupPage, type: 'root', icon: '' },
        { title: 'Logout', component: null, type: 'logout', icon: 'log-out' }
      ];
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.type == 'logout')
      this.events.publish('logout');
    else if(page.type == 'root')
      this.nav.setRoot(page.component);
    else
      this.nav.push(page.component);
  }
}

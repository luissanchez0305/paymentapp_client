import { Component, NgZone } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { HelperService } from '../../providers/helper';

import { LoginPage } from '../login/login';
import { AccountPage } from '../account/account';
import { ScannerPage } from '../scanner/scanner';
//import { PaymentPage } from '../payment/payment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public isDeviceOnline : boolean;
  public balance : string;
  public showRefreshButton : boolean = false;

  constructor(public navCtrl: NavController, private network: Network, public events : Events, private zone: NgZone,
    public helper : HelperService) {
      this.balance = this.helper.balance;
      events.subscribe('setBalance', actualBalance => {
        this.balance = actualBalance;
        this.helper.setBalance(actualBalance);
      });

      this.events.subscribe('logout',() => {
          //call method to refresh content
          this.logout();
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

  logout(){
    this.helper.logout();
    this.navCtrl.setRoot(LoginPage);
  }

  reloadAccount(){
      this.navCtrl.push(AccountPage);
  }

  makePayment(){
    /*this.helper.storeName = 'Cerveceria Artesanal S.A.';
    this.helper.storeId = 2;
    this.navCtrl.push(PaymentPage);*/
    this.navCtrl.push(ScannerPage);
  }
}
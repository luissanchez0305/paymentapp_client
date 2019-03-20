import { Component, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Network } from '@ionic-native/network';
import { Storage } from '@ionic/storage';
import { Constants } from '../../services/constants';
import { HelperService } from '../../providers/helper';

/**
 * Generated class for the TransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {
  public isDeviceOnline : boolean;
  public balance : string;
  public transactions : any;
  public userInfo: any;
  public items: Array<{id: number, user: string, price: string, date: string}>;

  constructor(public navCtrl: NavController, private storage: Storage, public apiService : ApiServiceProvider, 
  public navParams: NavParams, private zone: NgZone, private network: Network, private helper: HelperService) {
    
    this.balance = this.helper.balance;
    
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
    this.items = [];
    this.storage.get(Constants.userLoggedInKey).then((value)=>{
      this.userInfo = value;
      var data = { 'u': this.userInfo.userId, type: 'sell' }
      this.apiService.getData(data, 'transactions.php').then(result => {
        this.transactions = result;
        for (let i = 0; i < this.transactions.length; i++) {
          let transaction = this.transactions[i];
          let tdate = new Date(transaction.date_created);
          
          let name = '';
          if(transaction.out_name.length < 10){
            name = transaction.out_name;
          }
          else{
            name = transaction.out_name.substr(0, 10) + '...'
          }
          let priceFixed = '$' + parseFloat(transaction.price).toFixed(2);
          this.items.push({
            id: transaction.id,
            user: name,
            price: priceFixed,
            date: tdate.getDate() + '-' + (tdate.getMonth() + 1) + ' ' + tdate.getHours() + ':' + tdate.getMinutes()
          });
        }
      });
    });
  }

}

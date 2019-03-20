import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, LoadingController, Events } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Network } from '@ionic-native/network';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { HelperService } from '../../providers/helper';
import { Constants } from '../../services/constants';
import { Storage } from '@ionic/storage';
//import { BarcodeScanner } from '@ionic-native/barcode-scanner';

//import { Toast } from '@ionic-native/toast';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  public balanceForm : FormGroup;
  public balance : string;
  public showForm : boolean = false;
  public isDeviceOnline : boolean;
  public responseData : any;
  public payResultText : string;
  public showPaymentResultText : boolean;
  public transactions : any;
  public userInfo: any;
  public items: Array<{id: number, type: string, store: string, price: string, date: string}>;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private network: Network, public navParams: NavParams,
    public loadingCtrl: LoadingController, public apiService : ApiServiceProvider, private storage: Storage, public events : Events,
    private zone: NgZone, private helper: HelperService /*, public barcoScanner: BarcodeScanner, private toast: Toast*/) {
    this.showPaymentResultText = false;
    this.payResultText = "";

    this.balance = this.helper.balance;
    this.balanceForm = this.formBuilder.group({
        amount:['', Validators.required]
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
    this.storage.get(Constants.userLoggedInKey).then((value)=>{
      this.userInfo = value;
      this.updateTransactions();
    });
  }

  updateTransactions(){
    this.items = [];
    var data = { 'u': this.userInfo.userId, t: 'buy' }
    this.apiService.getData(data, 'transactions.php').then(result => {
      this.transactions = result;
      for (let i = 0; i < this.transactions.length; i++) {
        let transaction = this.transactions[i];
        let tdate = new Date(transaction.date_created);

        let name = '';
        if(transaction.in_name.length < 7){
          name = transaction.in_name;
        }
        else{
          name = transaction.in_name.substr(0, 7) + '...'
        }
        let priceFixed = transaction.transaction_type_id == 3 ? ('$' + parseFloat(transaction.price).toFixed(2)) : '($' + parseFloat(transaction.price).toFixed(2) + ')';
        this.items.push({
          id: transaction.id,
          type: transaction.transaction_type_id == 3 ? 'D' : 'C',
          store: transaction.transaction_type_id == 3 ? '-------' : name,
          price: priceFixed,
          date: tdate.getDate() + '-' + (tdate.getMonth() + 1) + ' ' + tdate.getHours() + ':' + tdate.getMinutes()
        });
      }
    });
  }

  showPayMoreBalanceForm(){
    this.showForm = true;
  }

  attempToPayMoreBalance(){
    let loading = this.loadingCtrl.create({
      content: 'Espere un momento...'
    });
    loading.present();
    this.showPaymentResultText = false;

    this.storage.get(Constants.userLoggedInKey).then(value => {
      this.userInfo = value;
      var formData = new FormData();
      formData.append('a', parseFloat(this.balanceForm.value.amount).toFixed(2));
      formData.append('u', this.userInfo.userId);

      this.apiService.postData(formData, 'paymorebalance.php').then(result => {
          this.responseData = result;
          this.showPaymentResultText = true;

          loading.dismiss();
          if (this.responseData.status == "ok") {
            var balanceVal = '$' + parseFloat(this.responseData.balance).toFixed(2);
            this.payResultText = 'Su transaccion se ha hecho con exito.\n' +
                                 'Su nuevo saldo es ' + balanceVal;
            this.events.publish('setBalance', balanceVal);
            this.balance = balanceVal;
            this.updateTransactions();
          }
          else{
              this.payResultText = this.responseData.msg;
          }
      }, (err) => {
          loading.dismiss();
          this.showPaymentResultText = true;
          this.payResultText = 'Ha ocurrido un error: ' + err.status;
      });
    });
  }
}

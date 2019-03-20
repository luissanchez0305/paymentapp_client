import { Component, NgZone } from '@angular/core';
//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { NavController, NavParams, LoadingController, Events, Platform } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network';
import { Constants } from '../../services/constants';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { HelperService } from '../../providers/helper';
import { HomePage } from '../home/home';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  private pay : FormGroup;
  public isDeviceOnline : boolean;
  public showPaymentFailText : boolean;
  public payFailText : string;
  public storeName : string;
  public storeId : string;
  public responseData : any;
  public clinets: any[] = [];
  public selectedClient: any;
  public clientFound: boolean = false;
  public paid : boolean = false;
  public userInfo: any;

  constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams, private network: Network, private formBuilder: FormBuilder,
    private toast: Toast, public loadingCtrl: LoadingController, public apiService : ApiServiceProvider, public events : Events,
    private zone: NgZone, public platform: Platform, public helper : HelperService/*private barcodeScanner: BarcodeScanner,*/) {
    this.pay = this.formBuilder.group({
        price: ['', Validators.required],
        qty: ['1', Validators.required]
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
    this.storeName = "Cual es la cantidad de su transaccion con " + helper.storeName + "?";
    /*this.selectedClient = {};
    this.barcodeScanner.scan().then((barcodeData) => {
        //- text debe tener un json con el id de la tienda y el nombre
        var scanInfo = JSON.parse(barcodeData.text);
        this.storeName = scanInfo.store;
        this.storeId = scanInfo.storeId;
    }, (err) => {
        this.toast.show(err, '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );
    });*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  goBack(){
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();
  }

  attempToPay(){
    this.showPaymentFailText = false;
    let loading = this.loadingCtrl.create({
      content: 'Espere un momento...'
    });
    loading.present();

    this.storage.get(Constants.userLoggedInKey).then(value => {
      this.userInfo = value;
        var formData = new FormData();
        formData.append('p', this.pay.value.price);
        formData.append('q', '1');
        formData.append('c', String(this.helper.storeId));
        formData.append('u', this.userInfo.userId);

        //- al hacer submit debe de correr api para descontar cantidad en $$ de la cuenta del ususario logueado
        this.apiService.postData(formData, 'paybill.php').then(result => {
            loading.dismiss();
            this.responseData = result;
            this.paid = true;
            if (this.responseData.status == "ok") {
                var total = this.pay.value.qty * this.pay.value.price;
                if(this.platform.is('cordova')){
                  this.toast.show('Su transaccion por $' + total +
                                  ' a ' + this.helper.storeName +
                                  ' se ha hecho con exito.\n' +
                                  'Su saldo restante es de $' +
                                      this.responseData.balance, '15000', 'center').subscribe(
                    toast => {
                      this.events.publish("setBalance", '$' + parseFloat(this.responseData.balance).toFixed(2));
                      this.navCtrl.setRoot(HomePage);
                      this.navCtrl.popToRoot();
                    }
                  );
                }
                else{
                  this.showPaymentFailText = true;
                  this.payFailText = 'Su transaccion por $' + total +
                                  ' a ' + this.helper.storeName +
                                  ' se ha hecho con exito.\n' +
                                  'Su saldo restante es de $' +
                                      this.responseData.balance;
                }
                this.events.publish('setBalance', '$' + parseFloat(this.responseData.balance).toFixed(2));
            }
            else {
              this.showPaymentFailText = true;
              this.payFailText = this.responseData.msg;
            }
        }, (err) => {
          loading.dismiss();
          this.paid = true;
          this.showPaymentFailText = true;
          this.payFailText = 'error';
      });
    }, (err) => {
        loading.dismiss();
        this.paid = true;
        this.showPaymentFailText = true;
        this.payFailText = err.msg;
    });
  }
}

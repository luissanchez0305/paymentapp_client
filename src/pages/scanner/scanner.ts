import { Component } from '@angular/core';
import { NavController, NavParams, Events, Platform } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { HelperService } from '../../providers/helper';
import { Toast } from '@ionic-native/toast';

import { PaymentPage } from '../payment/payment';

/**
 * Generated class for the ScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html',
})
export class ScannerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private qrScanner: QRScanner,
    public helper : HelperService, public platform: Platform, public events : Events, private toast: Toast) {

  }

  ionViewDidLoad() {
    // Optionally request the permission early
    this.qrScanner.prepare()
        .then((status: QRScannerStatus) => {
             if (status.authorized) {
               // camera permission was granted


               // start scanning
                window.document.querySelector('ion-app').classList.add('scanner_bg');
                let scanSub = this.qrScanner.scan().subscribe((text: string) => {
                    //- text debe tener un json con el id de la tienda y el nombre

                    try {
                      var scanInfo = JSON.parse(text);
                      this.helper.storeName = scanInfo.store;
                      this.helper.storeId = scanInfo.storeId;

                      this.qrScanner.hide(); // hide camera preview
                      scanSub.unsubscribe(); // stop scanning
                      this.navCtrl.push(PaymentPage);
                    } catch(e) {
                      if(this.platform.is('cordova')){
                        this.toast.show('Ha ocurrido un error. Intente nuevamente ('+e+')', '5000', 'center').subscribe(
                            toast => {
                              this.navCtrl.pop();
                            }
                          );
                      }
                      else{
                        alert('Ha ocurrido un error. Intente nuevamente ('+e+')');
                      }
                    }
               });

             } else if (status.denied) {
               // camera permission was permanently denied
               // you must use QRScanner.openSettings() method to guide the user to the settings page
               // then they can grant the permission from there
             } else {
               // permission was denied, but not permanently. You can ask for permission again at a later time.
             }
             this.qrScanner.show();
    })
    .catch((e: any) => {
      if(this.platform.is('cordova')){
        this.toast.show('Ha ocurrido un error. Intente nuevamente ('+e+')', '10000', 'center');
      }
    });
  }
}

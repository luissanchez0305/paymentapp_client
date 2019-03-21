import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook/ngx';
import { QRScanner } from '@ionic-native/qr-scanner';

import { Toast } from '@ionic-native/toast';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ForgotPage } from '../pages/forgot/forgot';
import { AccountPage } from '../pages/account/account';
import { PaymentPage } from '../pages/payment/payment';
import { ScannerPage } from '../pages/scanner/scanner';
import { TransactionsPage } from '../pages/transactions/transactions';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HelperService } from '../providers/helper';
import { Network } from '@ionic-native/network';
import { ApiServiceProvider } from '../providers/api-service/api-service';
import { HttpClientModule } from '@angular/common/http';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { NFC, Ndef } from '@ionic-native/nfc';
//import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    ForgotPage,
    AccountPage,
    PaymentPage,
    ScannerPage,
    TransactionsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    ForgotPage,
    AccountPage,
    PaymentPage,
    ScannerPage,
    TransactionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HelperService,
    Network,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiServiceProvider,
    QRScanner,
    Toast,
    NFC,
    Ndef
    //BarcodeScanner
  ]
})
export class AppModule {}

webpackJsonp([0],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPage = /** @class */ (function () {
    function ForgotPage(navCtrl, loadingCtrl, navParams, network, zone, apiService, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.network = network;
        this.zone = zone;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.forgot = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        this.isDeviceOnline = true;
        // watch network for a disconnect
        this.network.onDisconnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = false;
            });
        });
        // watch network for a connection
        this.network.onConnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = true;
            });
        });
    }
    ForgotPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPage');
    };
    ForgotPage.prototype.attemptUserForgot = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Espere un momento...'
        });
        loading.present();
        var formData = new FormData();
        formData.append('e', this.forgot.value.email);
        this.apiService.postData(formData, 'send_mail.php').then(function (result) {
            loading.dismiss();
            _this.responseData = result;
            if (_this.responseData.status == 'ok') {
                _this.showSent = true;
                _this.showForgotFailText = false;
            }
            else {
                _this.showForgotFailText = true;
                _this.forgotFailText = _this.responseData.msg == 'no user' ? 'Usuario no existe' : 'Error desconocido';
            }
        }, function (err) {
            // Error log
            loading.dismiss();
            _this.showForgotFailText = true;
            _this.forgotFailText = err;
        });
    };
    ForgotPage.prototype.loginPage = function () { this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]); };
    ForgotPage.prototype.signupPage = function () { this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* SignupPage */]); };
    ForgotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\user\src\pages\forgot\forgot.html"*/'<!--\n  Generated template for the ForgotPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>forgot</ion-title>\n  </ion-navbar>\n  <ion-item class="no-conection" *ngIf="!isDeviceOnline">Sin conexión a internet</ion-item>\n\n</ion-header>\n\n\n<ion-content padding class="masters">\n    <div text-center><img src="assets/imgs/forgotpwd.png" width="100" ></div>\n    <form [formGroup]="forgot" (ngSubmit)="attemptUserForgot()">\n      <ion-list no-lines padding-top>\n        <ion-item *ngIf="!showSent">\n          <ion-input type="email" placeholder="Email Address" formControlName="email"></ion-input>\n        </ion-item>\n      </ion-list>\n      <button ion-button block round color="secondary" *ngIf="!showSent">Send</button>\n      <label class="lorems lorems-content" *ngIf="showSent">\n        Una nueva contraseña ha sido enviada a la direccion de correo que envio<br>Por favor, le recomendamos que la cambie tan pronto vuelva a entrar\n      </label>\n      <label class="error" *ngIf="showForgotFailText">{{ forgotFailText }} </label>\n    </form>\n\n    <div padding-top>\n    <button ion-button block color="light" clear (click)="loginPage();">If already have an account ? LOGIN</button>\n    <button ion-button block color="light" clear (click)="signupPage();">If new member ? SIGNUP</button>\n   </div>\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\user\src\pages\forgot\forgot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], ForgotPage);
    return ForgotPage;
}());

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_constants__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_service_api_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_helper__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//import { Toast } from '@ionic-native/toast';
/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl, storage, formBuilder, network, navParams, loadingCtrl, apiService, events, zone, helper /*, public barcoScanner: BarcodeScanner, private toast: Toast*/) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.network = network;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.events = events;
        this.zone = zone;
        this.helper = helper; /*, public barcoScanner: BarcodeScanner, private toast: Toast*/
        this.showForm = false;
        this.showQRCode = false;
        this.showPaymentResultText = false;
        this.payResultText = "";
        this.balance = this.helper.balance;
        this.balanceForm = this.formBuilder.group({
            amount: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.isDeviceOnline = true;
        // watch network for a disconnect
        this.network.onDisconnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = false;
            });
        });
        // watch network for a connection
        this.network.onConnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = true;
            });
        });
    }
    AccountPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].userLoggedInKey).then(function (value) {
            _this.userInfo = value;
            _this.updateTransactions();
            if (_this.userInfo.userType == '1') {
                _this.showQRCode = true;
                _this.createdCode = "{\"store\":\"" + _this.userInfo.userName + "\",\"storeId\":\"" + _this.userInfo.userId + "\"}";
            }
        });
    };
    AccountPage.prototype.updateTransactions = function () {
        var _this = this;
        this.items = [];
        var data = { 'u': this.userInfo.userId, t: 'buy' };
        this.apiService.getData(data, 'transactions.php').then(function (result) {
            _this.transactions = result;
            for (var i = 0; i < _this.transactions.length; i++) {
                var transaction = _this.transactions[i];
                var tdate = new Date(transaction.date_created);
                var name_1 = '';
                if (transaction.in_name.length < 7) {
                    name_1 = transaction.in_name;
                }
                else {
                    name_1 = transaction.in_name.substr(0, 7) + '...';
                }
                var priceFixed = transaction.transaction_type_id == 3 ? ('$' + parseFloat(transaction.price).toFixed(2)) : '($' + parseFloat(transaction.price).toFixed(2) + ')';
                _this.items.push({
                    id: transaction.id,
                    type: transaction.transaction_type_id == 3 ? 'D' : 'C',
                    store: transaction.transaction_type_id == 3 ? '-------' : name_1,
                    price: priceFixed,
                    date: tdate.getDate() + '-' + (tdate.getMonth() + 1) + ' ' + tdate.getHours() + ':' + tdate.getMinutes()
                });
            }
        });
    };
    AccountPage.prototype.showPayMoreBalanceForm = function () {
        this.showForm = true;
    };
    AccountPage.prototype.attempToPayMoreBalance = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Espere un momento...'
        });
        loading.present();
        this.showPaymentResultText = false;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].userLoggedInKey).then(function (value) {
            _this.userInfo = value;
            var formData = new FormData();
            formData.append('a', parseFloat(_this.balanceForm.value.amount).toFixed(2));
            formData.append('u', _this.userInfo.userId);
            _this.apiService.postData(formData, 'paymorebalance.php').then(function (result) {
                _this.responseData = result;
                _this.showPaymentResultText = true;
                loading.dismiss();
                if (_this.responseData.status == "ok") {
                    var balanceVal = '$' + parseFloat(_this.responseData.balance).toFixed(2);
                    _this.payResultText = 'Su transaccion se ha hecho con exito.\n' +
                        'Su nuevo saldo es ' + balanceVal;
                    _this.events.publish('setBalance', balanceVal);
                    _this.balance = balanceVal;
                    _this.updateTransactions();
                }
                else {
                    _this.payResultText = _this.responseData.msg;
                }
            }, function (err) {
                loading.dismiss();
                _this.showPaymentResultText = true;
                _this.payResultText = 'Ha ocurrido un error: ' + err.status;
            });
        });
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\user\src\pages\account\account.html"*/'<!--\n  Generated template for the AccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mi cuenta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    Su balance actual es\n\n    <h1>{{ balance }}</h1>\n\n    <button ion-button round color="secondary" (click)="showPayMoreBalanceForm()">Agregar mas</button>\n\n    <div *ngIf="showForm">\n      <form [formGroup]="balanceForm" (ngSubmit)="attempToPayMoreBalance()">\n        <ion-list no-lines padding-top>\n          <ion-item>\n            <ion-input type="number" placeholder="Monto" formControlName="amount"></ion-input>\n          </ion-item>\n        </ion-list>\n        <button ion-button full round color="secondary" type="submit" [disabled]="!balanceForm.valid">Pagar</button>\n        <label class="error" *ngIf="showPaymentResultText">{{ payResultText }} </label>\n      </form>\n    </div>\n  </ion-item>\n  <ion-item *ngIf="showQRCode">\n    <h1>Código de venta</h1>\n    <div>\n      <ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>\n    </div>\n  </ion-item>\n  <h1>Transacciones</h1>\n  <ion-grid>\n    <ion-row ion-item *ngFor="let item of items">\n      <ion-col col-2>\n        {{item.type}}\n      </ion-col>\n      <ion-col col-4>\n        {{item.store}}\n      </ion-col>\n      <ion-col col-2>\n        {{item.price}}\n      </ion-col>\n      <ion-col col-4>\n        {{item.date}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\user\src\pages\account\account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_7__providers_helper__["a" /* HelperService */] /*, public barcoScanner: BarcodeScanner, private toast: Toast*/])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 128;

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 171;

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScannerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_helper__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__payment_payment__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScannerPage = /** @class */ (function () {
    function ScannerPage(navCtrl, navParams, qrScanner, helper, platform, events, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qrScanner = qrScanner;
        this.helper = helper;
        this.platform = platform;
        this.events = events;
        this.toast = toast;
    }
    ScannerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Optionally request the permission early
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                // camera permission was granted
                // start scanning
                window.document.querySelector('ion-app').classList.add('scanner_bg');
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    //- text debe tener un json con el id de la tienda y el nombre
                    try {
                        var scanInfo = JSON.parse(text);
                        _this.helper.storeName = scanInfo.store;
                        _this.helper.storeId = scanInfo.storeId;
                        _this.qrScanner.hide(); // hide camera preview
                        scanSub_1.unsubscribe(); // stop scanning
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__payment_payment__["a" /* PaymentPage */]);
                    }
                    catch (e) {
                        if (_this.platform.is('cordova')) {
                            _this.toast.show('Ha ocurrido un error. Intente nuevamente (' + e + ')', '5000', 'center').subscribe(function (toast) {
                                _this.navCtrl.pop();
                            });
                        }
                        else {
                            alert('Ha ocurrido un error. Intente nuevamente (' + e + ')');
                        }
                    }
                });
            }
            else if (status.denied) {
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
            _this.qrScanner.show();
        })
            .catch(function (e) {
            if (_this.platform.is('cordova')) {
                _this.toast.show('Ha ocurrido un error. Intente nuevamente (' + e + ')', '10000', 'center');
            }
        });
    };
    ScannerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scanner',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\user\src\pages\scanner\scanner.html"*/'<!--\n  Generated template for the ScannerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Escanea el codigo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\user\src\pages\scanner\scanner.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */],
            __WEBPACK_IMPORTED_MODULE_3__providers_helper__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */]])
    ], ScannerPage);
    return ScannerPage;
}());

//# sourceMappingURL=scanner.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_toast__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_constants__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_service_api_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_helper__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { BarcodeScanner } from '@ionic-native/barcode-scanner';









/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentPage = /** @class */ (function () {
    function PaymentPage(navCtrl, storage, navParams, network, formBuilder, toast, loadingCtrl, apiService, events, zone, platform, helper /*private barcodeScanner: BarcodeScanner,*/) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.network = network;
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.events = events;
        this.zone = zone;
        this.platform = platform;
        this.helper = helper; /*private barcodeScanner: BarcodeScanner,*/
        this.clinets = [];
        this.clientFound = false;
        this.paid = false;
        this.pay = this.formBuilder.group({
            price: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            qty: ['1', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        this.isDeviceOnline = true;
        // watch network for a disconnect
        this.network.onDisconnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = false;
            });
        });
        // watch network for a connection
        this.network.onConnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = true;
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
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
    };
    PaymentPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
        this.navCtrl.popToRoot();
    };
    PaymentPage.prototype.attempToPay = function () {
        var _this = this;
        this.showPaymentFailText = false;
        var loading = this.loadingCtrl.create({
            content: 'Espere un momento...'
        });
        loading.present();
        this.storage.get(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* Constants */].userLoggedInKey).then(function (value) {
            _this.userInfo = value;
            var formData = new FormData();
            formData.append('p', _this.pay.value.price);
            formData.append('q', '1');
            formData.append('c', String(_this.helper.storeId));
            formData.append('u', _this.userInfo.userId);
            //- al hacer submit debe de correr api para descontar cantidad en $$ de la cuenta del ususario logueado
            _this.apiService.postData(formData, 'paybill.php').then(function (result) {
                loading.dismiss();
                _this.responseData = result;
                _this.paid = true;
                if (_this.responseData.status == "ok") {
                    var total = _this.pay.value.qty * _this.pay.value.price;
                    if (_this.platform.is('cordova')) {
                        _this.toast.show('Su transaccion por $' + total +
                            ' a ' + _this.helper.storeName +
                            ' se ha hecho con exito.\n' +
                            'Su saldo restante es de $' +
                            _this.responseData.balance, '15000', 'center').subscribe(function (toast) {
                            _this.events.publish("setBalance", '$' + parseFloat(_this.responseData.balance).toFixed(2));
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
                            _this.navCtrl.popToRoot();
                        });
                    }
                    else {
                        _this.showPaymentFailText = true;
                        _this.payFailText = 'Su transaccion por $' + total +
                            ' a ' + _this.helper.storeName +
                            ' se ha hecho con exito.\n' +
                            'Su saldo restante es de $' +
                            _this.responseData.balance;
                    }
                    _this.events.publish('setBalance', '$' + parseFloat(_this.responseData.balance).toFixed(2));
                }
                else {
                    _this.showPaymentFailText = true;
                    _this.payFailText = _this.responseData.msg;
                }
            }, function (err) {
                loading.dismiss();
                _this.paid = true;
                _this.showPaymentFailText = true;
                _this.payFailText = 'error';
            });
        }, function (err) {
            loading.dismiss();
            _this.paid = true;
            _this.showPaymentFailText = true;
            _this.payFailText = err.msg;
        });
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\user\src\pages\payment\payment.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton>\n    <ion-title>Haz un pago</ion-title>\n  </ion-navbar>\n  <ion-item class="no-conection" *ngIf="!isDeviceOnline">Sin conexión a internet</ion-item>\n\n</ion-header>\n\n\n<ion-content padding>\n    {{ storeName }}\n\n    <form [formGroup]="pay" (ngSubmit)="attempToPay()">\n      <ion-list no-lines padding-top>\n        <ion-item>\n          <ion-input type="number" placeholder="Precio" formControlName="price"></ion-input>\n        </ion-item>\n      </ion-list>\n      <button ion-button block round color="secondary" type="submit" *ngIf="!paid" [disabled]="!pay.valid">Pagar</button>\n      <label class="error" *ngIf="showPaymentFailText">{{ payFailText }} </label>\n    </form>\n    <button ion-button block round color="secondary" *ngIf="paid" (click)="goBack()">Regresar</button>\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\user\src\pages\payment\payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_8__providers_helper__["a" /* HelperService */] /*private barcodeScanner: BarcodeScanner,*/])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_constants__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_helper__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the TransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransactionsPage = /** @class */ (function () {
    function TransactionsPage(navCtrl, storage, apiService, navParams, zone, network, helper) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.apiService = apiService;
        this.navParams = navParams;
        this.zone = zone;
        this.network = network;
        this.helper = helper;
        this.balance = this.helper.balance;
        this.isDeviceOnline = true;
        // watch network for a disconnect
        this.network.onDisconnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = false;
            });
        });
        // watch network for a connection
        this.network.onConnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = true;
            });
        });
    }
    TransactionsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.items = [];
        this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].userLoggedInKey).then(function (value) {
            _this.userInfo = value;
            var data = { 'u': _this.userInfo.userId, type: 'sell' };
            _this.apiService.getData(data, 'transactions.php').then(function (result) {
                _this.transactions = result;
                for (var i = 0; i < _this.transactions.length; i++) {
                    var transaction = _this.transactions[i];
                    var tdate = new Date(transaction.date_created);
                    var name_1 = '';
                    if (transaction.out_name.length < 10) {
                        name_1 = transaction.out_name;
                    }
                    else {
                        name_1 = transaction.out_name.substr(0, 10) + '...';
                    }
                    var priceFixed = '$' + parseFloat(transaction.price).toFixed(2);
                    _this.items.push({
                        id: transaction.id,
                        user: name_1,
                        price: priceFixed,
                        date: tdate.getDate() + '-' + (tdate.getMonth() + 1) + ' ' + tdate.getHours() + ':' + tdate.getMinutes()
                    });
                }
            });
        });
    };
    TransactionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transactions',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\user\src\pages\transactions\transactions.html"*/'<!--\n  Generated template for the TransactionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Transacciones</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  Su balance actual es\n  \n  <h1>{{ balance }}</h1>\n  <ion-grid>\n    <ion-row ion-item *ngFor="let item of items">\n      <ion-col col-2>\n        {{item.type}}\n      </ion-col>\n      <ion-col col-4>\n        {{item.user}}\n      </ion-col>\n      <ion-col col-2>\n        {{item.price}}\n      </ion-col>\n      <ion-col col-4>\n        {{item.date}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\user\src\pages\transactions\transactions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_6__providers_helper__["a" /* HelperService */]])
    ], TransactionsPage);
    return TransactionsPage;
}());

//# sourceMappingURL=transactions.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(244);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_qr_scanner__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_toast__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_forgot_forgot__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_account_account__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_payment_payment__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_scanner_scanner__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_transactions_transactions__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_helper__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_api_service_api_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common_http__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_qrcode2__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_nfc__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { Facebook } from '@ionic-native/facebook';




















//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_forgot_forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_scanner_scanner__["a" /* ScannerPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_transactions_transactions__["a" /* TransactionsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_21__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_22_ngx_qrcode2__["a" /* NgxQRCodeModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_forgot_forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_scanner_scanner__["a" /* ScannerPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_transactions_transactions__["a" /* TransactionsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_18__providers_helper__["a" /* HelperService */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_network__["a" /* Network */],
                //Facebook,
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_api_service_api_service__["a" /* ApiServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_qr_scanner__["a" /* QRScanner */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_nfc__["a" /* NFC */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_nfc__["b" /* Ndef */]
                //BarcodeScanner
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = {
    API_ENDPOINT: 'https://www.esferasoluciones.com/api/payment/api/',
    userLoggedInKey: 'userLoggedIn',
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_constants__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiServiceProvider = /** @class */ (function () {
    function ApiServiceProvider(http) {
        this.http = http;
        console.log('Hello ApiServiceProvider Provider');
    }
    ApiServiceProvider.prototype.postData = function (data, url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__services_constants__["a" /* Constants */].API_ENDPOINT + url, data)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiServiceProvider.prototype.getData = function (data, url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var str = [];
            for (var p in data)
                if (data.hasOwnProperty(p)) {
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
                }
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__services_constants__["a" /* Constants */].API_ENDPOINT + url + '?' + str.join("&"))
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiServiceProvider);
    return ApiServiceProvider;
}());

//# sourceMappingURL=api-service.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_constants__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HelperService = /** @class */ (function () {
    function HelperService(storage) {
        this.storage = storage;
        this.balance = '----';
    }
    HelperService.prototype.setBalance = function (actualBalance) {
        this.balance = actualBalance;
    };
    HelperService.prototype.setStoreInfo = function (actualStoreName, actualStoreId) {
        this.storeName = actualStoreName;
        this.storeId = actualStoreId;
    };
    HelperService.prototype.logout = function () {
        this.balance = '----';
        this.storage.set(__WEBPACK_IMPORTED_MODULE_1__services_constants__["a" /* Constants */].userLoggedInKey, null);
    };
    HelperService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], HelperService);
    return HelperService;
}());

//# sourceMappingURL=helper.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_constants__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_service_api_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_helper__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_account_account__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_transactions_transactions__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage, apiService, loadingCtrl, events, helper) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.helper = helper;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        events.subscribe('setMenuItems', function (userType) {
            _this.setMenuItems(userType);
        });
        platform.ready().then(function () {
            _this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].userLoggedInKey).then(function (value) {
                if (value == null) {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */]);
                }
                else {
                    var loading_1 = _this.loadingCtrl.create({
                        content: 'Espere un momento...'
                    });
                    loading_1.present();
                    _this.userInfo = value;
                    var data = { 'id': _this.userInfo.userId, 'type': 'user' };
                    _this.apiService.getData(data, 'users.php').then(function (result) {
                        loading_1.dismiss();
                        _this.responseData = result;
                        _this.setMenuItems(_this.responseData.user.user_type_id == 2 ? 'user' : 'store');
                        _this.events.publish("setBalance", '$' + parseFloat(_this.responseData.user.amount).toFixed(2));
                    }, function (err) {
                        loading_1.dismiss();
                    });
                }
            })
                .catch(function (err) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */]);
            });
            ;
        });
    }
    MyApp.prototype.setMenuItems = function (type) {
        if (type == 'user') {
            // used for an example of ngFor and navigation
            this.pages = [
                { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */], type: 'root', icon: '' },
                { title: 'Mi cuenta', component: __WEBPACK_IMPORTED_MODULE_9__pages_account_account__["a" /* AccountPage */], type: 'push', icon: '' },
                { title: 'Perfil', component: __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */], type: 'root', icon: '' },
                { title: 'Logout', component: null, type: 'logout', icon: 'log-out' }
            ];
        }
        else {
            // used for an example of ngFor and navigation
            this.pages = [
                { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */], type: 'root', icon: '' },
                { title: 'Mi cuenta', component: __WEBPACK_IMPORTED_MODULE_9__pages_account_account__["a" /* AccountPage */], type: 'push', icon: '' },
                { title: 'Mis Ventas', component: __WEBPACK_IMPORTED_MODULE_12__pages_transactions_transactions__["a" /* TransactionsPage */], type: 'push', icon: '' },
                { title: 'Perfil', component: __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */], type: 'root', icon: '' },
                { title: 'Logout', component: null, type: 'logout', icon: 'log-out' }
            ];
        }
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.type == 'logout')
            this.events.publish('logout');
        else if (page.type == 'root')
            this.nav.setRoot(page.component);
        else
            this.nav.push(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\user\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\user\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_7__providers_helper__["a" /* HelperService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\user\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\user\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_helper__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scanner_scanner__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { PaymentPage } from '../payment/payment';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, network, events, zone, helper) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.network = network;
        this.events = events;
        this.zone = zone;
        this.helper = helper;
        this.showRefreshButton = false;
        this.balance = this.helper.balance;
        events.subscribe('setBalance', function (actualBalance) {
            _this.balance = actualBalance;
            _this.helper.setBalance(actualBalance);
        });
        this.events.subscribe('logout', function () {
            //call method to refresh content
            _this.logout();
        });
        this.isDeviceOnline = true;
        // watch network for a disconnect
        this.network.onDisconnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = false;
            });
        });
        // watch network for a connection
        this.network.onConnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = true;
            });
        });
    }
    HomePage.prototype.logout = function () {
        this.helper.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.reloadAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__account_account__["a" /* AccountPage */]);
    };
    HomePage.prototype.makePayment = function () {
        /*this.helper.storeName = 'Cerveceria Artesanal S.A.';
        this.helper.storeId = 2;
        this.navCtrl.push(PaymentPage);*/
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__scanner_scanner__["a" /* ScannerPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\user\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n  <ion-item class="no-conection" *ngIf="!isDeviceOnline">Sin conexión a internet</ion-item>\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n    <p class="balance-title">Saldo actual</p>\n    <p class="balance-number">{{ balance }}</p>\n    <button ion-button end color="primary" (click)="refreshBalance();" *ngIf="showRefreshButton"> RECARGAR CUENTA </button>\n  </div>\n  <button ion-button full color="secondary" (click)="reloadAccount();"> RECARGAR CUENTA </button>\n\n  <button ion-button full color="secondary" (click)="makePayment();"> HAZ UN PAGO </button>\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\user\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_3__providers_helper__["a" /* HelperService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_service_api_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_constants__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signup_signup__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__forgot_forgot__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Facebook } from '@ionic-native/facebook';







/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, storage, navParams, network, zone, 
        /*private fb: Facebook,*/ formBuilder, events, apiService, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.network = network;
        this.zone = zone;
        this.formBuilder = formBuilder;
        this.events = events;
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.showLoginFailText = false;
        this.userInfo = {};
        this.login = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            pwd: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
        this.isDeviceOnline = true;
        // watch network for a disconnect
        this.network.onDisconnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = false;
            });
        });
        // watch network for a connection
        this.network.onConnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = true;
            });
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.signupPage = function () { this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__signup_signup__["a" /* SignupPage */]); };
    LoginPage.prototype.forgotPasswordPage = function () { this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__forgot_forgot__["a" /* ForgotPage */]); };
    LoginPage.prototype.fbLogin = function () {
        /*this.fb.login(['public_profile', 'email'])
          .then(res => {
            this.fb.api('me/?fields=id,email,first_name', ['public_profile', 'email']).then(apiRes => {
              this.userInfo = apiRes;
              this.isDeviceOnline = true;
              alert('Logged into Facebook!')
            }).catch(e => alert('Error api into Facebook'));
        }).catch(e => alert('Error logging into Facebook'  + e));*/
    };
    LoginPage.prototype.attemptUserLogin = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Espere un momento...'
        });
        loading.present();
        var formData = new FormData();
        formData.append('u', this.login.value.email);
        formData.append('p', this.login.value.pwd);
        this.apiService.postData(formData, 'access.php').then(function (result) {
            loading.dismiss();
            _this.responseData = result;
            if (_this.responseData.status == "ok") {
                var userArray = {
                    userId: _this.responseData.user.id,
                    userEmail: _this.responseData.user.email,
                    userName: _this.responseData.user.name,
                    userType: _this.responseData.user.user_type_id
                };
                _this.storage.set(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* Constants */].userLoggedInKey, userArray);
                _this.showLoginFailText = false;
                _this.events.publish('setBalance', '$' + parseFloat(_this.responseData.user.amount).toFixed(2));
                _this.events.publish('setMenuItems', _this.responseData.user.user_type_id == 2 ? 'user' : 'store');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
            }
            else {
                _this.showLoginFailText = true;
                _this.loginFailText = (_this.responseData.msg == 'no password' ?
                    'Contraseña incorrecta' : (_this.responseData.msg == 'no user' ?
                    'Este usuario no existe' : 'Error desconocido'));
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\user\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n  <ion-item class="no-conection" *ngIf="!isDeviceOnline">Sin conexión a internet</ion-item>\n\n</ion-header>\n\n\n<ion-content padding class="masters">\n\n    <ion-grid>\n      <ion-row>\n        <ion-col ><button ion-button block class="facebookButton" (click)="fbLogin();">Login With Facebook</button></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col><button ion-button block class="instagramButton">Login With Instagram</button></ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div class="hrLine"><span>Or</span></div>\n\n    <form [formGroup]="login" (ngSubmit)="attemptUserLogin()">\n      <ion-list no-lines padding-top>\n        <ion-item>\n          <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="password" placeholder="Password" formControlName="pwd"></ion-input>\n        </ion-item>\n      </ion-list>\n      <button ion-button block round color="secondary" type="submit" [disabled]="!login.valid">Login</button>\n      <label class="error" *ngIf="showLoginFailText">{{ loginFailText }} </label>\n    </form>\n\n    <div padding-top>\n    <button ion-button block color="light" clear (click)="signupPage();">If new member ? SIGNUP</button>\n    <button ion-button block color="light" clear (click)="forgotPasswordPage();">Forgot Password</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\user\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_5__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_constants__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_helper__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_nfc__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_toast__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__forgot_forgot__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, storage, navParams, network, zone, apiService, nfc, ndef, loadingCtrl, formBuilder, helper, events, platform, toast) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.network = network;
        this.zone = zone;
        this.apiService = apiService;
        this.nfc = nfc;
        this.ndef = ndef;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.helper = helper;
        this.events = events;
        this.platform = platform;
        this.toast = toast;
        this.showDuplicateText = false;
        this.isUserLoggedIn = false;
        this.isDeviceOnline = true;
        // watch network for a disconnect
        this.network.onDisconnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = false;
            });
        });
        // watch network for a connection
        this.network.onConnect().subscribe(function () {
            _this.zone.run(function () {
                _this.isDeviceOnline = true;
            });
        });
        this.register = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            name: [''],
            pwd: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6)])],
            group: ['']
        });
        var $view = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* Constants */].userLoggedInKey).then(function (value) {
            if (value != null) {
                _this.isUserLoggedIn = true;
                _this.userInfo = value;
                if (value.userType == 2)
                    _this.showLinkTagButton = true;
                var loading_1 = _this.loadingCtrl.create({
                    content: 'Espere un momento...'
                });
                loading_1.present();
                $view.register = $view.formBuilder.group({
                    email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
                    name: [''],
                    pwd: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6)],
                    group: ['']
                });
                _this.userInfo = value;
                _this.apiService.getData({ 'id': _this.userInfo.userId, 'type': 'user' }, 'users.php').then(function (result) {
                    loading_1.dismiss();
                    _this.responseData = result;
                    _this.nameValue = _this.responseData.user.name;
                    _this.emailValue = _this.responseData.user.email;
                });
            }
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.logout = function () {
        this.helper.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.cancel = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */]);
    };
    SignupPage.prototype.loginPage = function () { this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__login_login__["a" /* LoginPage */]); };
    SignupPage.prototype.forgotPasswordPage = function () { this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__forgot_forgot__["a" /* ForgotPage */]); };
    SignupPage.prototype.linkTag = function () {
        var _this = this;
        this.nfc.addNdefListener(function () {
            if (_this.platform.is('cordova')) {
                _this.toast.show('successfully attached ndef listener', '5000', 'center');
            }
            else {
                alert('successfully attached ndef listener');
            }
        }, function (err) {
            if (_this.platform.is('cordova')) {
                _this.toast.show('error attaching ndef listener' + err, '5000', 'center');
            }
            else {
                alert('error attaching ndef listener' + err);
            }
        }).subscribe(function (event) {
            if (_this.platform.is('cordova')) {
                _this.toast.show('received ndef message. the tag contains: ' + event.tag, '5000', 'center');
                _this.toast.show('decoded tag id' + _this.nfc.bytesToHexString(event.tag.id), '5000', 'center');
            }
            else {
                alert('received ndef message. the tag contains: ' + event.tag);
                alert('decoded tag id' + _this.nfc.bytesToHexString(event.tag.id));
            }
            var message = _this.ndef.textRecord(_this.userInfo.userEmail);
            _this.nfc.share([message]).then(function (success) {
                console.log(success);
            }).catch(function (err) {
                console.log(err);
            });
        });
    };
    SignupPage.prototype.attemptUserRegister = function () {
        var _this = this;
        this.showDuplicateText = false;
        var loading = this.loadingCtrl.create({
            content: 'Espere un momento...'
        });
        loading.present();
        var formData = new FormData();
        this.storage.get(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* Constants */].userLoggedInKey).then(function (value) {
            _this.userInfo = value;
            formData.append('userId', _this.userInfo.userId);
            formData.append('name', _this.register.value.name);
            formData.append('email', _this.register.value.email);
            formData.append('user_type_id', '2');
            formData.append('uid', '1234567890');
            if (value != null) {
                formData.append('type', 'save');
                if (_this.register.value.pwd)
                    formData.append('password', _this.register.value.pwd);
            }
            else {
                formData.append('type', 'new');
                formData.append('password', _this.register.value.pwd);
            }
            _this.apiService.postData(formData, 'users.php').then(function (result) {
                loading.dismiss();
                _this.responseData = result;
                if (_this.responseData.status == "ok") {
                    var userArray = {
                        userId: _this.responseData.id,
                        userName: _this.responseData.user.name,
                        userEmail: _this.responseData.user.email,
                        userType: _this.responseData.user.user_type_id
                    };
                    _this.storage.set(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* Constants */].userLoggedInKey, userArray);
                    _this.events.publish('setBalance', '$' + parseFloat(_this.responseData.user.amount).toFixed(2));
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */]);
                }
                else if (_this.responseData.msg == "duplicate") {
                    _this.showDuplicateText = true;
                }
            });
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\user\src\pages\signup\signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>signup</ion-title>\n        <ion-buttons end *ngIf="isUserLoggedIn">\n          <button id="logout" (click)="logout()">\n            Logout\n          </button>\n        </ion-buttons>\n  </ion-navbar>\n  <ion-item class="no-conection" *ngIf="!isDeviceOnline">Sin conexión a internet</ion-item>\n\n</ion-header>\n\n\n<ion-content padding class="masters">\n\n    <ion-grid>\n      <ion-row *ngIf="!isUserLoggedIn">\n        <ion-col><button ion-button block class="facebookButton"> Facebook</button></ion-col>\n        <ion-col><button ion-button block class="instagramButton"> Instagram</button></ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button block *ngIf="showLinkTagButton" (click)="linkTag()">Enlazar Tag</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div class="hrLine" *ngIf="!isUserLoggedIn"><span>Or</span></div>\n    <form [formGroup]="register" (ngSubmit)="attemptUserRegister()">\n      <ion-list no-lines padding-top>\n        <ion-item>\n          <ion-input type="text" placeholder="Nombre" value="{{ nameValue }}" formControlName="name"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="email" placeholder="Email" value="{{ emailValue }}" formControlName="email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="password" placeholder="Password" formControlName="pwd"></ion-input>\n        </ion-item>\n      </ion-list>\n      <button ion-button block round color="secondary" type="submit" [disabled]="!register.valid" *ngIf="!isUserLoggedIn">Signup</button>\n      <button ion-button block round color="secondary" type="submit" [disabled]="!register.valid" *ngIf="isUserLoggedIn">Guardar</button>\n      <label class="error" *ngIf="showDuplicateText">Este correo ya existe, intente otro</label>\n      <ion-row><a center ion-link color="primary" (click)="cancel();" *ngIf="isUserLoggedIn">Cancel</a></ion-row>\n    </form>\n    <div padding *ngIf="!isUserLoggedIn">\n      <button ion-button block color="light" clear (click)="loginPage();">If already have an account ? LOGIN</button>\n      <button ion-button block color="light" clear (click)="forgotPasswordPage();">Forgot Password</button>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\user\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_nfc__["a" /* NFC */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_nfc__["b" /* Ndef */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7__providers_helper__["a" /* HelperService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_toast__["a" /* Toast */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

},[224]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWdlcy9mb3Jnb3QvZm9yZ290LnRzIiwiLi4vLi4vc3JjL3BhZ2VzL2FjY291bnQvYWNjb3VudC50cyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2VzbTUgbGF6eSIsIi4uLy4uL3NyYyBsYXp5IiwiLi4vLi4vc3JjL3BhZ2VzL3NjYW5uZXIvc2Nhbm5lci50cyIsIi4uLy4uL3NyYy9wYWdlcy9wYXltZW50L3BheW1lbnQudHMiLCIuLi8uLi9zcmMvcGFnZXMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucy50cyIsIi4uLy4uL3NyYy9hcHAvbWFpbi50cyIsIi4uLy4uL3NyYy9hcHAvYXBwLm1vZHVsZS50cyIsIi4uLy4uL3NyYy9zZXJ2aWNlcy9jb25zdGFudHMudHMiLCIuLi8uLi9zcmMvcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlLnRzIiwiLi4vLi4vc3JjL3Byb3ZpZGVycy9oZWxwZXIudHMiLCIuLi8uLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCIuLi8uLi9zcmMvcGFnZXMvbGlzdC9saXN0LnRzIiwiLi4vLi4vc3JjL3BhZ2VzL2hvbWUvaG9tZS50cyIsIi4uLy4uL3NyYy9wYWdlcy9sb2dpbi9sb2dpbi50cyIsIi4uLy4uL3NyYy9wYWdlcy9zaWdudXAvc2lnbnVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQzBCO0FBQzVCO0FBQ29CO0FBQ1M7QUFFbEM7QUFDRztBQUU5Qzs7Ozs7R0FLRztBQU1IO0lBUUUsb0JBQW1CLE9BQXNCLEVBQVMsV0FBOEIsRUFBUyxTQUFvQixFQUFVLE9BQWdCLEVBQVUsSUFBWSxFQUNwSixVQUErQixFQUFVLFdBQXdCO1FBRDFFLGlCQWtCQztRQWxCa0IsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxZ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TyxDQUFDLDZEQUFRLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFDRCxJQUFJLENBQUMsRUFBRSxFQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFDO29CQUM1QyxLQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO2dCQUNoQyxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsYUFBRztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBaEtVLFVBQVU7UUFKdEIsd0VBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1dBQ0c7U0FDM0IsQ0FBQzsyT0FZNEIsMEVBQWdDLHFFQUEyQixDQUF5RDtZQUMxSCx1SUFBaUMsRUFBRywrREFBMEMsc0VBQW1EO1lBQ3RJLE9BQXFGO09BYjNGLFVBQVUsQ0FpS3RCO0lBQUQsQ0FBQztBQUFBO1NBaktZLFVBQVUsZSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcywgTG9hZGluZ0NvbnRyb2xsZXIgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmsnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFwaVNlcnZpY2VQcm92aWRlciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZSc7XG5cbmltcG9ydCB7IExvZ2luUGFnZSB9IGZyb20gJy4uL2xvZ2luL2xvZ2luJztcbmltcG9ydCB7IFNpZ251cFBhZ2UgfSBmcm9tICcuLi9zaWdudXAvc2lnbnVwJztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBGb3Jnb3RQYWdlIHBhZ2UuXG4gKlxuICogU2VlIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvY29tcG9uZW50cy8jbmF2aWdhdGlvbiBmb3IgbW9yZSBpbmZvIG9uXG4gKiBJb25pYyBwYWdlcyBhbmQgbmF2aWdhdGlvbi5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLWZvcmdvdCcsXG4gIHRlbXBsYXRlVXJsOiAnZm9yZ290Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBGb3Jnb3RQYWdlIHtcbiAgcHJpdmF0ZSBmb3Jnb3QgOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBpc0RldmljZU9ubGluZSA6IGJvb2xlYW47XG4gIHB1YmxpYyBzaG93Rm9yZ290RmFpbFRleHQgOiBib29sZWFuO1xuICBwdWJsaWMgZm9yZ290RmFpbFRleHQgOiBzdHJpbmc7XG4gIHB1YmxpYyByZXNwb25zZURhdGEgOiBhbnk7XG4gIHB1YmxpYyBzaG93U2VudCA6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHB1YmxpYyBsb2FkaW5nQ3RybDogTG9hZGluZ0NvbnRyb2xsZXIsIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcywgcHJpdmF0ZSBuZXR3b3JrOiBOZXR3b3JrLCBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBwdWJsaWMgYXBpU2VydmljZSA6IEFwaVNlcnZpY2VQcm92aWRlciwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcbiAgICB0aGlzLmZvcmdvdCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGRpc2Nvbm5lY3RcbiAgICB0aGlzLm5ldHdvcmsub25EaXNjb25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGNvbm5lY3Rpb25cbiAgICB0aGlzLm5ldHdvcmsub25Db25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ2lvblZpZXdEaWRMb2FkIEZvcmdvdFBhZ2UnKTtcbiAgfVxuXG4gIGF0dGVtcHRVc2VyRm9yZ290KCkge1xuICAgIGxldCBsb2FkaW5nID0gdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgY29udGVudDogJ0VzcGVyZSB1biBtb21lbnRvLi4uJ1xuICAgIH0pO1xuICAgIGxvYWRpbmcucHJlc2VudCgpO1xuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnZScsIHRoaXMuZm9yZ290LnZhbHVlLmVtYWlsKTtcbiAgICB0aGlzLmFwaVNlcnZpY2UucG9zdERhdGEoZm9ybURhdGEsJ3NlbmRfbWFpbC5waHAnKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgbG9hZGluZy5kaXNtaXNzKCk7XG4gICAgICAgIHRoaXMucmVzcG9uc2VEYXRhID0gcmVzdWx0O1xuICAgICAgICBpZih0aGlzLnJlc3BvbnNlRGF0YS5zdGF0dXMgPT0gJ29rJyl7XG4gICAgICAgICAgdGhpcy5zaG93U2VudCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zaG93Rm9yZ290RmFpbFRleHQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNob3dGb3Jnb3RGYWlsVGV4dCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5mb3Jnb3RGYWlsVGV4dCA9IHRoaXMucmVzcG9uc2VEYXRhLm1zZyA9PSAnbm8gdXNlcicgPyAnVXN1YXJpbyBubyBleGlzdGUnIDogJ0Vycm9yIGRlc2Nvbm9jaWRvJztcbiAgICAgICAgfVxuICAgIH0sIChlcnIpID0+IHtcbiAgICAgIC8vIEVycm9yIGxvZ1xuICAgICAgbG9hZGluZy5kaXNtaXNzKCk7XG4gICAgICB0aGlzLnNob3dGb3Jnb3RGYWlsVGV4dCA9IHRydWU7XG4gICAgICB0aGlzLmZvcmdvdEZhaWxUZXh0ID0gZXJyO1xuICAgIH0pO1xuICB9XG5cbiAgbG9naW5QYWdlKCl7IHRoaXMubmF2Q3RybC5zZXRSb290KExvZ2luUGFnZSk7IH1cbiAgc2lnbnVwUGFnZSgpeyB0aGlzLm5hdkN0cmwuc2V0Um9vdChTaWdudXBQYWdlKTsgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvZm9yZ290L2ZvcmdvdC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMsIExvYWRpbmdDb250cm9sbGVyLCBFdmVudHMgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yayc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuaW1wb3J0IHsgQXBpU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvaGVscGVyJztcbi8vaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2JhcmNvZGUtc2Nhbm5lcic7XG5cbi8vaW1wb3J0IHsgVG9hc3QgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3RvYXN0JztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBBY2NvdW50UGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1hY2NvdW50JyxcbiAgdGVtcGxhdGVVcmw6ICdhY2NvdW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBY2NvdW50UGFnZSB7XG4gIHB1YmxpYyBiYWxhbmNlRm9ybSA6IEZvcm1Hcm91cDtcbiAgcHVibGljIGJhbGFuY2UgOiBzdHJpbmc7XG4gIHB1YmxpYyBzaG93Rm9ybSA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGlzRGV2aWNlT25saW5lIDogYm9vbGVhbjtcbiAgcHVibGljIHJlc3BvbnNlRGF0YSA6IGFueTtcbiAgcHVibGljIHBheVJlc3VsdFRleHQgOiBzdHJpbmc7XG4gIHB1YmxpYyBzaG93UGF5bWVudFJlc3VsdFRleHQgOiBib29sZWFuO1xuICBwdWJsaWMgc2hvd1FSQ29kZSA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHRyYW5zYWN0aW9ucyA6IGFueTtcbiAgcHVibGljIHVzZXJJbmZvOiBhbnk7XG4gIHB1YmxpYyBjcmVhdGVkQ29kZTogYW55O1xuICBwdWJsaWMgaXRlbXM6IEFycmF5PHtpZDogbnVtYmVyLCB0eXBlOiBzdHJpbmcsIHN0b3JlOiBzdHJpbmcsIHByaWNlOiBzdHJpbmcsIGRhdGU6IHN0cmluZ30+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIG5ldHdvcms6IE5ldHdvcmssIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcyxcbiAgICBwdWJsaWMgbG9hZGluZ0N0cmw6IExvYWRpbmdDb250cm9sbGVyLCBwdWJsaWMgYXBpU2VydmljZSA6IEFwaVNlcnZpY2VQcm92aWRlciwgcHVibGljIGV2ZW50cyA6IEV2ZW50cyxcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSBoZWxwZXI6IEhlbHBlclNlcnZpY2UgLyosIHB1YmxpYyBiYXJjb1NjYW5uZXI6IEJhcmNvZGVTY2FubmVyLCBwcml2YXRlIHRvYXN0OiBUb2FzdCovKSB7XG4gICAgdGhpcy5zaG93UGF5bWVudFJlc3VsdFRleHQgPSBmYWxzZTtcbiAgICB0aGlzLnBheVJlc3VsdFRleHQgPSBcIlwiO1xuXG4gICAgdGhpcy5iYWxhbmNlID0gdGhpcy5oZWxwZXIuYmFsYW5jZTtcbiAgICB0aGlzLmJhbGFuY2VGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgIGFtb3VudDpbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBkaXNjb25uZWN0XG4gICAgdGhpcy5uZXR3b3JrLm9uRGlzY29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBjb25uZWN0aW9uXG4gICAgdGhpcy5uZXR3b3JrLm9uQ29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnVzZXJMb2dnZWRJbktleSkudGhlbigodmFsdWUpPT57XG4gICAgICB0aGlzLnVzZXJJbmZvID0gdmFsdWU7XG4gICAgICB0aGlzLnVwZGF0ZVRyYW5zYWN0aW9ucygpO1xuICAgICAgaWYodGhpcy51c2VySW5mby51c2VyVHlwZSA9PSAnMScpe1xuICAgICAgICB0aGlzLnNob3dRUkNvZGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNyZWF0ZWRDb2RlID0gXCJ7XFxcInN0b3JlXFxcIjpcXFwiXCIgKyB0aGlzLnVzZXJJbmZvLnVzZXJOYW1lICsgXCJcXFwiLFxcXCJzdG9yZUlkXFxcIjpcXFwiXCIgKyB0aGlzLnVzZXJJbmZvLnVzZXJJZCArIFwiXFxcIn1cIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVRyYW5zYWN0aW9ucygpe1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB2YXIgZGF0YSA9IHsgJ3UnOiB0aGlzLnVzZXJJbmZvLnVzZXJJZCwgdDogJ2J1eScgfVxuICAgIHRoaXMuYXBpU2VydmljZS5nZXREYXRhKGRhdGEsICd0cmFuc2FjdGlvbnMucGhwJykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgdGhpcy50cmFuc2FjdGlvbnMgPSByZXN1bHQ7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJhbnNhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IHRoaXMudHJhbnNhY3Rpb25zW2ldO1xuICAgICAgICBsZXQgdGRhdGUgPSBuZXcgRGF0ZSh0cmFuc2FjdGlvbi5kYXRlX2NyZWF0ZWQpO1xuXG4gICAgICAgIGxldCBuYW1lID0gJyc7XG4gICAgICAgIGlmKHRyYW5zYWN0aW9uLmluX25hbWUubGVuZ3RoIDwgNyl7XG4gICAgICAgICAgbmFtZSA9IHRyYW5zYWN0aW9uLmluX25hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICBuYW1lID0gdHJhbnNhY3Rpb24uaW5fbmFtZS5zdWJzdHIoMCwgNykgKyAnLi4uJ1xuICAgICAgICB9XG4gICAgICAgIGxldCBwcmljZUZpeGVkID0gdHJhbnNhY3Rpb24udHJhbnNhY3Rpb25fdHlwZV9pZCA9PSAzID8gKCckJyArIHBhcnNlRmxvYXQodHJhbnNhY3Rpb24ucHJpY2UpLnRvRml4ZWQoMikpIDogJygkJyArIHBhcnNlRmxvYXQodHJhbnNhY3Rpb24ucHJpY2UpLnRvRml4ZWQoMikgKyAnKSc7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgaWQ6IHRyYW5zYWN0aW9uLmlkLFxuICAgICAgICAgIHR5cGU6IHRyYW5zYWN0aW9uLnRyYW5zYWN0aW9uX3R5cGVfaWQgPT0gMyA/ICdEJyA6ICdDJyxcbiAgICAgICAgICBzdG9yZTogdHJhbnNhY3Rpb24udHJhbnNhY3Rpb25fdHlwZV9pZCA9PSAzID8gJy0tLS0tLS0nIDogbmFtZSxcbiAgICAgICAgICBwcmljZTogcHJpY2VGaXhlZCxcbiAgICAgICAgICBkYXRlOiB0ZGF0ZS5nZXREYXRlKCkgKyAnLScgKyAodGRhdGUuZ2V0TW9udGgoKSArIDEpICsgJyAnICsgdGRhdGUuZ2V0SG91cnMoKSArICc6JyArIHRkYXRlLmdldE1pbnV0ZXMoKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNob3dQYXlNb3JlQmFsYW5jZUZvcm0oKXtcbiAgICB0aGlzLnNob3dGb3JtID0gdHJ1ZTtcbiAgfVxuXG4gIGF0dGVtcFRvUGF5TW9yZUJhbGFuY2UoKXtcbiAgICBsZXQgbG9hZGluZyA9IHRoaXMubG9hZGluZ0N0cmwuY3JlYXRlKHtcbiAgICAgIGNvbnRlbnQ6ICdFc3BlcmUgdW4gbW9tZW50by4uLidcbiAgICB9KTtcbiAgICBsb2FkaW5nLnByZXNlbnQoKTtcbiAgICB0aGlzLnNob3dQYXltZW50UmVzdWx0VGV4dCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMudXNlckxvZ2dlZEluS2V5KS50aGVuKHZhbHVlID0+IHtcbiAgICAgIHRoaXMudXNlckluZm8gPSB2YWx1ZTtcbiAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCdhJywgcGFyc2VGbG9hdCh0aGlzLmJhbGFuY2VGb3JtLnZhbHVlLmFtb3VudCkudG9GaXhlZCgyKSk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3UnLCB0aGlzLnVzZXJJbmZvLnVzZXJJZCk7XG5cbiAgICAgIHRoaXMuYXBpU2VydmljZS5wb3N0RGF0YShmb3JtRGF0YSwgJ3BheW1vcmViYWxhbmNlLnBocCcpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICB0aGlzLnJlc3BvbnNlRGF0YSA9IHJlc3VsdDtcbiAgICAgICAgICB0aGlzLnNob3dQYXltZW50UmVzdWx0VGV4dCA9IHRydWU7XG5cbiAgICAgICAgICBsb2FkaW5nLmRpc21pc3MoKTtcbiAgICAgICAgICBpZiAodGhpcy5yZXNwb25zZURhdGEuc3RhdHVzID09IFwib2tcIikge1xuICAgICAgICAgICAgdmFyIGJhbGFuY2VWYWwgPSAnJCcgKyBwYXJzZUZsb2F0KHRoaXMucmVzcG9uc2VEYXRhLmJhbGFuY2UpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICB0aGlzLnBheVJlc3VsdFRleHQgPSAnU3UgdHJhbnNhY2Npb24gc2UgaGEgaGVjaG8gY29uIGV4aXRvLlxcbicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1N1IG51ZXZvIHNhbGRvIGVzICcgKyBiYWxhbmNlVmFsO1xuICAgICAgICAgICAgdGhpcy5ldmVudHMucHVibGlzaCgnc2V0QmFsYW5jZScsIGJhbGFuY2VWYWwpO1xuICAgICAgICAgICAgdGhpcy5iYWxhbmNlID0gYmFsYW5jZVZhbDtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVHJhbnNhY3Rpb25zKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgIHRoaXMucGF5UmVzdWx0VGV4dCA9IHRoaXMucmVzcG9uc2VEYXRhLm1zZztcbiAgICAgICAgICB9XG4gICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgbG9hZGluZy5kaXNtaXNzKCk7XG4gICAgICAgICAgdGhpcy5zaG93UGF5bWVudFJlc3VsdFRleHQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMucGF5UmVzdWx0VGV4dCA9ICdIYSBvY3VycmlkbyB1biBlcnJvcjogJyArIGVyci5zdGF0dXM7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL2FjY291bnQvYWNjb3VudC50cyIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdGNoZWQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IDEyODtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2VzbTUgbGF6eVxuLy8gbW9kdWxlIGlkID0gMTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdGNoZWQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IDE3MTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYyBsYXp5XG4vLyBtb2R1bGUgaWQgPSAxNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMsIEV2ZW50cywgUGxhdGZvcm0gfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IFFSU2Nhbm5lciwgUVJTY2FubmVyU3RhdHVzIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9xci1zY2FubmVyJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvaGVscGVyJztcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS90b2FzdCc7XG5cbmltcG9ydCB7IFBheW1lbnRQYWdlIH0gZnJvbSAnLi4vcGF5bWVudC9wYXltZW50JztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBTY2FubmVyUGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1zY2FubmVyJyxcbiAgdGVtcGxhdGVVcmw6ICdzY2FubmVyLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTY2FubmVyUGFnZSB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcywgcHJpdmF0ZSBxclNjYW5uZXI6IFFSU2Nhbm5lcixcbiAgICBwdWJsaWMgaGVscGVyIDogSGVscGVyU2VydmljZSwgcHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybSwgcHVibGljIGV2ZW50cyA6IEV2ZW50cywgcHJpdmF0ZSB0b2FzdDogVG9hc3QpIHtcblxuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKSB7XG4gICAgLy8gT3B0aW9uYWxseSByZXF1ZXN0IHRoZSBwZXJtaXNzaW9uIGVhcmx5XG4gICAgdGhpcy5xclNjYW5uZXIucHJlcGFyZSgpXG4gICAgICAgIC50aGVuKChzdGF0dXM6IFFSU2Nhbm5lclN0YXR1cykgPT4ge1xuICAgICAgICAgICAgIGlmIChzdGF0dXMuYXV0aG9yaXplZCkge1xuICAgICAgICAgICAgICAgLy8gY2FtZXJhIHBlcm1pc3Npb24gd2FzIGdyYW50ZWRcblxuXG4gICAgICAgICAgICAgICAvLyBzdGFydCBzY2FubmluZ1xuICAgICAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tYXBwJykuY2xhc3NMaXN0LmFkZCgnc2Nhbm5lcl9iZycpO1xuICAgICAgICAgICAgICAgIGxldCBzY2FuU3ViID0gdGhpcy5xclNjYW5uZXIuc2NhbigpLnN1YnNjcmliZSgodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vLSB0ZXh0IGRlYmUgdGVuZXIgdW4ganNvbiBjb24gZWwgaWQgZGUgbGEgdGllbmRhIHkgZWwgbm9tYnJlXG5cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgc2NhbkluZm8gPSBKU09OLnBhcnNlKHRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVscGVyLnN0b3JlTmFtZSA9IHNjYW5JbmZvLnN0b3JlO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVscGVyLnN0b3JlSWQgPSBzY2FuSW5mby5zdG9yZUlkO1xuXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5xclNjYW5uZXIuaGlkZSgpOyAvLyBoaWRlIGNhbWVyYSBwcmV2aWV3XG4gICAgICAgICAgICAgICAgICAgICAgc2NhblN1Yi51bnN1YnNjcmliZSgpOyAvLyBzdG9wIHNjYW5uaW5nXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZDdHJsLnB1c2goUGF5bWVudFBhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnBsYXRmb3JtLmlzKCdjb3Jkb3ZhJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdC5zaG93KCdIYSBvY3VycmlkbyB1biBlcnJvci4gSW50ZW50ZSBudWV2YW1lbnRlICgnK2UrJyknLCAnNTAwMCcsICdjZW50ZXInKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZDdHJsLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdIYSBvY3VycmlkbyB1biBlcnJvci4gSW50ZW50ZSBudWV2YW1lbnRlICgnK2UrJyknKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMuZGVuaWVkKSB7XG4gICAgICAgICAgICAgICAvLyBjYW1lcmEgcGVybWlzc2lvbiB3YXMgcGVybWFuZW50bHkgZGVuaWVkXG4gICAgICAgICAgICAgICAvLyB5b3UgbXVzdCB1c2UgUVJTY2FubmVyLm9wZW5TZXR0aW5ncygpIG1ldGhvZCB0byBndWlkZSB0aGUgdXNlciB0byB0aGUgc2V0dGluZ3MgcGFnZVxuICAgICAgICAgICAgICAgLy8gdGhlbiB0aGV5IGNhbiBncmFudCB0aGUgcGVybWlzc2lvbiBmcm9tIHRoZXJlXG4gICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgIC8vIHBlcm1pc3Npb24gd2FzIGRlbmllZCwgYnV0IG5vdCBwZXJtYW5lbnRseS4gWW91IGNhbiBhc2sgZm9yIHBlcm1pc3Npb24gYWdhaW4gYXQgYSBsYXRlciB0aW1lLlxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB0aGlzLnFyU2Nhbm5lci5zaG93KCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGU6IGFueSkgPT4ge1xuICAgICAgaWYodGhpcy5wbGF0Zm9ybS5pcygnY29yZG92YScpKXtcbiAgICAgICAgdGhpcy50b2FzdC5zaG93KCdIYSBvY3VycmlkbyB1biBlcnJvci4gSW50ZW50ZSBudWV2YW1lbnRlICgnK2UrJyknLCAnMTAwMDAnLCAnY2VudGVyJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9zY2FubmVyL3NjYW5uZXIudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy9pbXBvcnQgeyBCYXJjb2RlU2Nhbm5lciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmFyY29kZS1zY2FubmVyJztcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS90b2FzdCc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMsIExvYWRpbmdDb250cm9sbGVyLCBFdmVudHMsIFBsYXRmb3JtIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmsnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJztcbmltcG9ydCB7IEFwaVNlcnZpY2VQcm92aWRlciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2hlbHBlcic7XG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4uL2hvbWUvaG9tZSc7XG5cbi8qKlxuICogR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgUGF5bWVudFBhZ2UgcGFnZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtcGF5bWVudCcsXG4gIHRlbXBsYXRlVXJsOiAncGF5bWVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudFBhZ2Uge1xuICBwcml2YXRlIHBheSA6IEZvcm1Hcm91cDtcbiAgcHVibGljIGlzRGV2aWNlT25saW5lIDogYm9vbGVhbjtcbiAgcHVibGljIHNob3dQYXltZW50RmFpbFRleHQgOiBib29sZWFuO1xuICBwdWJsaWMgcGF5RmFpbFRleHQgOiBzdHJpbmc7XG4gIHB1YmxpYyBzdG9yZU5hbWUgOiBzdHJpbmc7XG4gIHB1YmxpYyBzdG9yZUlkIDogc3RyaW5nO1xuICBwdWJsaWMgcmVzcG9uc2VEYXRhIDogYW55O1xuICBwdWJsaWMgY2xpbmV0czogYW55W10gPSBbXTtcbiAgcHVibGljIHNlbGVjdGVkQ2xpZW50OiBhbnk7XG4gIHB1YmxpYyBjbGllbnRGb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgcGFpZCA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHVzZXJJbmZvOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwcml2YXRlIG5ldHdvcms6IE5ldHdvcmssIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgdG9hc3Q6IFRvYXN0LCBwdWJsaWMgbG9hZGluZ0N0cmw6IExvYWRpbmdDb250cm9sbGVyLCBwdWJsaWMgYXBpU2VydmljZSA6IEFwaVNlcnZpY2VQcm92aWRlciwgcHVibGljIGV2ZW50cyA6IEV2ZW50cyxcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybSwgcHVibGljIGhlbHBlciA6IEhlbHBlclNlcnZpY2UvKnByaXZhdGUgYmFyY29kZVNjYW5uZXI6IEJhcmNvZGVTY2FubmVyLCovKSB7XG4gICAgdGhpcy5wYXkgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgcHJpY2U6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgIHF0eTogWycxJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGRpc2Nvbm5lY3RcbiAgICB0aGlzLm5ldHdvcmsub25EaXNjb25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGNvbm5lY3Rpb25cbiAgICB0aGlzLm5ldHdvcmsub25Db25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuc3RvcmVOYW1lID0gXCJDdWFsIGVzIGxhIGNhbnRpZGFkIGRlIHN1IHRyYW5zYWNjaW9uIGNvbiBcIiArIGhlbHBlci5zdG9yZU5hbWUgKyBcIj9cIjtcbiAgICAvKnRoaXMuc2VsZWN0ZWRDbGllbnQgPSB7fTtcbiAgICB0aGlzLmJhcmNvZGVTY2FubmVyLnNjYW4oKS50aGVuKChiYXJjb2RlRGF0YSkgPT4ge1xuICAgICAgICAvLy0gdGV4dCBkZWJlIHRlbmVyIHVuIGpzb24gY29uIGVsIGlkIGRlIGxhIHRpZW5kYSB5IGVsIG5vbWJyZVxuICAgICAgICB2YXIgc2NhbkluZm8gPSBKU09OLnBhcnNlKGJhcmNvZGVEYXRhLnRleHQpO1xuICAgICAgICB0aGlzLnN0b3JlTmFtZSA9IHNjYW5JbmZvLnN0b3JlO1xuICAgICAgICB0aGlzLnN0b3JlSWQgPSBzY2FuSW5mby5zdG9yZUlkO1xuICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgdGhpcy50b2FzdC5zaG93KGVyciwgJzUwMDAnLCAnY2VudGVyJykuc3Vic2NyaWJlKFxuICAgICAgICAgIHRvYXN0ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvYXN0KTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfSk7Ki9cbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCdpb25WaWV3RGlkTG9hZCBQYXltZW50UGFnZScpO1xuICB9XG5cbiAgZ29CYWNrKCl7XG4gICAgdGhpcy5uYXZDdHJsLnNldFJvb3QoSG9tZVBhZ2UpO1xuICAgIHRoaXMubmF2Q3RybC5wb3BUb1Jvb3QoKTtcbiAgfVxuXG4gIGF0dGVtcFRvUGF5KCl7XG4gICAgdGhpcy5zaG93UGF5bWVudEZhaWxUZXh0ID0gZmFsc2U7XG4gICAgbGV0IGxvYWRpbmcgPSB0aGlzLmxvYWRpbmdDdHJsLmNyZWF0ZSh7XG4gICAgICBjb250ZW50OiAnRXNwZXJlIHVuIG1vbWVudG8uLi4nXG4gICAgfSk7XG4gICAgbG9hZGluZy5wcmVzZW50KCk7XG5cbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy51c2VyTG9nZ2VkSW5LZXkpLnRoZW4odmFsdWUgPT4ge1xuICAgICAgdGhpcy51c2VySW5mbyA9IHZhbHVlO1xuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwJywgdGhpcy5wYXkudmFsdWUucHJpY2UpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3EnLCAnMScpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2MnLCBTdHJpbmcodGhpcy5oZWxwZXIuc3RvcmVJZCkpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3UnLCB0aGlzLnVzZXJJbmZvLnVzZXJJZCk7XG5cbiAgICAgICAgLy8tIGFsIGhhY2VyIHN1Ym1pdCBkZWJlIGRlIGNvcnJlciBhcGkgcGFyYSBkZXNjb250YXIgY2FudGlkYWQgZW4gJCQgZGUgbGEgY3VlbnRhIGRlbCB1c3VzYXJpbyBsb2d1ZWFkb1xuICAgICAgICB0aGlzLmFwaVNlcnZpY2UucG9zdERhdGEoZm9ybURhdGEsICdwYXliaWxsLnBocCcpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGxvYWRpbmcuZGlzbWlzcygpO1xuICAgICAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXN1bHQ7XG4gICAgICAgICAgICB0aGlzLnBhaWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMucmVzcG9uc2VEYXRhLnN0YXR1cyA9PSBcIm9rXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG90YWwgPSB0aGlzLnBheS52YWx1ZS5xdHkgKiB0aGlzLnBheS52YWx1ZS5wcmljZTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnBsYXRmb3JtLmlzKCdjb3Jkb3ZhJykpe1xuICAgICAgICAgICAgICAgICAgdGhpcy50b2FzdC5zaG93KCdTdSB0cmFuc2FjY2lvbiBwb3IgJCcgKyB0b3RhbCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyBhICcgKyB0aGlzLmhlbHBlci5zdG9yZU5hbWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgc2UgaGEgaGVjaG8gY29uIGV4aXRvLlxcbicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdTdSBzYWxkbyByZXN0YW50ZSBlcyBkZSAkJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VEYXRhLmJhbGFuY2UsICcxNTAwMCcsICdjZW50ZXInKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKFwic2V0QmFsYW5jZVwiLCAnJCcgKyBwYXJzZUZsb2F0KHRoaXMucmVzcG9uc2VEYXRhLmJhbGFuY2UpLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2Q3RybC5zZXRSb290KEhvbWVQYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdkN0cmwucG9wVG9Sb290KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNob3dQYXltZW50RmFpbFRleHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgdGhpcy5wYXlGYWlsVGV4dCA9ICdTdSB0cmFuc2FjY2lvbiBwb3IgJCcgKyB0b3RhbCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyBhICcgKyB0aGlzLmhlbHBlci5zdG9yZU5hbWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgc2UgaGEgaGVjaG8gY29uIGV4aXRvLlxcbicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdTdSBzYWxkbyByZXN0YW50ZSBlcyBkZSAkJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VEYXRhLmJhbGFuY2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goJ3NldEJhbGFuY2UnLCAnJCcgKyBwYXJzZUZsb2F0KHRoaXMucmVzcG9uc2VEYXRhLmJhbGFuY2UpLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc2hvd1BheW1lbnRGYWlsVGV4dCA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMucGF5RmFpbFRleHQgPSB0aGlzLnJlc3BvbnNlRGF0YS5tc2c7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICBsb2FkaW5nLmRpc21pc3MoKTtcbiAgICAgICAgICB0aGlzLnBhaWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc2hvd1BheW1lbnRGYWlsVGV4dCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5wYXlGYWlsVGV4dCA9ICdlcnJvcic7XG4gICAgICB9KTtcbiAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgIGxvYWRpbmcuZGlzbWlzcygpO1xuICAgICAgICB0aGlzLnBhaWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNob3dQYXltZW50RmFpbFRleHQgPSB0cnVlO1xuICAgICAgICB0aGlzLnBheUZhaWxUZXh0ID0gZXJyLm1zZztcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL3BheW1lbnQvcGF5bWVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IEFwaVNlcnZpY2VQcm92aWRlciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZSc7XG5pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZXR3b3JrJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9oZWxwZXInO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIFRyYW5zYWN0aW9uc1BhZ2UgcGFnZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtdHJhbnNhY3Rpb25zJyxcbiAgdGVtcGxhdGVVcmw6ICd0cmFuc2FjdGlvbnMuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zYWN0aW9uc1BhZ2Uge1xuICBwdWJsaWMgaXNEZXZpY2VPbmxpbmUgOiBib29sZWFuO1xuICBwdWJsaWMgYmFsYW5jZSA6IHN0cmluZztcbiAgcHVibGljIHRyYW5zYWN0aW9ucyA6IGFueTtcbiAgcHVibGljIHVzZXJJbmZvOiBhbnk7XG4gIHB1YmxpYyBpdGVtczogQXJyYXk8e2lkOiBudW1iZXIsIHVzZXI6IHN0cmluZywgcHJpY2U6IHN0cmluZywgZGF0ZTogc3RyaW5nfT47XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSwgcHVibGljIGFwaVNlcnZpY2UgOiBBcGlTZXJ2aWNlUHJvdmlkZXIsIFxuICBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsIHByaXZhdGUgem9uZTogTmdab25lLCBwcml2YXRlIG5ldHdvcms6IE5ldHdvcmssIHByaXZhdGUgaGVscGVyOiBIZWxwZXJTZXJ2aWNlKSB7XG4gICAgXG4gICAgdGhpcy5iYWxhbmNlID0gdGhpcy5oZWxwZXIuYmFsYW5jZTtcbiAgICBcbiAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGRpc2Nvbm5lY3RcbiAgICB0aGlzLm5ldHdvcmsub25EaXNjb25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGNvbm5lY3Rpb25cbiAgICB0aGlzLm5ldHdvcmsub25Db25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKSB7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnVzZXJMb2dnZWRJbktleSkudGhlbigodmFsdWUpPT57XG4gICAgICB0aGlzLnVzZXJJbmZvID0gdmFsdWU7XG4gICAgICB2YXIgZGF0YSA9IHsgJ3UnOiB0aGlzLnVzZXJJbmZvLnVzZXJJZCwgdHlwZTogJ3NlbGwnIH1cbiAgICAgIHRoaXMuYXBpU2VydmljZS5nZXREYXRhKGRhdGEsICd0cmFuc2FjdGlvbnMucGhwJykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9ucyA9IHJlc3VsdDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRyYW5zYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IHRoaXMudHJhbnNhY3Rpb25zW2ldO1xuICAgICAgICAgIGxldCB0ZGF0ZSA9IG5ldyBEYXRlKHRyYW5zYWN0aW9uLmRhdGVfY3JlYXRlZCk7XG4gICAgICAgICAgXG4gICAgICAgICAgbGV0IG5hbWUgPSAnJztcbiAgICAgICAgICBpZih0cmFuc2FjdGlvbi5vdXRfbmFtZS5sZW5ndGggPCAxMCl7XG4gICAgICAgICAgICBuYW1lID0gdHJhbnNhY3Rpb24ub3V0X25hbWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICBuYW1lID0gdHJhbnNhY3Rpb24ub3V0X25hbWUuc3Vic3RyKDAsIDEwKSArICcuLi4nXG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBwcmljZUZpeGVkID0gJyQnICsgcGFyc2VGbG9hdCh0cmFuc2FjdGlvbi5wcmljZSkudG9GaXhlZCgyKTtcbiAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgICAgaWQ6IHRyYW5zYWN0aW9uLmlkLFxuICAgICAgICAgICAgdXNlcjogbmFtZSxcbiAgICAgICAgICAgIHByaWNlOiBwcmljZUZpeGVkLFxuICAgICAgICAgICAgZGF0ZTogdGRhdGUuZ2V0RGF0ZSgpICsgJy0nICsgKHRkYXRlLmdldE1vbnRoKCkgKyAxKSArICcgJyArIHRkYXRlLmdldEhvdXJzKCkgKyAnOicgKyB0ZGF0ZS5nZXRNaW51dGVzKClcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnMudHMiLCJpbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAubW9kdWxlJztcblxucGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9tYWluLnRzIiwiaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRXJyb3JIYW5kbGVyLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW9uaWNTdG9yYWdlTW9kdWxlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuaW1wb3J0IHsgSW9uaWNBcHAsIElvbmljRXJyb3JIYW5kbGVyLCBJb25pY01vZHVsZSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuLy9pbXBvcnQgeyBGYWNlYm9vayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmFjZWJvb2snO1xuaW1wb3J0IHsgUVJTY2FubmVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9xci1zY2FubmVyJztcblxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3RvYXN0JztcblxuaW1wb3J0IHsgTXlBcHAgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tICcuLi9wYWdlcy9ob21lL2hvbWUnO1xuaW1wb3J0IHsgTGlzdFBhZ2UgfSBmcm9tICcuLi9wYWdlcy9saXN0L2xpc3QnO1xuaW1wb3J0IHsgTG9naW5QYWdlIH0gZnJvbSAnLi4vcGFnZXMvbG9naW4vbG9naW4nO1xuaW1wb3J0IHsgU2lnbnVwUGFnZSB9IGZyb20gJy4uL3BhZ2VzL3NpZ251cC9zaWdudXAnO1xuaW1wb3J0IHsgRm9yZ290UGFnZSB9IGZyb20gJy4uL3BhZ2VzL2ZvcmdvdC9mb3Jnb3QnO1xuaW1wb3J0IHsgQWNjb3VudFBhZ2UgfSBmcm9tICcuLi9wYWdlcy9hY2NvdW50L2FjY291bnQnO1xuaW1wb3J0IHsgUGF5bWVudFBhZ2UgfSBmcm9tICcuLi9wYWdlcy9wYXltZW50L3BheW1lbnQnO1xuaW1wb3J0IHsgU2Nhbm5lclBhZ2UgfSBmcm9tICcuLi9wYWdlcy9zY2FubmVyL3NjYW5uZXInO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25zUGFnZSB9IGZyb20gJy4uL3BhZ2VzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnMnO1xuXG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3N0YXR1cy1iYXInO1xuaW1wb3J0IHsgU3BsYXNoU2NyZWVuIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zcGxhc2gtc2NyZWVuJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi9wcm92aWRlcnMvaGVscGVyJztcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmsnO1xuaW1wb3J0IHsgQXBpU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ3hRUkNvZGVNb2R1bGUgfSBmcm9tICduZ3gtcXJjb2RlMic7XG5pbXBvcnQgeyBORkMsIE5kZWYgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25mYyc7XG4vL2ltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9iYXJjb2RlLXNjYW5uZXInO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNeUFwcCxcbiAgICBIb21lUGFnZSxcbiAgICBMaXN0UGFnZSxcbiAgICBMb2dpblBhZ2UsXG4gICAgU2lnbnVwUGFnZSxcbiAgICBGb3Jnb3RQYWdlLFxuICAgIEFjY291bnRQYWdlLFxuICAgIFBheW1lbnRQYWdlLFxuICAgIFNjYW5uZXJQYWdlLFxuICAgIFRyYW5zYWN0aW9uc1BhZ2VcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUuZm9yUm9vdChNeUFwcCksXG4gICAgSW9uaWNTdG9yYWdlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE5neFFSQ29kZU1vZHVsZVxuICBdLFxuICBib290c3RyYXA6IFtJb25pY0FwcF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIE15QXBwLFxuICAgIEhvbWVQYWdlLFxuICAgIExpc3RQYWdlLFxuICAgIExvZ2luUGFnZSxcbiAgICBTaWdudXBQYWdlLFxuICAgIEZvcmdvdFBhZ2UsXG4gICAgQWNjb3VudFBhZ2UsXG4gICAgUGF5bWVudFBhZ2UsXG4gICAgU2Nhbm5lclBhZ2UsXG4gICAgVHJhbnNhY3Rpb25zUGFnZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBTdGF0dXNCYXIsXG4gICAgU3BsYXNoU2NyZWVuLFxuICAgIEhlbHBlclNlcnZpY2UsXG4gICAgTmV0d29yayxcbiAgICAvL0ZhY2Vib29rLFxuICAgIHtwcm92aWRlOiBFcnJvckhhbmRsZXIsIHVzZUNsYXNzOiBJb25pY0Vycm9ySGFuZGxlcn0sXG4gICAgQXBpU2VydmljZVByb3ZpZGVyLFxuICAgIFFSU2Nhbm5lcixcbiAgICBUb2FzdCxcbiAgICBORkMsXG4gICAgTmRlZlxuICAgIC8vQmFyY29kZVNjYW5uZXJcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLm1vZHVsZS50cyIsImV4cG9ydCB2YXIgQ29uc3RhbnRzID0ge1xyXG4gICAgQVBJX0VORFBPSU5UIDogJ2h0dHBzOi8vd3d3LmVzZmVyYXNvbHVjaW9uZXMuY29tL2FwaS9wYXltZW50L2FwaS8nLFxyXG4gICAgdXNlckxvZ2dlZEluS2V5IDogJ3VzZXJMb2dnZWRJbicsXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvY29uc3RhbnRzLnRzIiwiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5cbi8qXG4gIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIEFwaVNlcnZpY2VQcm92aWRlciBwcm92aWRlci5cblxuICBTZWUgaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2RlcGVuZGVuY3ktaW5qZWN0aW9uIGZvciBtb3JlIGluZm8gb24gcHJvdmlkZXJzXG4gIGFuZCBBbmd1bGFyIERJLlxuKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlUHJvdmlkZXIge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgY29uc29sZS5sb2coJ0hlbGxvIEFwaVNlcnZpY2VQcm92aWRlciBQcm92aWRlcicpO1xuICB9XG5cbiAgcG9zdERhdGEoZGF0YSwgdXJsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaHR0cC5wb3N0KENvbnN0YW50cy5BUElfRU5EUE9JTlQgKyB1cmwsIGRhdGEpXG4gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXREYXRhKGRhdGEsIHVybCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgdmFyIHN0ciA9IFtdO1xuICAgICAgZm9yICh2YXIgcCBpbiBkYXRhKVxuICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgIHN0ci5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChwKSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFbcF0pKTtcbiAgICAgICAgfVxuXG4gICAgICB0aGlzLmh0dHAuZ2V0KENvbnN0YW50cy5BUElfRU5EUE9JTlQgKyB1cmwrJz8nK3N0ci5qb2luKFwiJlwiKSlcbiAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vc2VydmljZXMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWxwZXJTZXJ2aWNlIHtcclxuICAgIHB1YmxpYyBiYWxhbmNlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc3RvcmVOYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc3RvcmVJZDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSl7XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlID0gJy0tLS0nO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEJhbGFuY2UoYWN0dWFsQmFsYW5jZSl7XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlID0gYWN0dWFsQmFsYW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdG9yZUluZm8oYWN0dWFsU3RvcmVOYW1lLCBhY3R1YWxTdG9yZUlkKXtcclxuICAgICAgICB0aGlzLnN0b3JlTmFtZSA9IGFjdHVhbFN0b3JlTmFtZTtcclxuICAgICAgICB0aGlzLnN0b3JlSWQgPSBhY3R1YWxTdG9yZUlkO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpe1xyXG4gICAgICAgIHRoaXMuYmFsYW5jZSA9ICctLS0tJztcclxuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KENvbnN0YW50cy51c2VyTG9nZ2VkSW5LZXksIG51bGwpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3ZpZGVycy9oZWxwZXIudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2LCBQbGF0Zm9ybSwgTG9hZGluZ0NvbnRyb2xsZXIsIEV2ZW50cyB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zdGF0dXMtYmFyJztcbmltcG9ydCB7IFNwbGFzaFNjcmVlbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3BsYXNoLXNjcmVlbic7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vc2VydmljZXMvY29uc3RhbnRzJztcbmltcG9ydCB7IEFwaVNlcnZpY2VQcm92aWRlciB9IGZyb20gJy4uL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2hlbHBlcic7XG5cbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSAnLi4vcGFnZXMvaG9tZS9ob21lJztcbmltcG9ydCB7IEFjY291bnRQYWdlIH0gZnJvbSAnLi4vcGFnZXMvYWNjb3VudC9hY2NvdW50JztcbmltcG9ydCB7IExvZ2luUGFnZSB9IGZyb20gJy4uL3BhZ2VzL2xvZ2luL2xvZ2luJztcbmltcG9ydCB7IFNpZ251cFBhZ2UgfSBmcm9tICcuLi9wYWdlcy9zaWdudXAvc2lnbnVwJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uc1BhZ2UgfSBmcm9tICcuLi9wYWdlcy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnYXBwLmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgTXlBcHAge1xuICBAVmlld0NoaWxkKE5hdikgbmF2OiBOYXY7XG5cbiAgcm9vdFBhZ2U6IGFueSA9IEhvbWVQYWdlO1xuICB1c2VySW5mbzogYW55O1xuICByZXNwb25zZURhdGE6YW55O1xuXG4gIHBhZ2VzOiBBcnJheTx7dGl0bGU6IHN0cmluZywgY29tcG9uZW50OiBhbnksIHR5cGU6IHN0cmluZywgaWNvbjogc3RyaW5nfT47XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybSwgcHVibGljIHN0YXR1c0JhcjogU3RhdHVzQmFyLCBwdWJsaWMgc3BsYXNoU2NyZWVuOiBTcGxhc2hTY3JlZW4sIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSxcbiAgICBwdWJsaWMgYXBpU2VydmljZSA6IEFwaVNlcnZpY2VQcm92aWRlciwgcHVibGljIGxvYWRpbmdDdHJsOiBMb2FkaW5nQ29udHJvbGxlciwgcHVibGljIGV2ZW50cyA6IEV2ZW50cywgcHVibGljIGhlbHBlciA6IEhlbHBlclNlcnZpY2UpIHtcbiAgICB0aGlzLmluaXRpYWxpemVBcHAoKTtcblxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3NldE1lbnVJdGVtcycsIHVzZXJUeXBlID0+IHtcbiAgICAgIHRoaXMuc2V0TWVudUl0ZW1zKHVzZXJUeXBlKTtcbiAgICB9KTtcblxuICAgIHBsYXRmb3JtLnJlYWR5KCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnVzZXJMb2dnZWRJbktleSkudGhlbigodmFsdWUpPT57XG4gICAgICAgICAgaWYodmFsdWUgPT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLm5hdi5zZXRSb290KExvZ2luUGFnZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICBsZXQgbG9hZGluZyA9IHRoaXMubG9hZGluZ0N0cmwuY3JlYXRlKHtcbiAgICAgICAgICAgICAgY29udGVudDogJ0VzcGVyZSB1biBtb21lbnRvLi4uJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsb2FkaW5nLnByZXNlbnQoKTtcbiAgICAgICAgICAgIHRoaXMudXNlckluZm8gPSB2YWx1ZTtcbiAgICAgICAgICAgIHZhciBkYXRhID0geyAnaWQnOiB0aGlzLnVzZXJJbmZvLnVzZXJJZCwgJ3R5cGUnOiAndXNlcicgfVxuICAgICAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLmdldERhdGEoZGF0YSwgJ3VzZXJzLnBocCcpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgbG9hZGluZy5kaXNtaXNzKCk7XG4gICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VEYXRhID0gcmVzdWx0O1xuICAgICAgICAgICAgICB0aGlzLnNldE1lbnVJdGVtcyh0aGlzLnJlc3BvbnNlRGF0YS51c2VyLnVzZXJfdHlwZV9pZCA9PSAyID8gJ3VzZXInIDogJ3N0b3JlJyk7XG4gICAgICAgICAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goXCJzZXRCYWxhbmNlXCIsICckJyArIHBhcnNlRmxvYXQodGhpcy5yZXNwb25zZURhdGEudXNlci5hbW91bnQpLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgICAgICAgbG9hZGluZy5kaXNtaXNzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgdGhpcy5uYXYuc2V0Um9vdChMb2dpblBhZ2UpO1xuICAgICAgICB9KTs7XG4gICAgfSk7XG4gIH1cblxuICBzZXRNZW51SXRlbXModHlwZSl7XG4gICAgaWYodHlwZT09J3VzZXInKXtcbiAgICAgIC8vIHVzZWQgZm9yIGFuIGV4YW1wbGUgb2YgbmdGb3IgYW5kIG5hdmlnYXRpb25cbiAgICAgIHRoaXMucGFnZXMgPSBbXG4gICAgICAgIHsgdGl0bGU6ICdIb21lJywgY29tcG9uZW50OiBIb21lUGFnZSwgdHlwZTogJ3Jvb3QnLCBpY29uOiAnJyB9LFxuICAgICAgICB7IHRpdGxlOiAnTWkgY3VlbnRhJywgY29tcG9uZW50OiBBY2NvdW50UGFnZSwgdHlwZTogJ3B1c2gnLCBpY29uOiAnJyB9LFxuICAgICAgICB7IHRpdGxlOiAnUGVyZmlsJywgY29tcG9uZW50OiBTaWdudXBQYWdlLCB0eXBlOiAncm9vdCcsIGljb246ICcnIH0sXG4gICAgICAgIHsgdGl0bGU6ICdMb2dvdXQnLCBjb21wb25lbnQ6IG51bGwsIHR5cGU6ICdsb2dvdXQnLCBpY29uOiAnbG9nLW91dCcgfVxuICAgICAgXTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIC8vIHVzZWQgZm9yIGFuIGV4YW1wbGUgb2YgbmdGb3IgYW5kIG5hdmlnYXRpb25cbiAgICAgIHRoaXMucGFnZXMgPSBbXG4gICAgICAgIHsgdGl0bGU6ICdIb21lJywgY29tcG9uZW50OiBIb21lUGFnZSwgdHlwZTogJ3Jvb3QnLCBpY29uOiAnJyB9LFxuICAgICAgICB7IHRpdGxlOiAnTWkgY3VlbnRhJywgY29tcG9uZW50OiBBY2NvdW50UGFnZSwgdHlwZTogJ3B1c2gnLCBpY29uOiAnJyB9LFxuICAgICAgICB7IHRpdGxlOiAnTWlzIFZlbnRhcycsIGNvbXBvbmVudDogVHJhbnNhY3Rpb25zUGFnZSwgdHlwZTogJ3B1c2gnLCBpY29uOiAnJyB9LFxuICAgICAgICB7IHRpdGxlOiAnUGVyZmlsJywgY29tcG9uZW50OiBTaWdudXBQYWdlLCB0eXBlOiAncm9vdCcsIGljb246ICcnIH0sXG4gICAgICAgIHsgdGl0bGU6ICdMb2dvdXQnLCBjb21wb25lbnQ6IG51bGwsIHR5cGU6ICdsb2dvdXQnLCBpY29uOiAnbG9nLW91dCcgfVxuICAgICAgXTtcbiAgICB9XG4gIH1cblxuICBpbml0aWFsaXplQXBwKCkge1xuICAgIHRoaXMucGxhdGZvcm0ucmVhZHkoKS50aGVuKCgpID0+IHtcbiAgICAgIC8vIE9rYXksIHNvIHRoZSBwbGF0Zm9ybSBpcyByZWFkeSBhbmQgb3VyIHBsdWdpbnMgYXJlIGF2YWlsYWJsZS5cbiAgICAgIC8vIEhlcmUgeW91IGNhbiBkbyBhbnkgaGlnaGVyIGxldmVsIG5hdGl2ZSB0aGluZ3MgeW91IG1pZ2h0IG5lZWQuXG4gICAgICB0aGlzLnN0YXR1c0Jhci5zdHlsZURlZmF1bHQoKTtcbiAgICAgIHRoaXMuc3BsYXNoU2NyZWVuLmhpZGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5QYWdlKHBhZ2UpIHtcbiAgICAvLyBSZXNldCB0aGUgY29udGVudCBuYXYgdG8gaGF2ZSBqdXN0IHRoaXMgcGFnZVxuICAgIC8vIHdlIHdvdWxkbid0IHdhbnQgdGhlIGJhY2sgYnV0dG9uIHRvIHNob3cgaW4gdGhpcyBzY2VuYXJpb1xuICAgIGlmKHBhZ2UudHlwZSA9PSAnbG9nb3V0JylcbiAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goJ2xvZ291dCcpO1xuICAgIGVsc2UgaWYocGFnZS50eXBlID09ICdyb290JylcbiAgICAgIHRoaXMubmF2LnNldFJvb3QocGFnZS5jb21wb25lbnQpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMubmF2LnB1c2gocGFnZS5jb21wb25lbnQpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcyB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJ2xpc3QuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFBhZ2Uge1xuICBzZWxlY3RlZEl0ZW06IGFueTtcbiAgaWNvbnM6IHN0cmluZ1tdO1xuICBpdGVtczogQXJyYXk8e3RpdGxlOiBzdHJpbmcsIG5vdGU6IHN0cmluZywgaWNvbjogc3RyaW5nfT47XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcykge1xuICAgIC8vIElmIHdlIG5hdmlnYXRlZCB0byB0aGlzIHBhZ2UsIHdlIHdpbGwgaGF2ZSBhbiBpdGVtIGF2YWlsYWJsZSBhcyBhIG5hdiBwYXJhbVxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gbmF2UGFyYW1zLmdldCgnaXRlbScpO1xuXG4gICAgLy8gTGV0J3MgcG9wdWxhdGUgdGhpcyBwYWdlIHdpdGggc29tZSBmaWxsZXIgY29udGVudCBmb3IgZnVuemllc1xuICAgIHRoaXMuaWNvbnMgPSBbJ2ZsYXNrJywgJ3dpZmknLCAnYmVlcicsICdmb290YmFsbCcsICdiYXNrZXRiYWxsJywgJ3BhcGVyLXBsYW5lJyxcbiAgICAnYW1lcmljYW4tZm9vdGJhbGwnLCAnYm9hdCcsICdibHVldG9vdGgnLCAnYnVpbGQnXTtcblxuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDExOyBpKyspIHtcbiAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgIHRpdGxlOiAnSXRlbSAnICsgaSxcbiAgICAgICAgbm90ZTogJ1RoaXMgaXMgaXRlbSAjJyArIGksXG4gICAgICAgIGljb246IHRoaXMuaWNvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5pY29ucy5sZW5ndGgpXVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaXRlbVRhcHBlZChldmVudCwgaXRlbSkge1xuICAgIC8vIFRoYXQncyByaWdodCwgd2UncmUgcHVzaGluZyB0byBvdXJzZWx2ZXMhXG4gICAgdGhpcy5uYXZDdHJsLnB1c2goTGlzdFBhZ2UsIHtcbiAgICAgIGl0ZW06IGl0ZW1cbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL2xpc3QvbGlzdC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBFdmVudHMgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmsnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9oZWxwZXInO1xuXG5pbXBvcnQgeyBMb2dpblBhZ2UgfSBmcm9tICcuLi9sb2dpbi9sb2dpbic7XG5pbXBvcnQgeyBBY2NvdW50UGFnZSB9IGZyb20gJy4uL2FjY291bnQvYWNjb3VudCc7XG5pbXBvcnQgeyBTY2FubmVyUGFnZSB9IGZyb20gJy4uL3NjYW5uZXIvc2Nhbm5lcic7XG4vL2ltcG9ydCB7IFBheW1lbnRQYWdlIH0gZnJvbSAnLi4vcGF5bWVudC9wYXltZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICdob21lLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVQYWdlIHtcbiAgcHVibGljIGlzRGV2aWNlT25saW5lIDogYm9vbGVhbjtcbiAgcHVibGljIGJhbGFuY2UgOiBzdHJpbmc7XG4gIHB1YmxpYyBzaG93UmVmcmVzaEJ1dHRvbiA6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHJpdmF0ZSBuZXR3b3JrOiBOZXR3b3JrLCBwdWJsaWMgZXZlbnRzIDogRXZlbnRzLCBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBwdWJsaWMgaGVscGVyIDogSGVscGVyU2VydmljZSkge1xuICAgICAgdGhpcy5iYWxhbmNlID0gdGhpcy5oZWxwZXIuYmFsYW5jZTtcbiAgICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3NldEJhbGFuY2UnLCBhY3R1YWxCYWxhbmNlID0+IHtcbiAgICAgICAgdGhpcy5iYWxhbmNlID0gYWN0dWFsQmFsYW5jZTtcbiAgICAgICAgdGhpcy5oZWxwZXIuc2V0QmFsYW5jZShhY3R1YWxCYWxhbmNlKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmV2ZW50cy5zdWJzY3JpYmUoJ2xvZ291dCcsKCkgPT4ge1xuICAgICAgICAgIC8vY2FsbCBtZXRob2QgdG8gcmVmcmVzaCBjb250ZW50XG4gICAgICAgICAgdGhpcy5sb2dvdXQoKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgZGlzY29ubmVjdFxuICAgICAgdGhpcy5uZXR3b3JrLm9uRGlzY29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgY29ubmVjdGlvblxuICAgICAgdGhpcy5uZXR3b3JrLm9uQ29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbG9nb3V0KCl7XG4gICAgdGhpcy5oZWxwZXIubG9nb3V0KCk7XG4gICAgdGhpcy5uYXZDdHJsLnNldFJvb3QoTG9naW5QYWdlKTtcbiAgfVxuXG4gIHJlbG9hZEFjY291bnQoKXtcbiAgICAgIHRoaXMubmF2Q3RybC5wdXNoKEFjY291bnRQYWdlKTtcbiAgfVxuXG4gIG1ha2VQYXltZW50KCl7XG4gICAgLyp0aGlzLmhlbHBlci5zdG9yZU5hbWUgPSAnQ2VydmVjZXJpYSBBcnRlc2FuYWwgUy5BLic7XG4gICAgdGhpcy5oZWxwZXIuc3RvcmVJZCA9IDI7XG4gICAgdGhpcy5uYXZDdHJsLnB1c2goUGF5bWVudFBhZ2UpOyovXG4gICAgdGhpcy5uYXZDdHJsLnB1c2goU2Nhbm5lclBhZ2UpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvaG9tZS9ob21lLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcywgRXZlbnRzLCBMb2FkaW5nQ29udHJvbGxlciB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yayc7XG4vL2ltcG9ydCB7IEZhY2Vib29rIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9mYWNlYm9vayc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7IEFwaVNlcnZpY2VQcm92aWRlciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZSc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4uL2hvbWUvaG9tZSc7XG5pbXBvcnQgeyBTaWdudXBQYWdlIH0gZnJvbSAnLi4vc2lnbnVwL3NpZ251cCc7XG5pbXBvcnQgeyBGb3Jnb3RQYWdlIH0gZnJvbSAnLi4vZm9yZ290L2ZvcmdvdCc7XG5cbi8qKlxuICogR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgTG9naW5QYWdlIHBhZ2UuXG4gKlxuICogU2VlIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvY29tcG9uZW50cy8jbmF2aWdhdGlvbiBmb3IgbW9yZSBpbmZvIG9uXG4gKiBJb25pYyBwYWdlcyBhbmQgbmF2aWdhdGlvbi5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICdsb2dpbi5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5QYWdlIHtcbiAgcHJpdmF0ZSBsb2dpbiA6IEZvcm1Hcm91cDtcbiAgcHVibGljIGlzRGV2aWNlT25saW5lIDogYm9vbGVhbjtcbiAgcHVibGljIHNob3dMb2dpbkZhaWxUZXh0IDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgdXNlckluZm8gOiBhbnkgPSB7fTtcbiAgcHVibGljIHJlc3BvbnNlRGF0YSA6IGFueTtcbiAgcHVibGljIGxvZ2luRmFpbFRleHQgOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwcml2YXRlIG5ldHdvcms6IE5ldHdvcmssIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIC8qcHJpdmF0ZSBmYjogRmFjZWJvb2ssKi8gcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHB1YmxpYyBldmVudHMgOiBFdmVudHMsIHB1YmxpYyBhcGlTZXJ2aWNlIDogQXBpU2VydmljZVByb3ZpZGVyLCBwdWJsaWMgbG9hZGluZ0N0cmw6IExvYWRpbmdDb250cm9sbGVyKSB7XG4gICAgdGhpcy5sb2dpbiA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBwd2Q6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgfSk7XG4gICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG5cbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGRpc2Nvbm5lY3RcbiAgICB0aGlzLm5ldHdvcmsub25EaXNjb25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGNvbm5lY3Rpb25cbiAgICB0aGlzLm5ldHdvcmsub25Db25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ2lvblZpZXdEaWRMb2FkIExvZ2luUGFnZScpO1xuICB9XG5cbiAgc2lnbnVwUGFnZSgpeyB0aGlzLm5hdkN0cmwuc2V0Um9vdChTaWdudXBQYWdlKTsgfVxuICBmb3Jnb3RQYXNzd29yZFBhZ2UoKXsgdGhpcy5uYXZDdHJsLnNldFJvb3QoRm9yZ290UGFnZSk7IH1cblxuICBmYkxvZ2luKCl7XG4gICAgLyp0aGlzLmZiLmxvZ2luKFsncHVibGljX3Byb2ZpbGUnLCAnZW1haWwnXSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuZmIuYXBpKCdtZS8/ZmllbGRzPWlkLGVtYWlsLGZpcnN0X25hbWUnLCBbJ3B1YmxpY19wcm9maWxlJywgJ2VtYWlsJ10pLnRoZW4oYXBpUmVzID0+IHtcbiAgICAgICAgICB0aGlzLnVzZXJJbmZvID0gYXBpUmVzO1xuICAgICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgICAgICAgIGFsZXJ0KCdMb2dnZWQgaW50byBGYWNlYm9vayEnKVxuICAgICAgICB9KS5jYXRjaChlID0+IGFsZXJ0KCdFcnJvciBhcGkgaW50byBGYWNlYm9vaycpKTtcbiAgICB9KS5jYXRjaChlID0+IGFsZXJ0KCdFcnJvciBsb2dnaW5nIGludG8gRmFjZWJvb2snICArIGUpKTsqL1xuICB9XG5cbiAgYXR0ZW1wdFVzZXJMb2dpbigpe1xuICAgIGxldCBsb2FkaW5nID0gdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgY29udGVudDogJ0VzcGVyZSB1biBtb21lbnRvLi4uJ1xuICAgIH0pO1xuICAgIGxvYWRpbmcucHJlc2VudCgpO1xuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgndScsIHRoaXMubG9naW4udmFsdWUuZW1haWwpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgncCcsIHRoaXMubG9naW4udmFsdWUucHdkKTtcbiAgICB0aGlzLmFwaVNlcnZpY2UucG9zdERhdGEoZm9ybURhdGEsICdhY2Nlc3MucGhwJykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBsb2FkaW5nLmRpc21pc3MoKTtcbiAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXN1bHQ7XG4gICAgICAgIGlmICh0aGlzLnJlc3BvbnNlRGF0YS5zdGF0dXMgPT0gXCJva1wiKSB7XG4gICAgICAgICAgbGV0IHVzZXJBcnJheSA9IHtcbiAgICAgICAgICAgIHVzZXJJZDogdGhpcy5yZXNwb25zZURhdGEudXNlci5pZCxcbiAgICAgICAgICAgIHVzZXJFbWFpbDogdGhpcy5yZXNwb25zZURhdGEudXNlci5lbWFpbCxcbiAgICAgICAgICAgIHVzZXJOYW1lOiB0aGlzLnJlc3BvbnNlRGF0YS51c2VyLm5hbWUsXG4gICAgICAgICAgICB1c2VyVHlwZTogdGhpcy5yZXNwb25zZURhdGEudXNlci51c2VyX3R5cGVfaWRcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdGhpcy5zdG9yYWdlLnNldChDb25zdGFudHMudXNlckxvZ2dlZEluS2V5LCB1c2VyQXJyYXkpO1xuICAgICAgICAgIHRoaXMuc2hvd0xvZ2luRmFpbFRleHQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKCdzZXRCYWxhbmNlJywgJyQnICsgcGFyc2VGbG9hdCh0aGlzLnJlc3BvbnNlRGF0YS51c2VyLmFtb3VudCkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgdGhpcy5ldmVudHMucHVibGlzaCgnc2V0TWVudUl0ZW1zJywgdGhpcy5yZXNwb25zZURhdGEudXNlci51c2VyX3R5cGVfaWQgPT0gMiA/ICd1c2VyJyA6ICdzdG9yZScpO1xuICAgICAgICAgIHRoaXMubmF2Q3RybC5zZXRSb290KEhvbWVQYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNob3dMb2dpbkZhaWxUZXh0ID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmxvZ2luRmFpbFRleHQgPSAodGhpcy5yZXNwb25zZURhdGEubXNnID09ICdubyBwYXNzd29yZCcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250cmFzZcOxYSBpbmNvcnJlY3RhJyA6ICh0aGlzLnJlc3BvbnNlRGF0YS5tc2cgPT0gJ25vIHVzZXInID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRXN0ZSB1c3VhcmlvIG5vIGV4aXN0ZScgOiAnRXJyb3IgZGVzY29ub2NpZG8nKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL2xvZ2luL2xvZ2luLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcywgTG9hZGluZ0NvbnRyb2xsZXIsIEV2ZW50cywgUGxhdGZvcm0gfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmsnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFwaVNlcnZpY2VQcm92aWRlciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZSc7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvaGVscGVyJztcbmltcG9ydCB7IE5GQywgTmRlZiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmZjJztcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS90b2FzdCc7XG5cbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSAnLi4vaG9tZS9ob21lJztcbmltcG9ydCB7IExvZ2luUGFnZSB9IGZyb20gJy4uL2xvZ2luL2xvZ2luJztcbmltcG9ydCB7IEZvcmdvdFBhZ2UgfSBmcm9tICcuLi9mb3Jnb3QvZm9yZ290JztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBTaWdudXBQYWdlIHBhZ2UuXG4gKlxuICogU2VlIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvY29tcG9uZW50cy8jbmF2aWdhdGlvbiBmb3IgbW9yZSBpbmZvIG9uXG4gKiBJb25pYyBwYWdlcyBhbmQgbmF2aWdhdGlvbi5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLXNpZ251cCcsXG4gIHRlbXBsYXRlVXJsOiAnc2lnbnVwLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTaWdudXBQYWdlIHtcbiAgcHVibGljIGlzRGV2aWNlT25saW5lIDogYm9vbGVhbjtcbiAgcHJpdmF0ZSByZWdpc3RlciA6IEZvcm1Hcm91cDtcbiAgcHVibGljIHJlc3BvbnNlRGF0YSA6IGFueTtcbiAgcHVibGljIHNob3dEdXBsaWNhdGVUZXh0OiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBuYW1lVmFsdWUgOiBzdHJpbmc7XG4gIHB1YmxpYyBlbWFpbFZhbHVlIDogc3RyaW5nO1xuICBwdWJsaWMgaXNVc2VyTG9nZ2VkSW4gOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzaG93TGlua1RhZ0J1dHRvbiA6IGJvb2xlYW47XG4gIHB1YmxpYyB1c2VySW5mbzogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UsIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcywgcHJpdmF0ZSBuZXR3b3JrOiBOZXR3b3JrLCBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBwdWJsaWMgYXBpU2VydmljZSA6IEFwaVNlcnZpY2VQcm92aWRlciwgcHJpdmF0ZSBuZmM6IE5GQywgcHJpdmF0ZSBuZGVmOiBOZGVmLCBwdWJsaWMgbG9hZGluZ0N0cmw6IExvYWRpbmdDb250cm9sbGVyLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgXG4gICAgcHVibGljIGhlbHBlcjogSGVscGVyU2VydmljZSwgcHVibGljIGV2ZW50czogRXZlbnRzLCBwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtLCBwcml2YXRlIHRvYXN0OiBUb2FzdCkge1xuICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgZGlzY29ubmVjdFxuICAgIHRoaXMubmV0d29yay5vbkRpc2Nvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgY29ubmVjdGlvblxuICAgIHRoaXMubmV0d29yay5vbkNvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICBuYW1lOiBbJyddLFxuICAgICAgICBwd2Q6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KV0pXSxcbiAgICAgICAgZ3JvdXAgOiBbJyddXG4gICAgfSk7XG4gICAgdmFyICR2aWV3ID0gdGhpcztcbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy51c2VyTG9nZ2VkSW5LZXkpLnRoZW4odmFsdWUgPT4ge1xuICAgICAgaWYodmFsdWUgIT0gbnVsbCl7XG4gICAgICAgIHRoaXMuaXNVc2VyTG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnVzZXJJbmZvID0gdmFsdWU7XG4gICAgICAgIGlmKHZhbHVlLnVzZXJUeXBlID09IDIpXG4gICAgICAgICAgdGhpcy5zaG93TGlua1RhZ0J1dHRvbiA9IHRydWU7XG4gICAgICAgIGxldCBsb2FkaW5nID0gdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgICAgICAgY29udGVudDogJ0VzcGVyZSB1biBtb21lbnRvLi4uJ1xuICAgICAgICB9KTtcbiAgICAgICAgbG9hZGluZy5wcmVzZW50KCk7XG4gICAgICAgICR2aWV3LnJlZ2lzdGVyID0gJHZpZXcuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBuYW1lOiBbJyddLFxuICAgICAgICAgICAgcHdkOiBbJycsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXSxcbiAgICAgICAgICAgIGdyb3VwIDogWycnXVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVzZXJJbmZvID0gdmFsdWU7XG4gICAgICAgIHRoaXMuYXBpU2VydmljZS5nZXREYXRhKHsgJ2lkJzogdGhpcy51c2VySW5mby51c2VySWQsICd0eXBlJzogJ3VzZXInIH0sICd1c2Vycy5waHAnKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgbG9hZGluZy5kaXNtaXNzKCk7XG4gICAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXN1bHQ7XG4gICAgICAgICAgdGhpcy5uYW1lVmFsdWUgPSB0aGlzLnJlc3BvbnNlRGF0YS51c2VyLm5hbWU7XG4gICAgICAgICAgdGhpcy5lbWFpbFZhbHVlID0gdGhpcy5yZXNwb25zZURhdGEudXNlci5lbWFpbDtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCdpb25WaWV3RGlkTG9hZCBTaWdudXBQYWdlJyk7XG4gIH1cblxuICBsb2dvdXQoKXtcbiAgICAgIHRoaXMuaGVscGVyLmxvZ291dCgpO1xuICAgICAgdGhpcy5uYXZDdHJsLnNldFJvb3QoTG9naW5QYWdlKTtcbiAgfVxuXG4gIGNhbmNlbCgpe1xuICAgICAgdGhpcy5uYXZDdHJsLnNldFJvb3QoSG9tZVBhZ2UpO1xuICB9XG5cbiAgbG9naW5QYWdlKCl7IHRoaXMubmF2Q3RybC5zZXRSb290KExvZ2luUGFnZSk7IH1cbiAgZm9yZ290UGFzc3dvcmRQYWdlKCl7IHRoaXMubmF2Q3RybC5zZXRSb290KEZvcmdvdFBhZ2UpOyB9XG5cbiAgbGlua1RhZygpe1xuICAgIHRoaXMubmZjLmFkZE5kZWZMaXN0ZW5lcigoKSA9PiB7XG4gICAgICBpZih0aGlzLnBsYXRmb3JtLmlzKCdjb3Jkb3ZhJykpe1xuICAgICAgICB0aGlzLnRvYXN0LnNob3coJ3N1Y2Nlc3NmdWxseSBhdHRhY2hlZCBuZGVmIGxpc3RlbmVyJywgJzUwMDAnLCAnY2VudGVyJyk7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBhbGVydCgnc3VjY2Vzc2Z1bGx5IGF0dGFjaGVkIG5kZWYgbGlzdGVuZXInKTtcbiAgICAgIH1cbiAgICB9LCAoZXJyKSA9PiB7XG4gICAgICBpZih0aGlzLnBsYXRmb3JtLmlzKCdjb3Jkb3ZhJykpe1xuICAgICAgICB0aGlzLnRvYXN0LnNob3coJ2Vycm9yIGF0dGFjaGluZyBuZGVmIGxpc3RlbmVyJyArIGVyciwgJzUwMDAnLCAnY2VudGVyJyk7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBhbGVydCgnZXJyb3IgYXR0YWNoaW5nIG5kZWYgbGlzdGVuZXInICsgZXJyKTtcbiAgICAgIH1cbiAgICB9KS5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICBpZih0aGlzLnBsYXRmb3JtLmlzKCdjb3Jkb3ZhJykpe1xuICAgICAgICB0aGlzLnRvYXN0LnNob3coJ3JlY2VpdmVkIG5kZWYgbWVzc2FnZS4gdGhlIHRhZyBjb250YWluczogJyArIGV2ZW50LnRhZywgJzUwMDAnLCAnY2VudGVyJyk7XG4gICAgICAgIHRoaXMudG9hc3Quc2hvdygnZGVjb2RlZCB0YWcgaWQnICsgdGhpcy5uZmMuYnl0ZXNUb0hleFN0cmluZyhldmVudC50YWcuaWQpLCAnNTAwMCcsICdjZW50ZXInKTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGFsZXJ0KCdyZWNlaXZlZCBuZGVmIG1lc3NhZ2UuIHRoZSB0YWcgY29udGFpbnM6ICcgKyBldmVudC50YWcpO1xuICAgICAgICBhbGVydCgnZGVjb2RlZCB0YWcgaWQnICsgdGhpcy5uZmMuYnl0ZXNUb0hleFN0cmluZyhldmVudC50YWcuaWQpKTtcbiAgICAgIH1cblxuICAgICAgbGV0IG1lc3NhZ2UgPSB0aGlzLm5kZWYudGV4dFJlY29yZCh0aGlzLnVzZXJJbmZvLnVzZXJFbWFpbCk7XG4gICAgICB0aGlzLm5mYy5zaGFyZShbbWVzc2FnZV0pLnRoZW4oc3VjY2VzcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xuICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGF0dGVtcHRVc2VyUmVnaXN0ZXIoKXtcbiAgICB0aGlzLnNob3dEdXBsaWNhdGVUZXh0ID0gZmFsc2U7XG4gICAgbGV0IGxvYWRpbmcgPSB0aGlzLmxvYWRpbmdDdHJsLmNyZWF0ZSh7XG4gICAgICAgIGNvbnRlbnQ6ICdFc3BlcmUgdW4gbW9tZW50by4uLidcbiAgICB9KTtcbiAgICBsb2FkaW5nLnByZXNlbnQoKTtcblxuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnVzZXJMb2dnZWRJbktleSkudGhlbih2YWx1ZSA9PiB7XG4gICAgICB0aGlzLnVzZXJJbmZvID0gdmFsdWU7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3VzZXJJZCcsIHRoaXMudXNlckluZm8udXNlcklkICk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ25hbWUnLCB0aGlzLnJlZ2lzdGVyLnZhbHVlLm5hbWUpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCdlbWFpbCcsIHRoaXMucmVnaXN0ZXIudmFsdWUuZW1haWwpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCd1c2VyX3R5cGVfaWQnLCAnMicpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCd1aWQnLCcxMjM0NTY3ODkwJyk7XG4gICAgICBpZih2YWx1ZSAhPSBudWxsKXtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0eXBlJywgJ3NhdmUnKTtcbiAgICAgICAgaWYodGhpcy5yZWdpc3Rlci52YWx1ZS5wd2QpXG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwYXNzd29yZCcsIHRoaXMucmVnaXN0ZXIudmFsdWUucHdkKTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndHlwZScsICduZXcnKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwYXNzd29yZCcsIHRoaXMucmVnaXN0ZXIudmFsdWUucHdkKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnBvc3REYXRhKGZvcm1EYXRhLCAndXNlcnMucGhwJykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBsb2FkaW5nLmRpc21pc3MoKTtcbiAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXN1bHQ7XG4gICAgICAgIGlmICh0aGlzLnJlc3BvbnNlRGF0YS5zdGF0dXMgPT0gXCJva1wiKSB7XG4gICAgICAgICAgbGV0IHVzZXJBcnJheSA9IHtcbiAgICAgICAgICAgIHVzZXJJZDogdGhpcy5yZXNwb25zZURhdGEuaWQsXG4gICAgICAgICAgICB1c2VyTmFtZTogdGhpcy5yZXNwb25zZURhdGEudXNlci5uYW1lLFxuICAgICAgICAgICAgdXNlckVtYWlsOiB0aGlzLnJlc3BvbnNlRGF0YS51c2VyLmVtYWlsLFxuICAgICAgICAgICAgdXNlclR5cGU6IHRoaXMucmVzcG9uc2VEYXRhLnVzZXIudXNlcl90eXBlX2lkXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoQ29uc3RhbnRzLnVzZXJMb2dnZWRJbktleSwgdXNlckFycmF5KTtcbiAgICAgICAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKCdzZXRCYWxhbmNlJywgJyQnICsgcGFyc2VGbG9hdCh0aGlzLnJlc3BvbnNlRGF0YS51c2VyLmFtb3VudCkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgdGhpcy5uYXZDdHJsLnNldFJvb3QoSG9tZVBhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5yZXNwb25zZURhdGEubXNnID09IFwiZHVwbGljYXRlXCIpe1xuICAgICAgICAgIHRoaXMuc2hvd0R1cGxpY2F0ZVRleHQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL3NpZ251cC9zaWdudXAudHMiXSwic291cmNlUm9vdCI6IiJ9
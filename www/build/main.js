webpackJsonp([0],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
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
    LOCAL_API_ENDPOINT: 'http://localhost:8099/',
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
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
    function ApiServiceProvider(http, platform) {
        this.http = http;
        this.platform = platform;
        console.log('Hello ApiServiceProvider Provider');
    }
    ApiServiceProvider.prototype.postData = function (data, url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var endpoint = __WEBPACK_IMPORTED_MODULE_2__services_constants__["a" /* Constants */].API_ENDPOINT;
            if (!_this.platform.is('cordova')) {
                endpoint = __WEBPACK_IMPORTED_MODULE_2__services_constants__["a" /* Constants */].LOCAL_API_ENDPOINT;
            }
            _this.http.post(endpoint + url, data)
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
            for (var p in data) {
                if (data.hasOwnProperty(p)) {
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
                }
            }
            var endpoint = __WEBPACK_IMPORTED_MODULE_2__services_constants__["a" /* Constants */].API_ENDPOINT;
            if (!_this.platform.is('cordova')) {
                endpoint = __WEBPACK_IMPORTED_MODULE_2__services_constants__["a" /* Constants */].LOCAL_API_ENDPOINT;
            }
            _this.http.get(endpoint + url + '?' + str.join("&"))
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */]) === "function" && _b || Object])
    ], ApiServiceProvider);
    return ApiServiceProvider;
    var _a, _b;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWdlcy9mb3Jnb3QvZm9yZ290LnRzIiwiLi4vLi4vc3JjL3BhZ2VzL2FjY291bnQvYWNjb3VudC50cyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2VzbTUgbGF6eSIsIi4uLy4uL3NyYyBsYXp5IiwiLi4vLi4vc3JjL3BhZ2VzL3NjYW5uZXIvc2Nhbm5lci50cyIsIi4uLy4uL3NyYy9wYWdlcy9wYXltZW50L3BheW1lbnQudHMiLCIuLi8uLi9zcmMvcGFnZXMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucy50cyIsIi4uLy4uL3NyYy9hcHAvbWFpbi50cyIsIi4uLy4uL3NyYy9hcHAvYXBwLm1vZHVsZS50cyIsIi4uLy4uL3NyYy9zZXJ2aWNlcy9jb25zdGFudHMudHMiLCIuLi8uLi9zcmMvcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlLnRzIiwiLi4vLi4vc3JjL3Byb3ZpZGVycy9oZWxwZXIudHMiLCIuLi8uLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCIuLi8uLi9zcmMvcGFnZXMvbGlzdC9saXN0LnRzIiwiLi4vLi4vc3JjL3BhZ2VzL2hvbWUvaG9tZS50cyIsIi4uLy4uL3NyYy9wYWdlcy9sb2dpbi9sb2dpbi50cyIsIi4uLy4uL3NyYy9wYWdlcy9zaWdudXAvc2lnbnVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQzBCO0FBQzVCO0FBQ29CO0FBQ1M7QUFFbEM7QUFDRztBQUU5Qzs7Ozs7R0FLRztBQU1IO0lBUUUsb0JBQW1CLE9BQXNCLEVBQVMsV0FBOEIsRUFBUyxTQUFvQixFQUFVLE9BQWdCLEVBQVUsSUFBWSxFQUNwSixVQUErQixFQUFVLFdBQXdCO1FBRDFFLGlCQWtCQztRQWxCa0IsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNwSixlQUFVLEdBQVYsVUFBVSxDQUFxQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbkMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLGtFQUFVLENBQUMsUUFBUSxDQUFDO1NBQ2pDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLGlDQUFpQztRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNwQyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDWixLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUNaLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsbUNBQWMsR0FBZDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsc0NBQWlCLEdBQWpCO1FBQUEsaUJBd0JDO1FBdkJDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQ3BDLE9BQU8sRUFBRSxzQkFBc0I7U0FDaEMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xCLElBQUksUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFDOUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDM0QsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1lBQzNCLEVBQUUsRUFBQyxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBQztnQkFDbkMsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7WUFDbEMsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNKLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7Z0JBQy9CLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUM7WUFDdkcsQ0FBQztRQUNMLENBQUMsRUFBRSxVQUFDLEdBQUc7WUFDTCxZQUFZO1lBQ1osT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7WUFDL0IsS0FBSSxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsOEJBQVMsR0FBVCxjQUFhLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLCtEQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0MsK0JBQVUsR0FBVixjQUFjLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGtFQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUEzRHRDLFVBQVU7UUFKdEIsd0VBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1dBQ0c7U0FDM0IsQ0FBQzsrS0FTNEIsRUFBaUk7WUFDdkksT0FBb0Q7T0FUL0QsVUFBVSxDQTZEdEI7SUFBRCxDQUFDO0FBQUE7U0E3RFksVUFBVSxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCMkI7QUFDa0M7QUFDaEI7QUFDM0I7QUFDTztBQUNLO0FBQ3dCO0FBQ3RCO0FBQ3ZELGlFQUFpRTtBQUVqRSw4Q0FBOEM7QUFFOUM7Ozs7O0dBS0c7QUFNSDtJQWNFLHFCQUFtQixPQUFzQixFQUFVLE9BQWdCLEVBQVUsV0FBd0IsRUFBVSxPQUFnQixFQUFTLFNBQW9CLEVBQ25KLFdBQThCLEVBQVMsVUFBK0IsRUFBUyxNQUFlLEVBQzdGLElBQVksRUFBVSxNQUFxQixDQUFDLCtEQUErRDtRQUZySCxpQkF1QkM7UUF2QmtCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNuSixnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFxQjtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVM7UUFDN0YsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWUsQ0FBQywrREFBK0Q7UUFiOUcsYUFBUSxHQUFhLEtBQUssQ0FBQztRQUszQixlQUFVLEdBQWEsS0FBSyxDQUFDO1FBU2xDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3RDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBRSxrRUFBVSxDQUFDLFFBQVEsQ0FBQztTQUNuQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDcEMsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ1osS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILGlDQUFpQztRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNqQyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDWixLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9DQUFjLEdBQWQ7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNFQUFTLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBSztZQUNyRCxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxQixFQUFFLEVBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLEVBQUM7Z0JBQ2hDLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixLQUFJLENBQUMsV0FBVyxHQUFHLGVBQWUsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxtQkFBbUIsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDbkgsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHdDQUFrQixHQUFsQjtRQUFBLGlCQTBCQztRQXpCQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFO1FBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBTTtZQUMzRCxLQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztZQUMzQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ2xELElBQUksV0FBVyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFFL0MsSUFBSSxNQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNkLEVBQUUsRUFBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBQztvQkFDakMsTUFBSSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUM7Z0JBQzdCLENBQUM7Z0JBQ0QsSUFBSSxFQUFDO29CQUNILE1BQUksR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSztnQkFDakQsQ0FBQztnQkFDRCxJQUFJLFVBQVUsR0FBRyxXQUFXLENBQUMsbUJBQW1CLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUNqSyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFDZCxFQUFFLEVBQUUsV0FBVyxDQUFDLEVBQUU7b0JBQ2xCLElBQUksRUFBRSxXQUFXLENBQUMsbUJBQW1CLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUc7b0JBQ3RELEtBQUssRUFBRSxXQUFXLENBQUMsbUJBQW1CLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQUk7b0JBQzlELEtBQUssRUFBRSxVQUFVO29CQUNqQixJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFO2lCQUN6RyxDQUFDLENBQUM7WUFDTCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNENBQXNCLEdBQXRCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUVELDRDQUFzQixHQUF0QjtRQUFBLGlCQW1DQztRQWxDQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUNwQyxPQUFPLEVBQUUsc0JBQXNCO1NBQ2hDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBRW5DLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNFQUFTLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQUs7WUFDcEQsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUM5QixRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0UsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUUzQyxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQU07Z0JBQ2hFLEtBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO2dCQUMzQixLQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO2dCQUVsQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2xCLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ3JDLElBQUksVUFBVSxHQUFHLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3hFLEtBQUksQ0FBQyxhQUFhLEdBQUcseUNBQXlDO3dCQUN6QyxvQkFBb0IsR0FBRyxVQUFVLENBQUM7b0JBQ3ZELEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztvQkFDOUMsS0FBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7b0JBQzFCLEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUM1QixDQUFDO2dCQUNELElBQUksRUFBQztvQkFDRCxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDO2dCQUMvQyxDQUFDO1lBQ0wsQ0FBQyxFQUFFLFVBQUMsR0FBRztnQkFDSCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2xCLEtBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7Z0JBQ2xDLEtBQUksQ0FBQyxhQUFhLEdBQUcsd0JBQXdCLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUMvRCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXJIVSxXQUFXO1FBSnZCLHdFQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztXQUNHO1NBQzVCLENBQUM7b0xBZTRCLCtEQUFnQyxDQUFnRztZQUN0SSx1SUFBdUMsZ0JBQWtCLEVBQWtCLE1BQU07WUFDdkYsTUFBTSxFQUErRjtPQWhCMUcsV0FBVyxDQXNIdkI7SUFBRCxDQUFDO0FBQUE7U0F0SFksV0FBVyxlOzs7Ozs7O0FDdkJ4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLGtDOzs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLDRDQUE0QyxXQUFXO0FBQ3ZEO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVjBDO0FBQ2lDO0FBQ0w7QUFDZjtBQUNYO0FBRUs7QUFFakQ7Ozs7O0dBS0c7QUFNSDtJQUVFLHFCQUFtQixPQUFzQixFQUFTLFNBQW9CLEVBQVUsU0FBb0IsRUFDM0YsTUFBc0IsRUFBUyxRQUFrQixFQUFTLE1BQWUsRUFBVSxLQUFZO1FBRHJGLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUMzRixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVU7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTztJQUV4RyxDQUFDO0lBRUQsb0NBQWMsR0FBZDtRQUFBLGlCQWlEQztRQWhEQywwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7YUFDbkIsSUFBSSxDQUFDLFVBQUMsTUFBdUI7WUFDekIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLGdDQUFnQztnQkFHaEMsaUJBQWlCO2dCQUNoQixNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNyRSxJQUFJLFNBQU8sR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQVk7b0JBQ3ZELDhEQUE4RDtvQkFFOUQsSUFBSSxDQUFDO3dCQUNILElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2hDLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7d0JBQ3ZDLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7d0JBRXZDLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxzQkFBc0I7d0JBQzdDLFNBQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQjt3QkFDdkMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMscUVBQVcsQ0FBQyxDQUFDO29CQUNqQyxDQUFDO29CQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNWLEVBQUUsRUFBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDOzRCQUM5QixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyw0Q0FBNEMsR0FBQyxDQUFDLEdBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQzNGLGVBQUs7Z0NBQ0gsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQzs0QkFDckIsQ0FBQyxDQUNGLENBQUM7d0JBQ04sQ0FBQzt3QkFDRCxJQUFJLEVBQUM7NEJBQ0gsS0FBSyxDQUFDLDRDQUE0QyxHQUFDLENBQUMsR0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDNUQsQ0FBQztvQkFDSCxDQUFDO2dCQUNOLENBQUMsQ0FBQyxDQUFDO1lBRUwsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDekIsMkNBQTJDO2dCQUMzQyxzRkFBc0Y7Z0JBQ3RGLGdEQUFnRDtZQUNsRCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sZ0dBQWdHO1lBQ2xHLENBQUM7WUFDRCxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9CLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLENBQU07WUFDWixFQUFFLEVBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQztnQkFDOUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsNENBQTRDLEdBQUMsQ0FBQyxHQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDekYsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXhEVSxXQUFXO1FBSnZCLHdFQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztXQUNHO1NBQzVCLENBQUM7b05BRzRCLHNFQUF3RTtZQUNsRixRQUFzRjtPQUg3RixXQUFXLENBeUR2QjtJQUFELENBQUM7QUFBQTtTQXpEWSxXQUFXLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQjBCO0FBQ2xELGlFQUFpRTtBQUNyQjtBQUNrRDtBQUMxQjtBQUMzQjtBQUNPO0FBQ0s7QUFDd0I7QUFDdEI7QUFDZjtBQUV4Qzs7Ozs7R0FLRztBQU1IO0lBY0UscUJBQW1CLE9BQXNCLEVBQVUsT0FBZ0IsRUFBUyxTQUFvQixFQUFVLE9BQWdCLEVBQVUsV0FBd0IsRUFDbEosS0FBWSxFQUFTLFdBQThCLEVBQVMsVUFBK0IsRUFBUyxNQUFlLEVBQ25ILElBQVksRUFBUyxRQUFrQixFQUFTLE1BQXNCLDRDQUEyQztRQUYzSCxpQkFrQ0M7UUFsQ2tCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNsSixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBcUI7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQ25ILFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBZ0IsNENBQTJDO1FBUnBILFlBQU8sR0FBVSxFQUFFLENBQUM7UUFFcEIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsU0FBSSxHQUFhLEtBQUssQ0FBQztRQU01QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQzlCLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxrRUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsa0VBQVUsQ0FBQyxRQUFRLENBQUM7U0FDbEMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUNaLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDakMsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ1osS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxTQUFTLEdBQUcsNENBQTRDLEdBQUcsTUFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDdkY7Ozs7Ozs7Ozs7OzthQVlLO0lBQ1AsQ0FBQztJQUVELG9DQUFjLEdBQWQ7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELDRCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyw0REFBUSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsaUNBQVcsR0FBWDtRQUFBLGlCQTZEQztRQTVEQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQ3BDLE9BQU8sRUFBRSxzQkFBc0I7U0FDaEMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWxCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNFQUFTLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQUs7WUFDcEQsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUM5QixRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMxQixRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xELFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFM0MsdUdBQXVHO1lBQ3ZHLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQU07Z0JBQ3pELE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNqQixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNuQyxJQUFJLEtBQUssR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO29CQUN0RCxFQUFFLEVBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQzt3QkFDOUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSzs0QkFDOUIsS0FBSyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUzs0QkFDN0IsMkJBQTJCOzRCQUMzQiwyQkFBMkI7NEJBQ3ZCLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQ3pFLGVBQUs7NEJBQ0gsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDMUYsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsNERBQVEsQ0FBQyxDQUFDOzRCQUMvQixLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO3dCQUMzQixDQUFDLENBQ0YsQ0FBQztvQkFDSixDQUFDO29CQUNELElBQUksRUFBQzt3QkFDSCxLQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO3dCQUNoQyxLQUFJLENBQUMsV0FBVyxHQUFHLHNCQUFzQixHQUFHLEtBQUs7NEJBQ2pDLEtBQUssR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVM7NEJBQzdCLDJCQUEyQjs0QkFDM0IsMkJBQTJCOzRCQUN2QixLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQztvQkFDaEQsQ0FBQztvQkFDRCxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsR0FBRyxHQUFHLFVBQVUsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5RixDQUFDO2dCQUNELElBQUksQ0FBQyxDQUFDO29CQUNKLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7b0JBQ2hDLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7Z0JBQzNDLENBQUM7WUFDTCxDQUFDLEVBQUUsVUFBQyxHQUFHO2dCQUNMLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7Z0JBQ2hDLEtBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFFLFVBQUMsR0FBRztZQUNILE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNsQixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixLQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUF4SFUsV0FBVztRQUp2Qix3RUFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7V0FDRztTQUM1QixDQUFDO3dQQWU0RCwrREFBTyxDQUF5RjtZQUMzSSw2REFBSyxDQUFzQiwwSUFBdUMsYUFBa0IsRUFBa0IsTUFBTTtZQUM3RyxNQUFNLEVBQXFHO09BaEJoSCxXQUFXLENBeUh2QjtJQUFELENBQUM7QUFBQTtTQXpIWSxXQUFXLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QjBCO0FBQ087QUFDb0I7QUFDN0I7QUFDUDtBQUNZO0FBQ0U7QUFFdkQ7Ozs7O0dBS0c7QUFNSDtJQU9FLDBCQUFtQixPQUFzQixFQUFVLE9BQWdCLEVBQVMsVUFBK0IsRUFDcEcsU0FBb0IsRUFBVSxJQUFZLEVBQVUsT0FBZ0IsRUFBVSxNQUFxQjtRQUQxRyxpQkFrQkM7UUFsQmtCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBcUI7UUFDcEcsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFVLFNBQUksR0FBSixJQUFJLENBQVE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUV4RyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBRW5DLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLGlDQUFpQztRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNwQyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDWixLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUNaLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQseUNBQWMsR0FBZDtRQUFBLGlCQTRCQztRQTNCQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzRUFBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQUs7WUFDckQsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtZQUN0RCxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQU07Z0JBQzNELEtBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO2dCQUMzQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQ2xELElBQUksV0FBVyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZDLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFFL0MsSUFBSSxNQUFJLEdBQUcsRUFBRSxDQUFDO29CQUNkLEVBQUUsRUFBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBQzt3QkFDbkMsTUFBSSxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUM7b0JBQzlCLENBQUM7b0JBQ0QsSUFBSSxFQUFDO3dCQUNILE1BQUksR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSztvQkFDbkQsQ0FBQztvQkFDRCxJQUFJLFVBQVUsR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hFLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO3dCQUNkLEVBQUUsRUFBRSxXQUFXLENBQUMsRUFBRTt3QkFDbEIsSUFBSSxFQUFFLE1BQUk7d0JBQ1YsS0FBSyxFQUFFLFVBQVU7d0JBQ2pCLElBQUksRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUU7cUJBQ3pHLENBQUMsQ0FBQztnQkFDTCxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUF2RFUsZ0JBQWdCO1FBSjVCLHdFQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1dBQ0c7U0FDakMsQ0FBQzs2UkFRNEIsQ0FBYSxDQUFrRTtZQUN6RixTQUFTLEVBQWdCLEVBQStEO09BUi9GLGdCQUFnQixDQXlENUI7SUFBRCxDQUFDO0FBQUE7U0F6RFksZ0JBQWdCLGU7Ozs7Ozs7O0FDbkI3QjtBQUFBO0FBQUE7QUFBMkU7QUFFbEM7QUFFekMseUdBQXNCLEVBQUUsQ0FBQyxlQUFlLENBQUMsOERBQVMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSk07QUFDSDtBQUNIO0FBQ3FCO0FBQ3pFLG9EQUFvRDtBQUNDO0FBRVQ7QUFFSjtBQUNNO0FBQ0E7QUFDRztBQUNHO0FBQ0E7QUFDRztBQUNBO0FBQ0E7QUFDZTtBQUVqQjtBQUNNO0FBQ1A7QUFDSjtBQUMwQjtBQUNsQjtBQUNWO0FBQ0E7QUFDOUMsaUVBQWlFO0FBdURqRTtJQUFBO0lBQXdCLENBQUM7SUFBWixTQUFTO1FBckRyQix1RUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLDZEQUFLO2dCQUNMLGtFQUFRO2dCQUNSLGtFQUFRO2dCQUNSLHFFQUFTO2dCQUNULHlFQUFVO2dCQUNWLHlFQUFVO2dCQUNWLDRFQUFXO2dCQUNYLDRFQUFXO2dCQUNYLDRFQUFXO2dCQUNYLDJGQUFnQjthQUNqQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxnRkFBYTtnQkFDYixrRUFBVyxDQUFDLE9BQU8sQ0FBQyw2REFBSyxFQUFFLEVBQUUsRUFDakM7b0JBQ0UsS0FBSyxFQUFFLEVBRU47aUJBQ0YsQ0FBQztnQkFDRSwwRUFBa0IsQ0FBQyxPQUFPLEVBQUU7Z0JBQzVCLCtFQUFnQjtnQkFDaEIscUVBQWU7YUFDaEI7WUFDRCxTQUFTLEVBQUUsQ0FBQywrREFBUSxDQUFDO1lBQ3JCLGVBQWUsRUFBRTtnQkFDZiw2REFBSztnQkFDTCxrRUFBUTtnQkFDUixrRUFBUTtnQkFDUixxRUFBUztnQkFDVCx5RUFBVTtnQkFDVix5RUFBVTtnQkFDViw0RUFBVztnQkFDWCw0RUFBVztnQkFDWCw0RUFBVztnQkFDWCwyRkFBZ0I7YUFDakI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsNEVBQVM7Z0JBQ1Qsa0ZBQVk7Z0JBQ1oseUVBQWE7Z0JBQ2IsdUVBQU87Z0JBQ1AsV0FBVztnQkFDWCxFQUFDLE9BQU8sRUFBRSxtRUFBWSxFQUFFLFFBQVEsRUFBRSx3RUFBaUIsRUFBQztnQkFDcEQsK0ZBQWtCO2dCQUNsQiwyRUFBUztnQkFDVCxrRUFBSztnQkFDTCwrREFBRztnQkFDSCxnRUFBSTtnQkFDSixnQkFBZ0I7YUFDakI7U0FDRixDQUFDO09BQ1csU0FBUyxDQUFHO0lBQUQsZ0JBQUM7Q0FBQTtBQUFIOzs7Ozs7Ozs7QUNuRnRCO0FBQU8sSUFBSSxTQUFTLEdBQUc7SUFDbkIsWUFBWSxFQUFHLG1EQUFtRDtJQUNsRSxrQkFBa0IsRUFBRSx3QkFBd0I7SUFDNUMsZUFBZSxFQUFHLGNBQWM7Q0FDbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSmlEO0FBQ1A7QUFDVTtBQUNaO0FBRXpDOzs7OztFQUtFO0FBRUY7SUFFRSw0QkFBbUIsSUFBZ0IsRUFBUyxRQUFrQjtRQUEzQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELHFDQUFRLEdBQVIsVUFBUyxJQUFJLEVBQUUsR0FBRztRQUFsQixpQkFjQztRQWJDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLElBQUksUUFBUSxHQUFHLHNFQUFTLENBQUMsWUFBWSxDQUFDO1lBQ3RDLEVBQUUsRUFBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUM7Z0JBQy9CLFFBQVEsR0FBRyxzRUFBUyxDQUFDLGtCQUFrQixDQUFDO1lBQzFDLENBQUM7WUFFRCxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQztpQkFDakMsU0FBUyxDQUFDLGFBQUc7Z0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxFQUFFLFVBQUMsR0FBRztnQkFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9DQUFPLEdBQVAsVUFBUSxJQUFJLEVBQUUsR0FBRztRQUFqQixpQkFxQkM7UUFwQkMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ2IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUM7Z0JBQ2xCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzQixHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0RSxDQUFDO1lBQ0gsQ0FBQztZQUVELElBQUksUUFBUSxHQUFHLHNFQUFTLENBQUMsWUFBWSxDQUFDO1lBQ3RDLEVBQUUsRUFBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUM7Z0JBQy9CLFFBQVEsR0FBRyxzRUFBUyxDQUFDLGtCQUFrQixDQUFDO1lBQzFDLENBQUM7WUFFRCxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUM1QyxTQUFTLENBQUMsYUFBRztnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZixDQUFDLEVBQUUsVUFBQyxHQUFHO2dCQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNkLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBM0NVLGtCQUFrQjtRQUQ5Qix5RUFBVSxFQUFFOzZEQUdjLHdFQUFVLG9CQUFWLHdFQUFVLHNEQUFtQiwrREFBUSxvQkFBUiwrREFBUTtPQUZuRCxrQkFBa0IsQ0E0QzlCO0lBQUQseUJBQUM7O0NBQUE7QUE1QzhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWlk7QUFDTztBQUNUO0FBSXpDO0lBS0ksdUJBQW9CLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDMUIsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxhQUFhO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsZUFBZSxFQUFFLGFBQWE7UUFDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7SUFDakMsQ0FBQztJQUVELDhCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzRUFBUyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBckJRLGFBQWE7UUFGekIseUVBQVUsRUFBRTt5Q0FPb0IsK0RBQU87T0FMM0IsYUFBYSxDQXNCekI7SUFBRCxvQkFBQztDQUFBO0FBdEJ5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMkI7QUFDb0I7QUFDcEI7QUFDTTtBQUNsQjtBQUNTO0FBQ3dCO0FBQ3RCO0FBRU47QUFDUztBQUNOO0FBQ0c7QUFDa0I7QUFNdEU7SUFTRSxlQUFtQixRQUFrQixFQUFTLFNBQW9CLEVBQVMsWUFBMEIsRUFBVSxPQUFnQixFQUN0SCxVQUErQixFQUFTLFdBQThCLEVBQVMsTUFBZSxFQUFTLE1BQXNCO1FBRHRJLGlCQWtDQztRQWxDa0IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDdEgsZUFBVSxHQUFWLFVBQVUsQ0FBcUI7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFQdEksYUFBUSxHQUFRLGtFQUFRLENBQUM7UUFRdkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXJCLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLGtCQUFRO1lBQ3ZDLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNFQUFTLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBSztnQkFDckQsRUFBRSxFQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsRUFBQztvQkFDaEIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsc0VBQVMsQ0FBQyxDQUFDO2dCQUM5QixDQUFDO2dCQUNELElBQUksRUFBQztvQkFDSCxJQUFJLFNBQU8sR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQzt3QkFDcEMsT0FBTyxFQUFFLHNCQUFzQjtxQkFDaEMsQ0FBQyxDQUFDO29CQUNILFNBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDbEIsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7b0JBQ3RCLElBQUksSUFBSSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7b0JBQ3pELEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQU07d0JBQ3BELFNBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3QkFDbEIsS0FBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7d0JBQzNCLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDL0UsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hHLENBQUMsRUFBRSxhQUFHO3dCQUNKLFNBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDcEIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztZQUNILENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsYUFBRztnQkFDTixLQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxzRUFBUyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUM7WUFBQSxDQUFDO1FBQ1IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNEJBQVksR0FBWixVQUFhLElBQUk7UUFDZixFQUFFLEVBQUMsSUFBSSxJQUFFLE1BQU0sQ0FBQyxFQUFDO1lBQ2YsOENBQThDO1lBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUc7Z0JBQ1gsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxrRUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTtnQkFDOUQsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSwyRUFBVyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTtnQkFDdEUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSx5RUFBVSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTtnQkFDbEUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO2FBQ3RFLENBQUM7UUFDSixDQUFDO1FBQ0QsSUFBSSxFQUFDO1lBQ0gsOENBQThDO1lBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUc7Z0JBQ1gsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxrRUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTtnQkFDOUQsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSwyRUFBVyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTtnQkFDdEUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSwyRkFBZ0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7Z0JBQzVFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUseUVBQVUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7Z0JBQ2xFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTthQUN0RSxDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7SUFFRCw2QkFBYSxHQUFiO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQztZQUN6QixnRUFBZ0U7WUFDaEUsaUVBQWlFO1lBQ2pFLEtBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDOUIsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx3QkFBUSxHQUFSLFVBQVMsSUFBSTtRQUNYLCtDQUErQztRQUMvQyw0REFBNEQ7UUFDNUQsRUFBRSxFQUFDLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUM7WUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25DLElBQUk7WUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQXBGZTtRQUFmLHlFQUFTLENBQUMsMERBQUcsQ0FBQztrQ0FBTSwwREFBRztzQ0FBQztJQURkLEtBQUs7UUFKakIsd0VBQVMsQ0FBQztXQUNjO1NBQ3hCLENBQUM7b0xBV3FDLEVBQW9CLHVJQUFnQyxFQUFzQztZQUN6RyxFQUFnSDtPQVYzSCxLQUFLLENBc0ZqQjtJQUFELENBQUM7QUFBQTtTQXRGWSxLQUFLLDJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25Cd0I7QUFDZTtBQU16RDtJQUtFLGtCQUFtQixPQUFzQixFQUFTLFNBQW9CO1FBQW5ELFlBQU8sR0FBUCxPQUFPLENBQWU7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BFLDhFQUE4RTtRQUM5RSxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFMUMsZ0VBQWdFO1FBQ2hFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLGFBQWE7WUFDOUUsbUJBQW1CLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUVuRCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNkLEtBQUssRUFBRSxPQUFPLEdBQUcsQ0FBQztnQkFDbEIsSUFBSSxFQUFFLGdCQUFnQixHQUFHLENBQUM7Z0JBQzFCLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDaEUsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7aUJBckJVLFFBQVE7SUF1Qm5CLDZCQUFVLEdBQVYsVUFBVyxLQUFLLEVBQUUsSUFBSTtRQUNwQiw0Q0FBNEM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBUSxFQUFFO1lBQzFCLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQTVCVSxRQUFRO1FBSnBCLHdFQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztXQUNHO1NBQ3pCLENBQUM7aUJBTXNFO09BTDNELFFBQVEsQ0E2QnBCO0lBQUQsZUFBQzs7QUFBQTtTQTdCWSxRQUFRLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQNkI7QUFDSTtBQUNOO0FBQ087QUFFWjtBQUNNO0FBQ0E7QUFDakQsbURBQW1EO0FBTW5EO0lBS0Usa0JBQW1CLE9BQXNCLEVBQVUsT0FBZ0IsRUFBUyxNQUFlLEVBQVUsSUFBWSxFQUN4RyxNQUFzQjtRQUQvQixpQkEwQkM7UUExQmtCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUFVLFNBQUksR0FBSixJQUFJLENBQVE7UUFDeEcsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFIeEIsc0JBQWlCLEdBQWEsS0FBSyxDQUFDO1FBSXZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDbkMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsdUJBQWE7WUFDMUMsS0FBSSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7WUFDN0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUM7WUFDM0IsZ0NBQWdDO1lBQ2hDLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLGlDQUFpQztRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNwQyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDWixLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUNaLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0RBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxnQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMscUVBQVcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCw4QkFBVyxHQUFYO1FBQ0U7O3lDQUVpQztRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxxRUFBVyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQS9DVSxRQUFRO1FBSnBCLHdFQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztXQUNHO1NBQ3pCLENBQUM7c0ZBTWlIO1lBQy9GLEtBQWE7T0FOcEIsUUFBUSxDQWdEcEI7SUFBRCxDQUFDO0FBQUE7U0FoRFksUUFBUSxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZDZCO0FBQ2tDO0FBQ3BDO0FBQ2hELG9EQUFvRDtBQUNnQjtBQUMzQjtBQUNvQztBQUN4QjtBQUViO0FBQ007QUFDQTtBQUU5Qzs7Ozs7R0FLRztBQU1IO0lBUUUsbUJBQW1CLE9BQXNCLEVBQVUsT0FBZ0IsRUFBUyxTQUFvQixFQUFVLE9BQWdCLEVBQVUsSUFBWTtRQUM5SSx5QkFBeUIsQ0FBUyxXQUF3QixFQUFTLE1BQWUsRUFBUyxVQUErQixFQUFTLFdBQThCO1FBRG5LLGlCQW9CQztRQXBCa0IsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUFVLFNBQUksR0FBSixJQUFJLENBQVE7UUFDNUcsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBcUI7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFONUosc0JBQWlCLEdBQWEsS0FBSyxDQUFDO1FBQ3BDLGFBQVEsR0FBUyxFQUFFLENBQUM7UUFNekIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNsQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0VBQVUsQ0FBQyxRQUFRLENBQUM7WUFDaEMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLGtFQUFVLENBQUMsUUFBUSxDQUFDO1NBQy9CLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBRTNCLGlDQUFpQztRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNwQyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDWixLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUNaLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0NBQWMsR0FBZDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsOEJBQVUsR0FBVixjQUFjLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGtFQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakQsc0NBQWtCLEdBQWxCLGNBQXNCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGtFQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFekQsMkJBQU8sR0FBUDtRQUNFOzs7Ozs7O21FQU8yRDtJQUM3RCxDQUFDO0lBRUQsb0NBQWdCLEdBQWhCO1FBQUEsaUJBZ0NDO1FBL0JDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQ3BDLE9BQU8sRUFBRSxzQkFBc0I7U0FDaEMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xCLElBQUksUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFDOUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBTTtZQUN4RCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEIsS0FBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7WUFDM0IsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDckMsSUFBSSxTQUFTLEdBQUc7b0JBQ2QsTUFBTSxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ2pDLFNBQVMsRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLO29CQUN2QyxRQUFRLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVk7aUJBQzlDLENBQUM7Z0JBRUYsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0VBQVMsQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZELEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7Z0JBQy9CLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxHQUFHLEdBQUcsVUFBVSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5RixLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDakcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsNERBQVEsQ0FBQyxDQUFDO1lBQ2pDLENBQUM7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDSixLQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO2dCQUM5QixLQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksYUFBYSxDQUFDLENBQUM7b0JBQ3RDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDO29CQUNqQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1lBQ3pHLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFoRlUsU0FBUztRQUpyQix3RUFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7V0FDRztTQUMxQixDQUFDOzhPQVM0QiwwRUFBMkQsRUFBeUQ7WUFDL0YsTUFBa0g7T0FUeEosU0FBUyxDQWlGckI7SUFBRCxDQUFDO0FBQUE7U0FqRlksU0FBUyxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEI0QjtBQUM0QztBQUM5QztBQUNvQjtBQUNTO0FBQ3BDO0FBQ1k7QUFDRTtBQUNUO0FBQ0Y7QUFFSjtBQUNHO0FBQ0c7QUFFOUM7Ozs7O0dBS0c7QUFNSDtJQVdFLG9CQUFtQixPQUFzQixFQUFVLE9BQWdCLEVBQVMsU0FBb0IsRUFBVSxPQUFnQixFQUFVLElBQVksRUFDdkksVUFBK0IsRUFBVSxHQUFRLEVBQVUsSUFBVSxFQUFTLFdBQThCLEVBQVUsV0FBd0IsRUFDOUksTUFBcUIsRUFBUyxNQUFjLEVBQVMsUUFBa0IsRUFBVSxLQUFZO1FBRnRHLGlCQWtEQztRQWxEa0IsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUFVLFNBQUksR0FBSixJQUFJLENBQVE7UUFDdkksZUFBVSxHQUFWLFVBQVUsQ0FBcUI7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQzlJLFdBQU0sR0FBTixNQUFNLENBQWU7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU87UUFUL0Ysc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBR25DLG1CQUFjLEdBQWEsS0FBSyxDQUFDO1FBT3RDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLGlDQUFpQztRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNwQyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDWixLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUNaLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ25DLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxrRUFBVSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDVixHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0VBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxrRUFBVSxDQUFDLFFBQVEsRUFBRSxrRUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0UsS0FBSyxFQUFHLENBQUMsRUFBRSxDQUFDO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNFQUFTLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQUs7WUFDcEQsRUFBRSxFQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsRUFBQztnQkFDaEIsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixFQUFFLEVBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7b0JBQ3JCLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7Z0JBQ2hDLElBQUksU0FBTyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO29CQUNsQyxPQUFPLEVBQUUsc0JBQXNCO2lCQUNsQyxDQUFDLENBQUM7Z0JBQ0gsU0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNsQixLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO29CQUNyQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0VBQVUsQ0FBQyxRQUFRLENBQUM7b0JBQ2hDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDVixHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0VBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xDLEtBQUssRUFBRyxDQUFDLEVBQUUsQ0FBQztpQkFDZixDQUFDLENBQUM7Z0JBRUgsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQU07b0JBQzlGLFNBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDbEIsS0FBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7b0JBQzNCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUM3QyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDakQsQ0FBQyxDQUFDO1lBQ0osQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG1DQUFjLEdBQWQ7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELDJCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGdFQUFTLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsMkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLDZEQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsOEJBQVMsR0FBVCxjQUFhLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGdFQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0MsdUNBQWtCLEdBQWxCLGNBQXNCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLG1FQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFekQsNEJBQU8sR0FBUDtRQUFBLGlCQWdDQztRQS9CQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQztZQUN2QixFQUFFLEVBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQztnQkFDOUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMscUNBQXFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzNFLENBQUM7WUFDRCxJQUFJLEVBQUM7Z0JBQ0gsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7WUFDL0MsQ0FBQztRQUNILENBQUMsRUFBRSxVQUFDLEdBQUc7WUFDTCxFQUFFLEVBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQztnQkFDOUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsK0JBQStCLEdBQUcsR0FBRyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMzRSxDQUFDO1lBQ0QsSUFBSSxFQUFDO2dCQUNILEtBQUssQ0FBQywrQkFBK0IsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUMvQyxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBSztZQUNqQixFQUFFLEVBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQztnQkFDOUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsMkNBQTJDLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQzNGLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDaEcsQ0FBQztZQUNELElBQUksRUFBQztnQkFDSCxLQUFLLENBQUMsMkNBQTJDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMvRCxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEUsQ0FBQztZQUVELElBQUksT0FBTyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUQsS0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBTztnQkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0Qsd0NBQW1CLEdBQW5CO1FBQUEsaUJBZ0RDO1FBL0NDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDL0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDbEMsT0FBTyxFQUFFLHNCQUFzQjtTQUNsQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFbEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzRUFBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFLO1lBQ3BELEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFFLENBQUM7WUFDakQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDckMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsWUFBWSxDQUFDLENBQUM7WUFDcEMsRUFBRSxFQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsRUFBQztnQkFDaEIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ2hDLEVBQUUsRUFBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7b0JBQ3pCLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pELENBQUM7WUFDRCxJQUFJLEVBQUM7Z0JBQ0gsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQy9CLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZELENBQUM7WUFFRCxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFNO2dCQUN6RCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2xCLEtBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO2dCQUMzQixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxJQUFJLFNBQVMsR0FBRzt3QkFDZCxNQUFNLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxFQUFFO3dCQUM1QixRQUFRLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSTt3QkFDckMsU0FBUyxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUs7d0JBQ3ZDLFFBQVEsRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZO3FCQUM5QyxDQUFDO29CQUVGLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNFQUFTLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUN2RCxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsR0FBRyxHQUFHLFVBQVUsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDOUYsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsNkRBQVEsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2dCQUNELElBQUksQ0FBQyxFQUFFLEVBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUM7b0JBQzVDLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7Z0JBQ2hDLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxhQUFHO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFoS1UsVUFBVTtRQUp0Qix3RUFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7V0FDRztTQUMzQixDQUFDOzJPQVk0QiwwRUFBZ0MscUVBQTJCLENBQXlEO1lBQzFILHVJQUFpQyxFQUFHLCtEQUEwQyxzRUFBbUQ7WUFDdEksT0FBcUY7T0FiM0YsVUFBVSxDQWlLdEI7SUFBRCxDQUFDO0FBQUE7U0FqS1ksVUFBVSxlIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zLCBMb2FkaW5nQ29udHJvbGxlciB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yayc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQXBpU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcblxuaW1wb3J0IHsgTG9naW5QYWdlIH0gZnJvbSAnLi4vbG9naW4vbG9naW4nO1xuaW1wb3J0IHsgU2lnbnVwUGFnZSB9IGZyb20gJy4uL3NpZ251cC9zaWdudXAnO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIEZvcmdvdFBhZ2UgcGFnZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtZm9yZ290JyxcbiAgdGVtcGxhdGVVcmw6ICdmb3Jnb3QuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEZvcmdvdFBhZ2Uge1xuICBwcml2YXRlIGZvcmdvdCA6IEZvcm1Hcm91cDtcbiAgcHVibGljIGlzRGV2aWNlT25saW5lIDogYm9vbGVhbjtcbiAgcHVibGljIHNob3dGb3Jnb3RGYWlsVGV4dCA6IGJvb2xlYW47XG4gIHB1YmxpYyBmb3Jnb3RGYWlsVGV4dCA6IHN0cmluZztcbiAgcHVibGljIHJlc3BvbnNlRGF0YSA6IGFueTtcbiAgcHVibGljIHNob3dTZW50IDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHVibGljIGxvYWRpbmdDdHJsOiBMb2FkaW5nQ29udHJvbGxlciwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwcml2YXRlIG5ldHdvcms6IE5ldHdvcmssIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHB1YmxpYyBhcGlTZXJ2aWNlIDogQXBpU2VydmljZVByb3ZpZGVyLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xuICAgIHRoaXMuZm9yZ290ID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgZGlzY29ubmVjdFxuICAgIHRoaXMubmV0d29yay5vbkRpc2Nvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgY29ubmVjdGlvblxuICAgIHRoaXMubmV0d29yay5vbkNvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBpb25WaWV3RGlkTG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZygnaW9uVmlld0RpZExvYWQgRm9yZ290UGFnZScpO1xuICB9XG5cbiAgYXR0ZW1wdFVzZXJGb3Jnb3QoKSB7XG4gICAgbGV0IGxvYWRpbmcgPSB0aGlzLmxvYWRpbmdDdHJsLmNyZWF0ZSh7XG4gICAgICBjb250ZW50OiAnRXNwZXJlIHVuIG1vbWVudG8uLi4nXG4gICAgfSk7XG4gICAgbG9hZGluZy5wcmVzZW50KCk7XG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdlJywgdGhpcy5mb3Jnb3QudmFsdWUuZW1haWwpO1xuICAgIHRoaXMuYXBpU2VydmljZS5wb3N0RGF0YShmb3JtRGF0YSwnc2VuZF9tYWlsLnBocCcpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBsb2FkaW5nLmRpc21pc3MoKTtcbiAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXN1bHQ7XG4gICAgICAgIGlmKHRoaXMucmVzcG9uc2VEYXRhLnN0YXR1cyA9PSAnb2snKXtcbiAgICAgICAgICB0aGlzLnNob3dTZW50ID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnNob3dGb3Jnb3RGYWlsVGV4dCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2hvd0ZvcmdvdEZhaWxUZXh0ID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmZvcmdvdEZhaWxUZXh0ID0gdGhpcy5yZXNwb25zZURhdGEubXNnID09ICdubyB1c2VyJyA/ICdVc3VhcmlvIG5vIGV4aXN0ZScgOiAnRXJyb3IgZGVzY29ub2NpZG8nO1xuICAgICAgICB9XG4gICAgfSwgKGVycikgPT4ge1xuICAgICAgLy8gRXJyb3IgbG9nXG4gICAgICBsb2FkaW5nLmRpc21pc3MoKTtcbiAgICAgIHRoaXMuc2hvd0ZvcmdvdEZhaWxUZXh0ID0gdHJ1ZTtcbiAgICAgIHRoaXMuZm9yZ290RmFpbFRleHQgPSBlcnI7XG4gICAgfSk7XG4gIH1cblxuICBsb2dpblBhZ2UoKXsgdGhpcy5uYXZDdHJsLnNldFJvb3QoTG9naW5QYWdlKTsgfVxuICBzaWdudXBQYWdlKCl7IHRoaXMubmF2Q3RybC5zZXRSb290KFNpZ251cFBhZ2UpOyB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9mb3Jnb3QvZm9yZ290LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcywgTG9hZGluZ0NvbnRyb2xsZXIsIEV2ZW50cyB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZXR3b3JrJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9oZWxwZXInO1xuLy9pbXBvcnQgeyBCYXJjb2RlU2Nhbm5lciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmFyY29kZS1zY2FubmVyJztcblxuLy9pbXBvcnQgeyBUb2FzdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdG9hc3QnO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIEFjY291bnRQYWdlIHBhZ2UuXG4gKlxuICogU2VlIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvY29tcG9uZW50cy8jbmF2aWdhdGlvbiBmb3IgbW9yZSBpbmZvIG9uXG4gKiBJb25pYyBwYWdlcyBhbmQgbmF2aWdhdGlvbi5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLWFjY291bnQnLFxuICB0ZW1wbGF0ZVVybDogJ2FjY291bnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFjY291bnRQYWdlIHtcbiAgcHVibGljIGJhbGFuY2VGb3JtIDogRm9ybUdyb3VwO1xuICBwdWJsaWMgYmFsYW5jZSA6IHN0cmluZztcbiAgcHVibGljIHNob3dGb3JtIDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNEZXZpY2VPbmxpbmUgOiBib29sZWFuO1xuICBwdWJsaWMgcmVzcG9uc2VEYXRhIDogYW55O1xuICBwdWJsaWMgcGF5UmVzdWx0VGV4dCA6IHN0cmluZztcbiAgcHVibGljIHNob3dQYXltZW50UmVzdWx0VGV4dCA6IGJvb2xlYW47XG4gIHB1YmxpYyBzaG93UVJDb2RlIDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgdHJhbnNhY3Rpb25zIDogYW55O1xuICBwdWJsaWMgdXNlckluZm86IGFueTtcbiAgcHVibGljIGNyZWF0ZWRDb2RlOiBhbnk7XG4gIHB1YmxpYyBpdGVtczogQXJyYXk8e2lkOiBudW1iZXIsIHR5cGU6IHN0cmluZywgc3RvcmU6IHN0cmluZywgcHJpY2U6IHN0cmluZywgZGF0ZTogc3RyaW5nfT47XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgbmV0d29yazogTmV0d29yaywgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLFxuICAgIHB1YmxpYyBsb2FkaW5nQ3RybDogTG9hZGluZ0NvbnRyb2xsZXIsIHB1YmxpYyBhcGlTZXJ2aWNlIDogQXBpU2VydmljZVByb3ZpZGVyLCBwdWJsaWMgZXZlbnRzIDogRXZlbnRzLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLCBwcml2YXRlIGhlbHBlcjogSGVscGVyU2VydmljZSAvKiwgcHVibGljIGJhcmNvU2Nhbm5lcjogQmFyY29kZVNjYW5uZXIsIHByaXZhdGUgdG9hc3Q6IFRvYXN0Ki8pIHtcbiAgICB0aGlzLnNob3dQYXltZW50UmVzdWx0VGV4dCA9IGZhbHNlO1xuICAgIHRoaXMucGF5UmVzdWx0VGV4dCA9IFwiXCI7XG5cbiAgICB0aGlzLmJhbGFuY2UgPSB0aGlzLmhlbHBlci5iYWxhbmNlO1xuICAgIHRoaXMuYmFsYW5jZUZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgYW1vdW50OlsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGRpc2Nvbm5lY3RcbiAgICB0aGlzLm5ldHdvcmsub25EaXNjb25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGNvbm5lY3Rpb25cbiAgICB0aGlzLm5ldHdvcmsub25Db25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKSB7XG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMudXNlckxvZ2dlZEluS2V5KS50aGVuKCh2YWx1ZSk9PntcbiAgICAgIHRoaXMudXNlckluZm8gPSB2YWx1ZTtcbiAgICAgIHRoaXMudXBkYXRlVHJhbnNhY3Rpb25zKCk7XG4gICAgICBpZih0aGlzLnVzZXJJbmZvLnVzZXJUeXBlID09ICcxJyl7XG4gICAgICAgIHRoaXMuc2hvd1FSQ29kZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY3JlYXRlZENvZGUgPSBcIntcXFwic3RvcmVcXFwiOlxcXCJcIiArIHRoaXMudXNlckluZm8udXNlck5hbWUgKyBcIlxcXCIsXFxcInN0b3JlSWRcXFwiOlxcXCJcIiArIHRoaXMudXNlckluZm8udXNlcklkICsgXCJcXFwifVwiO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlVHJhbnNhY3Rpb25zKCl7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHZhciBkYXRhID0geyAndSc6IHRoaXMudXNlckluZm8udXNlcklkLCB0OiAnYnV5JyB9XG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldERhdGEoZGF0YSwgJ3RyYW5zYWN0aW9ucy5waHAnKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICB0aGlzLnRyYW5zYWN0aW9ucyA9IHJlc3VsdDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50cmFuc2FjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gdGhpcy50cmFuc2FjdGlvbnNbaV07XG4gICAgICAgIGxldCB0ZGF0ZSA9IG5ldyBEYXRlKHRyYW5zYWN0aW9uLmRhdGVfY3JlYXRlZCk7XG5cbiAgICAgICAgbGV0IG5hbWUgPSAnJztcbiAgICAgICAgaWYodHJhbnNhY3Rpb24uaW5fbmFtZS5sZW5ndGggPCA3KXtcbiAgICAgICAgICBuYW1lID0gdHJhbnNhY3Rpb24uaW5fbmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIG5hbWUgPSB0cmFuc2FjdGlvbi5pbl9uYW1lLnN1YnN0cigwLCA3KSArICcuLi4nXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHByaWNlRml4ZWQgPSB0cmFuc2FjdGlvbi50cmFuc2FjdGlvbl90eXBlX2lkID09IDMgPyAoJyQnICsgcGFyc2VGbG9hdCh0cmFuc2FjdGlvbi5wcmljZSkudG9GaXhlZCgyKSkgOiAnKCQnICsgcGFyc2VGbG9hdCh0cmFuc2FjdGlvbi5wcmljZSkudG9GaXhlZCgyKSArICcpJztcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICBpZDogdHJhbnNhY3Rpb24uaWQsXG4gICAgICAgICAgdHlwZTogdHJhbnNhY3Rpb24udHJhbnNhY3Rpb25fdHlwZV9pZCA9PSAzID8gJ0QnIDogJ0MnLFxuICAgICAgICAgIHN0b3JlOiB0cmFuc2FjdGlvbi50cmFuc2FjdGlvbl90eXBlX2lkID09IDMgPyAnLS0tLS0tLScgOiBuYW1lLFxuICAgICAgICAgIHByaWNlOiBwcmljZUZpeGVkLFxuICAgICAgICAgIGRhdGU6IHRkYXRlLmdldERhdGUoKSArICctJyArICh0ZGF0ZS5nZXRNb250aCgpICsgMSkgKyAnICcgKyB0ZGF0ZS5nZXRIb3VycygpICsgJzonICsgdGRhdGUuZ2V0TWludXRlcygpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2hvd1BheU1vcmVCYWxhbmNlRm9ybSgpe1xuICAgIHRoaXMuc2hvd0Zvcm0gPSB0cnVlO1xuICB9XG5cbiAgYXR0ZW1wVG9QYXlNb3JlQmFsYW5jZSgpe1xuICAgIGxldCBsb2FkaW5nID0gdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgY29udGVudDogJ0VzcGVyZSB1biBtb21lbnRvLi4uJ1xuICAgIH0pO1xuICAgIGxvYWRpbmcucHJlc2VudCgpO1xuICAgIHRoaXMuc2hvd1BheW1lbnRSZXN1bHRUZXh0ID0gZmFsc2U7XG5cbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy51c2VyTG9nZ2VkSW5LZXkpLnRoZW4odmFsdWUgPT4ge1xuICAgICAgdGhpcy51c2VySW5mbyA9IHZhbHVlO1xuICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2EnLCBwYXJzZUZsb2F0KHRoaXMuYmFsYW5jZUZvcm0udmFsdWUuYW1vdW50KS50b0ZpeGVkKDIpKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgndScsIHRoaXMudXNlckluZm8udXNlcklkKTtcblxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnBvc3REYXRhKGZvcm1EYXRhLCAncGF5bW9yZWJhbGFuY2UucGhwJykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIHRoaXMucmVzcG9uc2VEYXRhID0gcmVzdWx0O1xuICAgICAgICAgIHRoaXMuc2hvd1BheW1lbnRSZXN1bHRUZXh0ID0gdHJ1ZTtcblxuICAgICAgICAgIGxvYWRpbmcuZGlzbWlzcygpO1xuICAgICAgICAgIGlmICh0aGlzLnJlc3BvbnNlRGF0YS5zdGF0dXMgPT0gXCJva1wiKSB7XG4gICAgICAgICAgICB2YXIgYmFsYW5jZVZhbCA9ICckJyArIHBhcnNlRmxvYXQodGhpcy5yZXNwb25zZURhdGEuYmFsYW5jZSkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgIHRoaXMucGF5UmVzdWx0VGV4dCA9ICdTdSB0cmFuc2FjY2lvbiBzZSBoYSBoZWNobyBjb24gZXhpdG8uXFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU3UgbnVldm8gc2FsZG8gZXMgJyArIGJhbGFuY2VWYWw7XG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKCdzZXRCYWxhbmNlJywgYmFsYW5jZVZhbCk7XG4gICAgICAgICAgICB0aGlzLmJhbGFuY2UgPSBiYWxhbmNlVmFsO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUcmFuc2FjdGlvbnMoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgdGhpcy5wYXlSZXN1bHRUZXh0ID0gdGhpcy5yZXNwb25zZURhdGEubXNnO1xuICAgICAgICAgIH1cbiAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICBsb2FkaW5nLmRpc21pc3MoKTtcbiAgICAgICAgICB0aGlzLnNob3dQYXltZW50UmVzdWx0VGV4dCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5wYXlSZXN1bHRUZXh0ID0gJ0hhIG9jdXJyaWRvIHVuIGVycm9yOiAnICsgZXJyLnN0YXR1cztcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvYWNjb3VudC9hY2NvdW50LnRzIiwiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F0Y2hlZCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gMTI4O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvZXNtNSBsYXp5XG4vLyBtb2R1bGUgaWQgPSAxMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F0Y2hlZCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gMTcxO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjIGxhenlcbi8vIG1vZHVsZSBpZCA9IDE3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcywgRXZlbnRzLCBQbGF0Zm9ybSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgUVJTY2FubmVyLCBRUlNjYW5uZXJTdGF0dXMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3FyLXNjYW5uZXInO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9oZWxwZXInO1xuaW1wb3J0IHsgVG9hc3QgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3RvYXN0JztcblxuaW1wb3J0IHsgUGF5bWVudFBhZ2UgfSBmcm9tICcuLi9wYXltZW50L3BheW1lbnQnO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIFNjYW5uZXJQYWdlIHBhZ2UuXG4gKlxuICogU2VlIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvY29tcG9uZW50cy8jbmF2aWdhdGlvbiBmb3IgbW9yZSBpbmZvIG9uXG4gKiBJb25pYyBwYWdlcyBhbmQgbmF2aWdhdGlvbi5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLXNjYW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJ3NjYW5uZXIuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNjYW5uZXJQYWdlIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwcml2YXRlIHFyU2Nhbm5lcjogUVJTY2FubmVyLFxuICAgIHB1YmxpYyBoZWxwZXIgOiBIZWxwZXJTZXJ2aWNlLCBwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtLCBwdWJsaWMgZXZlbnRzIDogRXZlbnRzLCBwcml2YXRlIHRvYXN0OiBUb2FzdCkge1xuXG4gIH1cblxuICBpb25WaWV3RGlkTG9hZCgpIHtcbiAgICAvLyBPcHRpb25hbGx5IHJlcXVlc3QgdGhlIHBlcm1pc3Npb24gZWFybHlcbiAgICB0aGlzLnFyU2Nhbm5lci5wcmVwYXJlKClcbiAgICAgICAgLnRoZW4oKHN0YXR1czogUVJTY2FubmVyU3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgaWYgKHN0YXR1cy5hdXRob3JpemVkKSB7XG4gICAgICAgICAgICAgICAvLyBjYW1lcmEgcGVybWlzc2lvbiB3YXMgZ3JhbnRlZFxuXG5cbiAgICAgICAgICAgICAgIC8vIHN0YXJ0IHNjYW5uaW5nXG4gICAgICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1hcHAnKS5jbGFzc0xpc3QuYWRkKCdzY2FubmVyX2JnJyk7XG4gICAgICAgICAgICAgICAgbGV0IHNjYW5TdWIgPSB0aGlzLnFyU2Nhbm5lci5zY2FuKCkuc3Vic2NyaWJlKCh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8tIHRleHQgZGViZSB0ZW5lciB1biBqc29uIGNvbiBlbCBpZCBkZSBsYSB0aWVuZGEgeSBlbCBub21icmVcblxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBzY2FuSW5mbyA9IEpTT04ucGFyc2UodGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWxwZXIuc3RvcmVOYW1lID0gc2NhbkluZm8uc3RvcmU7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWxwZXIuc3RvcmVJZCA9IHNjYW5JbmZvLnN0b3JlSWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnFyU2Nhbm5lci5oaWRlKCk7IC8vIGhpZGUgY2FtZXJhIHByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgICBzY2FuU3ViLnVuc3Vic2NyaWJlKCk7IC8vIHN0b3Agc2Nhbm5pbmdcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdkN0cmwucHVzaChQYXltZW50UGFnZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucGxhdGZvcm0uaXMoJ2NvcmRvdmEnKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvYXN0LnNob3coJ0hhIG9jdXJyaWRvIHVuIGVycm9yLiBJbnRlbnRlIG51ZXZhbWVudGUgKCcrZSsnKScsICc1MDAwJywgJ2NlbnRlcicpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdkN0cmwucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0hhIG9jdXJyaWRvIHVuIGVycm9yLiBJbnRlbnRlIG51ZXZhbWVudGUgKCcrZSsnKScpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cy5kZW5pZWQpIHtcbiAgICAgICAgICAgICAgIC8vIGNhbWVyYSBwZXJtaXNzaW9uIHdhcyBwZXJtYW5lbnRseSBkZW5pZWRcbiAgICAgICAgICAgICAgIC8vIHlvdSBtdXN0IHVzZSBRUlNjYW5uZXIub3BlblNldHRpbmdzKCkgbWV0aG9kIHRvIGd1aWRlIHRoZSB1c2VyIHRvIHRoZSBzZXR0aW5ncyBwYWdlXG4gICAgICAgICAgICAgICAvLyB0aGVuIHRoZXkgY2FuIGdyYW50IHRoZSBwZXJtaXNzaW9uIGZyb20gdGhlcmVcbiAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgLy8gcGVybWlzc2lvbiB3YXMgZGVuaWVkLCBidXQgbm90IHBlcm1hbmVudGx5LiBZb3UgY2FuIGFzayBmb3IgcGVybWlzc2lvbiBhZ2FpbiBhdCBhIGxhdGVyIHRpbWUuXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIHRoaXMucXJTY2FubmVyLnNob3coKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZTogYW55KSA9PiB7XG4gICAgICBpZih0aGlzLnBsYXRmb3JtLmlzKCdjb3Jkb3ZhJykpe1xuICAgICAgICB0aGlzLnRvYXN0LnNob3coJ0hhIG9jdXJyaWRvIHVuIGVycm9yLiBJbnRlbnRlIG51ZXZhbWVudGUgKCcrZSsnKScsICcxMDAwMCcsICdjZW50ZXInKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL3NjYW5uZXIvc2Nhbm5lci50cyIsImltcG9ydCB7IENvbXBvbmVudCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vL2ltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9iYXJjb2RlLXNjYW5uZXInO1xuaW1wb3J0IHsgVG9hc3QgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3RvYXN0JztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcywgTG9hZGluZ0NvbnRyb2xsZXIsIEV2ZW50cywgUGxhdGZvcm0gfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yayc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuaW1wb3J0IHsgQXBpU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvaGVscGVyJztcbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSAnLi4vaG9tZS9ob21lJztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBQYXltZW50UGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1wYXltZW50JyxcbiAgdGVtcGxhdGVVcmw6ICdwYXltZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50UGFnZSB7XG4gIHByaXZhdGUgcGF5IDogRm9ybUdyb3VwO1xuICBwdWJsaWMgaXNEZXZpY2VPbmxpbmUgOiBib29sZWFuO1xuICBwdWJsaWMgc2hvd1BheW1lbnRGYWlsVGV4dCA6IGJvb2xlYW47XG4gIHB1YmxpYyBwYXlGYWlsVGV4dCA6IHN0cmluZztcbiAgcHVibGljIHN0b3JlTmFtZSA6IHN0cmluZztcbiAgcHVibGljIHN0b3JlSWQgOiBzdHJpbmc7XG4gIHB1YmxpYyByZXNwb25zZURhdGEgOiBhbnk7XG4gIHB1YmxpYyBjbGluZXRzOiBhbnlbXSA9IFtdO1xuICBwdWJsaWMgc2VsZWN0ZWRDbGllbnQ6IGFueTtcbiAgcHVibGljIGNsaWVudEZvdW5kOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBwYWlkIDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgdXNlckluZm86IGFueTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlLCBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsIHByaXZhdGUgbmV0d29yazogTmV0d29yaywgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSB0b2FzdDogVG9hc3QsIHB1YmxpYyBsb2FkaW5nQ3RybDogTG9hZGluZ0NvbnRyb2xsZXIsIHB1YmxpYyBhcGlTZXJ2aWNlIDogQXBpU2VydmljZVByb3ZpZGVyLCBwdWJsaWMgZXZlbnRzIDogRXZlbnRzLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLCBwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtLCBwdWJsaWMgaGVscGVyIDogSGVscGVyU2VydmljZS8qcHJpdmF0ZSBiYXJjb2RlU2Nhbm5lcjogQmFyY29kZVNjYW5uZXIsKi8pIHtcbiAgICB0aGlzLnBheSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICBwcmljZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgcXR5OiBbJzEnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgZGlzY29ubmVjdFxuICAgIHRoaXMubmV0d29yay5vbkRpc2Nvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgY29ubmVjdGlvblxuICAgIHRoaXMubmV0d29yay5vbkNvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5zdG9yZU5hbWUgPSBcIkN1YWwgZXMgbGEgY2FudGlkYWQgZGUgc3UgdHJhbnNhY2Npb24gY29uIFwiICsgaGVscGVyLnN0b3JlTmFtZSArIFwiP1wiO1xuICAgIC8qdGhpcy5zZWxlY3RlZENsaWVudCA9IHt9O1xuICAgIHRoaXMuYmFyY29kZVNjYW5uZXIuc2NhbigpLnRoZW4oKGJhcmNvZGVEYXRhKSA9PiB7XG4gICAgICAgIC8vLSB0ZXh0IGRlYmUgdGVuZXIgdW4ganNvbiBjb24gZWwgaWQgZGUgbGEgdGllbmRhIHkgZWwgbm9tYnJlXG4gICAgICAgIHZhciBzY2FuSW5mbyA9IEpTT04ucGFyc2UoYmFyY29kZURhdGEudGV4dCk7XG4gICAgICAgIHRoaXMuc3RvcmVOYW1lID0gc2NhbkluZm8uc3RvcmU7XG4gICAgICAgIHRoaXMuc3RvcmVJZCA9IHNjYW5JbmZvLnN0b3JlSWQ7XG4gICAgfSwgKGVycikgPT4ge1xuICAgICAgICB0aGlzLnRvYXN0LnNob3coZXJyLCAnNTAwMCcsICdjZW50ZXInKS5zdWJzY3JpYmUoXG4gICAgICAgICAgdG9hc3QgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9hc3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9KTsqL1xuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ2lvblZpZXdEaWRMb2FkIFBheW1lbnRQYWdlJyk7XG4gIH1cblxuICBnb0JhY2soKXtcbiAgICB0aGlzLm5hdkN0cmwuc2V0Um9vdChIb21lUGFnZSk7XG4gICAgdGhpcy5uYXZDdHJsLnBvcFRvUm9vdCgpO1xuICB9XG5cbiAgYXR0ZW1wVG9QYXkoKXtcbiAgICB0aGlzLnNob3dQYXltZW50RmFpbFRleHQgPSBmYWxzZTtcbiAgICBsZXQgbG9hZGluZyA9IHRoaXMubG9hZGluZ0N0cmwuY3JlYXRlKHtcbiAgICAgIGNvbnRlbnQ6ICdFc3BlcmUgdW4gbW9tZW50by4uLidcbiAgICB9KTtcbiAgICBsb2FkaW5nLnByZXNlbnQoKTtcblxuICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnVzZXJMb2dnZWRJbktleSkudGhlbih2YWx1ZSA9PiB7XG4gICAgICB0aGlzLnVzZXJJbmZvID0gdmFsdWU7XG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3AnLCB0aGlzLnBheS52YWx1ZS5wcmljZSk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncScsICcxJyk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYycsIFN0cmluZyh0aGlzLmhlbHBlci5zdG9yZUlkKSk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndScsIHRoaXMudXNlckluZm8udXNlcklkKTtcblxuICAgICAgICAvLy0gYWwgaGFjZXIgc3VibWl0IGRlYmUgZGUgY29ycmVyIGFwaSBwYXJhIGRlc2NvbnRhciBjYW50aWRhZCBlbiAkJCBkZSBsYSBjdWVudGEgZGVsIHVzdXNhcmlvIGxvZ3VlYWRvXG4gICAgICAgIHRoaXMuYXBpU2VydmljZS5wb3N0RGF0YShmb3JtRGF0YSwgJ3BheWJpbGwucGhwJykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgbG9hZGluZy5kaXNtaXNzKCk7XG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNlRGF0YSA9IHJlc3VsdDtcbiAgICAgICAgICAgIHRoaXMucGFpZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5yZXNwb25zZURhdGEuc3RhdHVzID09IFwib2tcIikge1xuICAgICAgICAgICAgICAgIHZhciB0b3RhbCA9IHRoaXMucGF5LnZhbHVlLnF0eSAqIHRoaXMucGF5LnZhbHVlLnByaWNlO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMucGxhdGZvcm0uaXMoJ2NvcmRvdmEnKSl7XG4gICAgICAgICAgICAgICAgICB0aGlzLnRvYXN0LnNob3coJ1N1IHRyYW5zYWNjaW9uIHBvciAkJyArIHRvdGFsICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnIGEgJyArIHRoaXMuaGVscGVyLnN0b3JlTmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyBzZSBoYSBoZWNobyBjb24gZXhpdG8uXFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1N1IHNhbGRvIHJlc3RhbnRlIGVzIGRlICQnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZURhdGEuYmFsYW5jZSwgJzE1MDAwJywgJ2NlbnRlcicpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goXCJzZXRCYWxhbmNlXCIsICckJyArIHBhcnNlRmxvYXQodGhpcy5yZXNwb25zZURhdGEuYmFsYW5jZSkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZDdHJsLnNldFJvb3QoSG9tZVBhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2Q3RybC5wb3BUb1Jvb3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BheW1lbnRGYWlsVGV4dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICB0aGlzLnBheUZhaWxUZXh0ID0gJ1N1IHRyYW5zYWNjaW9uIHBvciAkJyArIHRvdGFsICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnIGEgJyArIHRoaXMuaGVscGVyLnN0b3JlTmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyBzZSBoYSBoZWNobyBjb24gZXhpdG8uXFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1N1IHNhbGRvIHJlc3RhbnRlIGVzIGRlICQnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZURhdGEuYmFsYW5jZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHMucHVibGlzaCgnc2V0QmFsYW5jZScsICckJyArIHBhcnNlRmxvYXQodGhpcy5yZXNwb25zZURhdGEuYmFsYW5jZSkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zaG93UGF5bWVudEZhaWxUZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhpcy5wYXlGYWlsVGV4dCA9IHRoaXMucmVzcG9uc2VEYXRhLm1zZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgIGxvYWRpbmcuZGlzbWlzcygpO1xuICAgICAgICAgIHRoaXMucGFpZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zaG93UGF5bWVudEZhaWxUZXh0ID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnBheUZhaWxUZXh0ID0gJ2Vycm9yJztcbiAgICAgIH0pO1xuICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgbG9hZGluZy5kaXNtaXNzKCk7XG4gICAgICAgIHRoaXMucGFpZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hvd1BheW1lbnRGYWlsVGV4dCA9IHRydWU7XG4gICAgICAgIHRoaXMucGF5RmFpbFRleHQgPSBlcnIubXNnO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvcGF5bWVudC9wYXltZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcyB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgQXBpU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmsnO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2hlbHBlcic7XG5cbi8qKlxuICogR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgVHJhbnNhY3Rpb25zUGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS10cmFuc2FjdGlvbnMnLFxuICB0ZW1wbGF0ZVVybDogJ3RyYW5zYWN0aW9ucy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNhY3Rpb25zUGFnZSB7XG4gIHB1YmxpYyBpc0RldmljZU9ubGluZSA6IGJvb2xlYW47XG4gIHB1YmxpYyBiYWxhbmNlIDogc3RyaW5nO1xuICBwdWJsaWMgdHJhbnNhY3Rpb25zIDogYW55O1xuICBwdWJsaWMgdXNlckluZm86IGFueTtcbiAgcHVibGljIGl0ZW1zOiBBcnJheTx7aWQ6IG51bWJlciwgdXNlcjogc3RyaW5nLCBwcmljZTogc3RyaW5nLCBkYXRlOiBzdHJpbmd9PjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlLCBwdWJsaWMgYXBpU2VydmljZSA6IEFwaVNlcnZpY2VQcm92aWRlciwgXG4gIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcywgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsIHByaXZhdGUgbmV0d29yazogTmV0d29yaywgcHJpdmF0ZSBoZWxwZXI6IEhlbHBlclNlcnZpY2UpIHtcbiAgICBcbiAgICB0aGlzLmJhbGFuY2UgPSB0aGlzLmhlbHBlci5iYWxhbmNlO1xuICAgIFxuICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgZGlzY29ubmVjdFxuICAgIHRoaXMubmV0d29yay5vbkRpc2Nvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgY29ubmVjdGlvblxuICAgIHRoaXMubmV0d29yay5vbkNvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBpb25WaWV3RGlkTG9hZCgpIHtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMudXNlckxvZ2dlZEluS2V5KS50aGVuKCh2YWx1ZSk9PntcbiAgICAgIHRoaXMudXNlckluZm8gPSB2YWx1ZTtcbiAgICAgIHZhciBkYXRhID0geyAndSc6IHRoaXMudXNlckluZm8udXNlcklkLCB0eXBlOiAnc2VsbCcgfVxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLmdldERhdGEoZGF0YSwgJ3RyYW5zYWN0aW9ucy5waHAnKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25zID0gcmVzdWx0O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJhbnNhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gdGhpcy50cmFuc2FjdGlvbnNbaV07XG4gICAgICAgICAgbGV0IHRkYXRlID0gbmV3IERhdGUodHJhbnNhY3Rpb24uZGF0ZV9jcmVhdGVkKTtcbiAgICAgICAgICBcbiAgICAgICAgICBsZXQgbmFtZSA9ICcnO1xuICAgICAgICAgIGlmKHRyYW5zYWN0aW9uLm91dF9uYW1lLmxlbmd0aCA8IDEwKXtcbiAgICAgICAgICAgIG5hbWUgPSB0cmFuc2FjdGlvbi5vdXRfbmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIG5hbWUgPSB0cmFuc2FjdGlvbi5vdXRfbmFtZS5zdWJzdHIoMCwgMTApICsgJy4uLidcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHByaWNlRml4ZWQgPSAnJCcgKyBwYXJzZUZsb2F0KHRyYW5zYWN0aW9uLnByaWNlKS50b0ZpeGVkKDIpO1xuICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICBpZDogdHJhbnNhY3Rpb24uaWQsXG4gICAgICAgICAgICB1c2VyOiBuYW1lLFxuICAgICAgICAgICAgcHJpY2U6IHByaWNlRml4ZWQsXG4gICAgICAgICAgICBkYXRlOiB0ZGF0ZS5nZXREYXRlKCkgKyAnLScgKyAodGRhdGUuZ2V0TW9udGgoKSArIDEpICsgJyAnICsgdGRhdGUuZ2V0SG91cnMoKSArICc6JyArIHRkYXRlLmdldE1pbnV0ZXMoKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucy50cyIsImltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC5tb2R1bGUnO1xuXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21haW4udHMiLCJpbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBFcnJvckhhbmRsZXIsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJb25pY1N0b3JhZ2VNb2R1bGUgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5pbXBvcnQgeyBJb25pY0FwcCwgSW9uaWNFcnJvckhhbmRsZXIsIElvbmljTW9kdWxlIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG4vL2ltcG9ydCB7IEZhY2Vib29rIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9mYWNlYm9vayc7XG5pbXBvcnQgeyBRUlNjYW5uZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3FyLXNjYW5uZXInO1xuXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdG9hc3QnO1xuXG5pbXBvcnQgeyBNeUFwcCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4uL3BhZ2VzL2hvbWUvaG9tZSc7XG5pbXBvcnQgeyBMaXN0UGFnZSB9IGZyb20gJy4uL3BhZ2VzL2xpc3QvbGlzdCc7XG5pbXBvcnQgeyBMb2dpblBhZ2UgfSBmcm9tICcuLi9wYWdlcy9sb2dpbi9sb2dpbic7XG5pbXBvcnQgeyBTaWdudXBQYWdlIH0gZnJvbSAnLi4vcGFnZXMvc2lnbnVwL3NpZ251cCc7XG5pbXBvcnQgeyBGb3Jnb3RQYWdlIH0gZnJvbSAnLi4vcGFnZXMvZm9yZ290L2ZvcmdvdCc7XG5pbXBvcnQgeyBBY2NvdW50UGFnZSB9IGZyb20gJy4uL3BhZ2VzL2FjY291bnQvYWNjb3VudCc7XG5pbXBvcnQgeyBQYXltZW50UGFnZSB9IGZyb20gJy4uL3BhZ2VzL3BheW1lbnQvcGF5bWVudCc7XG5pbXBvcnQgeyBTY2FubmVyUGFnZSB9IGZyb20gJy4uL3BhZ2VzL3NjYW5uZXIvc2Nhbm5lcic7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbnNQYWdlIH0gZnJvbSAnLi4vcGFnZXMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucyc7XG5cbmltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3RhdHVzLWJhcic7XG5pbXBvcnQgeyBTcGxhc2hTY3JlZW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NwbGFzaC1zY3JlZW4nO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uL3Byb3ZpZGVycy9oZWxwZXInO1xuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yayc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUHJvdmlkZXIgfSBmcm9tICcuLi9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5neFFSQ29kZU1vZHVsZSB9IGZyb20gJ25neC1xcmNvZGUyJztcbmltcG9ydCB7IE5GQywgTmRlZiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmZjJztcbi8vaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2JhcmNvZGUtc2Nhbm5lcic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE15QXBwLFxuICAgIEhvbWVQYWdlLFxuICAgIExpc3RQYWdlLFxuICAgIExvZ2luUGFnZSxcbiAgICBTaWdudXBQYWdlLFxuICAgIEZvcmdvdFBhZ2UsXG4gICAgQWNjb3VudFBhZ2UsXG4gICAgUGF5bWVudFBhZ2UsXG4gICAgU2Nhbm5lclBhZ2UsXG4gICAgVHJhbnNhY3Rpb25zUGFnZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBJb25pY01vZHVsZS5mb3JSb290KE15QXBwKSxcbiAgICBJb25pY1N0b3JhZ2VNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgTmd4UVJDb2RlTW9kdWxlXG4gIF0sXG4gIGJvb3RzdHJhcDogW0lvbmljQXBwXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgTXlBcHAsXG4gICAgSG9tZVBhZ2UsXG4gICAgTGlzdFBhZ2UsXG4gICAgTG9naW5QYWdlLFxuICAgIFNpZ251cFBhZ2UsXG4gICAgRm9yZ290UGFnZSxcbiAgICBBY2NvdW50UGFnZSxcbiAgICBQYXltZW50UGFnZSxcbiAgICBTY2FubmVyUGFnZSxcbiAgICBUcmFuc2FjdGlvbnNQYWdlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFN0YXR1c0JhcixcbiAgICBTcGxhc2hTY3JlZW4sXG4gICAgSGVscGVyU2VydmljZSxcbiAgICBOZXR3b3JrLFxuICAgIC8vRmFjZWJvb2ssXG4gICAge3Byb3ZpZGU6IEVycm9ySGFuZGxlciwgdXNlQ2xhc3M6IElvbmljRXJyb3JIYW5kbGVyfSxcbiAgICBBcGlTZXJ2aWNlUHJvdmlkZXIsXG4gICAgUVJTY2FubmVyLFxuICAgIFRvYXN0LFxuICAgIE5GQyxcbiAgICBOZGVmXG4gICAgLy9CYXJjb2RlU2Nhbm5lclxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAubW9kdWxlLnRzIiwiZXhwb3J0IHZhciBDb25zdGFudHMgPSB7XHJcbiAgICBBUElfRU5EUE9JTlQgOiAnaHR0cHM6Ly93d3cuZXNmZXJhc29sdWNpb25lcy5jb20vYXBpL3BheW1lbnQvYXBpLycsXHJcbiAgICBMT0NBTF9BUElfRU5EUE9JTlQ6ICdodHRwOi8vbG9jYWxob3N0OjgwOTkvJyxcclxuICAgIHVzZXJMb2dnZWRJbktleSA6ICd1c2VyTG9nZ2VkSW4nLFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL2NvbnN0YW50cy50cyIsImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdpb25pYy1hbmd1bGFyJztcblxuLypcbiAgR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgQXBpU2VydmljZVByb3ZpZGVyIHByb3ZpZGVyLlxuXG4gIFNlZSBodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvZGVwZW5kZW5jeS1pbmplY3Rpb24gZm9yIG1vcmUgaW5mbyBvbiBwcm92aWRlcnNcbiAgYW5kIEFuZ3VsYXIgREkuXG4qL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2VQcm92aWRlciB7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHBDbGllbnQsIHB1YmxpYyBwbGF0Zm9ybTogUGxhdGZvcm0pIHtcbiAgICBjb25zb2xlLmxvZygnSGVsbG8gQXBpU2VydmljZVByb3ZpZGVyIFByb3ZpZGVyJyk7XG4gIH1cblxuICBwb3N0RGF0YShkYXRhLCB1cmwpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IGVuZHBvaW50ID0gQ29uc3RhbnRzLkFQSV9FTkRQT0lOVDtcbiAgICAgIGlmKCF0aGlzLnBsYXRmb3JtLmlzKCdjb3Jkb3ZhJykpe1xuICAgICAgICBlbmRwb2ludCA9IENvbnN0YW50cy5MT0NBTF9BUElfRU5EUE9JTlQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaHR0cC5wb3N0KGVuZHBvaW50ICsgdXJsLCBkYXRhKVxuICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RGF0YShkYXRhLCB1cmwpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB2YXIgc3RyID0gW107XG4gICAgICBmb3IgKHZhciBwIGluIGRhdGEpe1xuICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgIHN0ci5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChwKSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFbcF0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZW5kcG9pbnQgPSBDb25zdGFudHMuQVBJX0VORFBPSU5UO1xuICAgICAgaWYoIXRoaXMucGxhdGZvcm0uaXMoJ2NvcmRvdmEnKSl7XG4gICAgICAgIGVuZHBvaW50ID0gQ29uc3RhbnRzLkxPQ0FMX0FQSV9FTkRQT0lOVDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5odHRwLmdldChlbmRwb2ludCArIHVybCsnPycrc3RyLmpvaW4oXCImXCIpKVxuICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5cclxuZXhwb3J0IGNsYXNzIEhlbHBlclNlcnZpY2Uge1xyXG4gICAgcHVibGljIGJhbGFuY2U6IHN0cmluZztcclxuICAgIHB1YmxpYyBzdG9yZU5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBzdG9yZUlkOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlKXtcclxuICAgICAgICB0aGlzLmJhbGFuY2UgPSAnLS0tLSc7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QmFsYW5jZShhY3R1YWxCYWxhbmNlKXtcclxuICAgICAgICB0aGlzLmJhbGFuY2UgPSBhY3R1YWxCYWxhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0b3JlSW5mbyhhY3R1YWxTdG9yZU5hbWUsIGFjdHVhbFN0b3JlSWQpe1xyXG4gICAgICAgIHRoaXMuc3RvcmVOYW1lID0gYWN0dWFsU3RvcmVOYW1lO1xyXG4gICAgICAgIHRoaXMuc3RvcmVJZCA9IGFjdHVhbFN0b3JlSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCl7XHJcbiAgICAgICAgdGhpcy5iYWxhbmNlID0gJy0tLS0nO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoQ29uc3RhbnRzLnVzZXJMb2dnZWRJbktleSwgbnVsbCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvdmlkZXJzL2hlbHBlci50cyIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXYsIFBsYXRmb3JtLCBMb2FkaW5nQ29udHJvbGxlciwgRXZlbnRzIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3N0YXR1cy1iYXInO1xuaW1wb3J0IHsgU3BsYXNoU2NyZWVuIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zcGxhc2gtc2NyZWVuJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuaW1wb3J0IHsgQXBpU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi9wcm92aWRlcnMvaGVscGVyJztcblxuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tICcuLi9wYWdlcy9ob21lL2hvbWUnO1xuaW1wb3J0IHsgQWNjb3VudFBhZ2UgfSBmcm9tICcuLi9wYWdlcy9hY2NvdW50L2FjY291bnQnO1xuaW1wb3J0IHsgTG9naW5QYWdlIH0gZnJvbSAnLi4vcGFnZXMvbG9naW4vbG9naW4nO1xuaW1wb3J0IHsgU2lnbnVwUGFnZSB9IGZyb20gJy4uL3BhZ2VzL3NpZ251cC9zaWdudXAnO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25zUGFnZSB9IGZyb20gJy4uL3BhZ2VzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICdhcHAuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBNeUFwcCB7XG4gIEBWaWV3Q2hpbGQoTmF2KSBuYXY6IE5hdjtcblxuICByb290UGFnZTogYW55ID0gSG9tZVBhZ2U7XG4gIHVzZXJJbmZvOiBhbnk7XG4gIHJlc3BvbnNlRGF0YTphbnk7XG5cbiAgcGFnZXM6IEFycmF5PHt0aXRsZTogc3RyaW5nLCBjb21wb25lbnQ6IGFueSwgdHlwZTogc3RyaW5nLCBpY29uOiBzdHJpbmd9PjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtLCBwdWJsaWMgc3RhdHVzQmFyOiBTdGF0dXNCYXIsIHB1YmxpYyBzcGxhc2hTY3JlZW46IFNwbGFzaFNjcmVlbiwgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlLFxuICAgIHB1YmxpYyBhcGlTZXJ2aWNlIDogQXBpU2VydmljZVByb3ZpZGVyLCBwdWJsaWMgbG9hZGluZ0N0cmw6IExvYWRpbmdDb250cm9sbGVyLCBwdWJsaWMgZXZlbnRzIDogRXZlbnRzLCBwdWJsaWMgaGVscGVyIDogSGVscGVyU2VydmljZSkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZUFwcCgpO1xuXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnc2V0TWVudUl0ZW1zJywgdXNlclR5cGUgPT4ge1xuICAgICAgdGhpcy5zZXRNZW51SXRlbXModXNlclR5cGUpO1xuICAgIH0pO1xuXG4gICAgcGxhdGZvcm0ucmVhZHkoKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMudXNlckxvZ2dlZEluS2V5KS50aGVuKCh2YWx1ZSk9PntcbiAgICAgICAgICBpZih2YWx1ZSA9PSBudWxsKXtcbiAgICAgICAgICAgIHRoaXMubmF2LnNldFJvb3QoTG9naW5QYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGxldCBsb2FkaW5nID0gdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgICAgICAgICBjb250ZW50OiAnRXNwZXJlIHVuIG1vbWVudG8uLi4nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxvYWRpbmcucHJlc2VudCgpO1xuICAgICAgICAgICAgdGhpcy51c2VySW5mbyA9IHZhbHVlO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB7ICdpZCc6IHRoaXMudXNlckluZm8udXNlcklkLCAndHlwZSc6ICd1c2VyJyB9XG4gICAgICAgICAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0RGF0YShkYXRhLCAndXNlcnMucGhwJykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICBsb2FkaW5nLmRpc21pc3MoKTtcbiAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXN1bHQ7XG4gICAgICAgICAgICAgIHRoaXMuc2V0TWVudUl0ZW1zKHRoaXMucmVzcG9uc2VEYXRhLnVzZXIudXNlcl90eXBlX2lkID09IDIgPyAndXNlcicgOiAnc3RvcmUnKTtcbiAgICAgICAgICAgICAgdGhpcy5ldmVudHMucHVibGlzaChcInNldEJhbGFuY2VcIiwgJyQnICsgcGFyc2VGbG9hdCh0aGlzLnJlc3BvbnNlRGF0YS51c2VyLmFtb3VudCkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICB9LCBlcnIgPT4ge1xuICAgICAgICAgICAgICBsb2FkaW5nLmRpc21pc3MoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICB0aGlzLm5hdi5zZXRSb290KExvZ2luUGFnZSk7XG4gICAgICAgIH0pOztcbiAgICB9KTtcbiAgfVxuXG4gIHNldE1lbnVJdGVtcyh0eXBlKXtcbiAgICBpZih0eXBlPT0ndXNlcicpe1xuICAgICAgLy8gdXNlZCBmb3IgYW4gZXhhbXBsZSBvZiBuZ0ZvciBhbmQgbmF2aWdhdGlvblxuICAgICAgdGhpcy5wYWdlcyA9IFtcbiAgICAgICAgeyB0aXRsZTogJ0hvbWUnLCBjb21wb25lbnQ6IEhvbWVQYWdlLCB0eXBlOiAncm9vdCcsIGljb246ICcnIH0sXG4gICAgICAgIHsgdGl0bGU6ICdNaSBjdWVudGEnLCBjb21wb25lbnQ6IEFjY291bnRQYWdlLCB0eXBlOiAncHVzaCcsIGljb246ICcnIH0sXG4gICAgICAgIHsgdGl0bGU6ICdQZXJmaWwnLCBjb21wb25lbnQ6IFNpZ251cFBhZ2UsIHR5cGU6ICdyb290JywgaWNvbjogJycgfSxcbiAgICAgICAgeyB0aXRsZTogJ0xvZ291dCcsIGNvbXBvbmVudDogbnVsbCwgdHlwZTogJ2xvZ291dCcsIGljb246ICdsb2ctb3V0JyB9XG4gICAgICBdO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgLy8gdXNlZCBmb3IgYW4gZXhhbXBsZSBvZiBuZ0ZvciBhbmQgbmF2aWdhdGlvblxuICAgICAgdGhpcy5wYWdlcyA9IFtcbiAgICAgICAgeyB0aXRsZTogJ0hvbWUnLCBjb21wb25lbnQ6IEhvbWVQYWdlLCB0eXBlOiAncm9vdCcsIGljb246ICcnIH0sXG4gICAgICAgIHsgdGl0bGU6ICdNaSBjdWVudGEnLCBjb21wb25lbnQ6IEFjY291bnRQYWdlLCB0eXBlOiAncHVzaCcsIGljb246ICcnIH0sXG4gICAgICAgIHsgdGl0bGU6ICdNaXMgVmVudGFzJywgY29tcG9uZW50OiBUcmFuc2FjdGlvbnNQYWdlLCB0eXBlOiAncHVzaCcsIGljb246ICcnIH0sXG4gICAgICAgIHsgdGl0bGU6ICdQZXJmaWwnLCBjb21wb25lbnQ6IFNpZ251cFBhZ2UsIHR5cGU6ICdyb290JywgaWNvbjogJycgfSxcbiAgICAgICAgeyB0aXRsZTogJ0xvZ291dCcsIGNvbXBvbmVudDogbnVsbCwgdHlwZTogJ2xvZ291dCcsIGljb246ICdsb2ctb3V0JyB9XG4gICAgICBdO1xuICAgIH1cbiAgfVxuXG4gIGluaXRpYWxpemVBcHAoKSB7XG4gICAgdGhpcy5wbGF0Zm9ybS5yZWFkeSgpLnRoZW4oKCkgPT4ge1xuICAgICAgLy8gT2theSwgc28gdGhlIHBsYXRmb3JtIGlzIHJlYWR5IGFuZCBvdXIgcGx1Z2lucyBhcmUgYXZhaWxhYmxlLlxuICAgICAgLy8gSGVyZSB5b3UgY2FuIGRvIGFueSBoaWdoZXIgbGV2ZWwgbmF0aXZlIHRoaW5ncyB5b3UgbWlnaHQgbmVlZC5cbiAgICAgIHRoaXMuc3RhdHVzQmFyLnN0eWxlRGVmYXVsdCgpO1xuICAgICAgdGhpcy5zcGxhc2hTY3JlZW4uaGlkZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgb3BlblBhZ2UocGFnZSkge1xuICAgIC8vIFJlc2V0IHRoZSBjb250ZW50IG5hdiB0byBoYXZlIGp1c3QgdGhpcyBwYWdlXG4gICAgLy8gd2Ugd291bGRuJ3Qgd2FudCB0aGUgYmFjayBidXR0b24gdG8gc2hvdyBpbiB0aGlzIHNjZW5hcmlvXG4gICAgaWYocGFnZS50eXBlID09ICdsb2dvdXQnKVxuICAgICAgdGhpcy5ldmVudHMucHVibGlzaCgnbG9nb3V0Jyk7XG4gICAgZWxzZSBpZihwYWdlLnR5cGUgPT0gJ3Jvb3QnKVxuICAgICAgdGhpcy5uYXYuc2V0Um9vdChwYWdlLmNvbXBvbmVudCk7XG4gICAgZWxzZVxuICAgICAgdGhpcy5uYXYucHVzaChwYWdlLmNvbXBvbmVudCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnbGlzdC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBMaXN0UGFnZSB7XG4gIHNlbGVjdGVkSXRlbTogYW55O1xuICBpY29uczogc3RyaW5nW107XG4gIGl0ZW1zOiBBcnJheTx7dGl0bGU6IHN0cmluZywgbm90ZTogc3RyaW5nLCBpY29uOiBzdHJpbmd9PjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zKSB7XG4gICAgLy8gSWYgd2UgbmF2aWdhdGVkIHRvIHRoaXMgcGFnZSwgd2Ugd2lsbCBoYXZlIGFuIGl0ZW0gYXZhaWxhYmxlIGFzIGEgbmF2IHBhcmFtXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBuYXZQYXJhbXMuZ2V0KCdpdGVtJyk7XG5cbiAgICAvLyBMZXQncyBwb3B1bGF0ZSB0aGlzIHBhZ2Ugd2l0aCBzb21lIGZpbGxlciBjb250ZW50IGZvciBmdW56aWVzXG4gICAgdGhpcy5pY29ucyA9IFsnZmxhc2snLCAnd2lmaScsICdiZWVyJywgJ2Zvb3RiYWxsJywgJ2Jhc2tldGJhbGwnLCAncGFwZXItcGxhbmUnLFxuICAgICdhbWVyaWNhbi1mb290YmFsbCcsICdib2F0JywgJ2JsdWV0b290aCcsICdidWlsZCddO1xuXG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTE7IGkrKykge1xuICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgdGl0bGU6ICdJdGVtICcgKyBpLFxuICAgICAgICBub3RlOiAnVGhpcyBpcyBpdGVtICMnICsgaSxcbiAgICAgICAgaWNvbjogdGhpcy5pY29uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmljb25zLmxlbmd0aCldXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpdGVtVGFwcGVkKGV2ZW50LCBpdGVtKSB7XG4gICAgLy8gVGhhdCdzIHJpZ2h0LCB3ZSdyZSBwdXNoaW5nIHRvIG91cnNlbHZlcyFcbiAgICB0aGlzLm5hdkN0cmwucHVzaChMaXN0UGFnZSwge1xuICAgICAgaXRlbTogaXRlbVxuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvbGlzdC9saXN0LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIEV2ZW50cyB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yayc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2hlbHBlcic7XG5cbmltcG9ydCB7IExvZ2luUGFnZSB9IGZyb20gJy4uL2xvZ2luL2xvZ2luJztcbmltcG9ydCB7IEFjY291bnRQYWdlIH0gZnJvbSAnLi4vYWNjb3VudC9hY2NvdW50JztcbmltcG9ydCB7IFNjYW5uZXJQYWdlIH0gZnJvbSAnLi4vc2Nhbm5lci9zY2FubmVyJztcbi8vaW1wb3J0IHsgUGF5bWVudFBhZ2UgfSBmcm9tICcuLi9wYXltZW50L3BheW1lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJ2hvbWUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSG9tZVBhZ2Uge1xuICBwdWJsaWMgaXNEZXZpY2VPbmxpbmUgOiBib29sZWFuO1xuICBwdWJsaWMgYmFsYW5jZSA6IHN0cmluZztcbiAgcHVibGljIHNob3dSZWZyZXNoQnV0dG9uIDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwcml2YXRlIG5ldHdvcms6IE5ldHdvcmssIHB1YmxpYyBldmVudHMgOiBFdmVudHMsIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHB1YmxpYyBoZWxwZXIgOiBIZWxwZXJTZXJ2aWNlKSB7XG4gICAgICB0aGlzLmJhbGFuY2UgPSB0aGlzLmhlbHBlci5iYWxhbmNlO1xuICAgICAgZXZlbnRzLnN1YnNjcmliZSgnc2V0QmFsYW5jZScsIGFjdHVhbEJhbGFuY2UgPT4ge1xuICAgICAgICB0aGlzLmJhbGFuY2UgPSBhY3R1YWxCYWxhbmNlO1xuICAgICAgICB0aGlzLmhlbHBlci5zZXRCYWxhbmNlKGFjdHVhbEJhbGFuY2UpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZXZlbnRzLnN1YnNjcmliZSgnbG9nb3V0JywoKSA9PiB7XG4gICAgICAgICAgLy9jYWxsIG1ldGhvZCB0byByZWZyZXNoIGNvbnRlbnRcbiAgICAgICAgICB0aGlzLmxvZ291dCgpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBkaXNjb25uZWN0XG4gICAgICB0aGlzLm5ldHdvcmsub25EaXNjb25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBjb25uZWN0aW9uXG4gICAgICB0aGlzLm5ldHdvcmsub25Db25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBsb2dvdXQoKXtcbiAgICB0aGlzLmhlbHBlci5sb2dvdXQoKTtcbiAgICB0aGlzLm5hdkN0cmwuc2V0Um9vdChMb2dpblBhZ2UpO1xuICB9XG5cbiAgcmVsb2FkQWNjb3VudCgpe1xuICAgICAgdGhpcy5uYXZDdHJsLnB1c2goQWNjb3VudFBhZ2UpO1xuICB9XG5cbiAgbWFrZVBheW1lbnQoKXtcbiAgICAvKnRoaXMuaGVscGVyLnN0b3JlTmFtZSA9ICdDZXJ2ZWNlcmlhIEFydGVzYW5hbCBTLkEuJztcbiAgICB0aGlzLmhlbHBlci5zdG9yZUlkID0gMjtcbiAgICB0aGlzLm5hdkN0cmwucHVzaChQYXltZW50UGFnZSk7Ki9cbiAgICB0aGlzLm5hdkN0cmwucHVzaChTY2FubmVyUGFnZSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9ob21lL2hvbWUudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zLCBFdmVudHMsIExvYWRpbmdDb250cm9sbGVyIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZXR3b3JrJztcbi8vaW1wb3J0IHsgRmFjZWJvb2sgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ZhY2Vib29rJztcbmltcG9ydCB7IFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuaW1wb3J0IHsgQXBpU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5cbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSAnLi4vaG9tZS9ob21lJztcbmltcG9ydCB7IFNpZ251cFBhZ2UgfSBmcm9tICcuLi9zaWdudXAvc2lnbnVwJztcbmltcG9ydCB7IEZvcmdvdFBhZ2UgfSBmcm9tICcuLi9mb3Jnb3QvZm9yZ290JztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBMb2dpblBhZ2UgcGFnZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJ2xvZ2luLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpblBhZ2Uge1xuICBwcml2YXRlIGxvZ2luIDogRm9ybUdyb3VwO1xuICBwdWJsaWMgaXNEZXZpY2VPbmxpbmUgOiBib29sZWFuO1xuICBwdWJsaWMgc2hvd0xvZ2luRmFpbFRleHQgOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyB1c2VySW5mbyA6IGFueSA9IHt9O1xuICBwdWJsaWMgcmVzcG9uc2VEYXRhIDogYW55O1xuICBwdWJsaWMgbG9naW5GYWlsVGV4dCA6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlLCBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsIHByaXZhdGUgbmV0d29yazogTmV0d29yaywgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgLypwcml2YXRlIGZiOiBGYWNlYm9vaywqLyBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHVibGljIGV2ZW50cyA6IEV2ZW50cywgcHVibGljIGFwaVNlcnZpY2UgOiBBcGlTZXJ2aWNlUHJvdmlkZXIsIHB1YmxpYyBsb2FkaW5nQ3RybDogTG9hZGluZ0NvbnRyb2xsZXIpIHtcbiAgICB0aGlzLmxvZ2luID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHB3ZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KTtcbiAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcblxuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgZGlzY29ubmVjdFxuICAgIHRoaXMubmV0d29yay5vbkRpc2Nvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgY29ubmVjdGlvblxuICAgIHRoaXMubmV0d29yay5vbkNvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBpb25WaWV3RGlkTG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZygnaW9uVmlld0RpZExvYWQgTG9naW5QYWdlJyk7XG4gIH1cblxuICBzaWdudXBQYWdlKCl7IHRoaXMubmF2Q3RybC5zZXRSb290KFNpZ251cFBhZ2UpOyB9XG4gIGZvcmdvdFBhc3N3b3JkUGFnZSgpeyB0aGlzLm5hdkN0cmwuc2V0Um9vdChGb3Jnb3RQYWdlKTsgfVxuXG4gIGZiTG9naW4oKXtcbiAgICAvKnRoaXMuZmIubG9naW4oWydwdWJsaWNfcHJvZmlsZScsICdlbWFpbCddKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgdGhpcy5mYi5hcGkoJ21lLz9maWVsZHM9aWQsZW1haWwsZmlyc3RfbmFtZScsIFsncHVibGljX3Byb2ZpbGUnLCAnZW1haWwnXSkudGhlbihhcGlSZXMgPT4ge1xuICAgICAgICAgIHRoaXMudXNlckluZm8gPSBhcGlSZXM7XG4gICAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgICAgICAgYWxlcnQoJ0xvZ2dlZCBpbnRvIEZhY2Vib29rIScpXG4gICAgICAgIH0pLmNhdGNoKGUgPT4gYWxlcnQoJ0Vycm9yIGFwaSBpbnRvIEZhY2Vib29rJykpO1xuICAgIH0pLmNhdGNoKGUgPT4gYWxlcnQoJ0Vycm9yIGxvZ2dpbmcgaW50byBGYWNlYm9vaycgICsgZSkpOyovXG4gIH1cblxuICBhdHRlbXB0VXNlckxvZ2luKCl7XG4gICAgbGV0IGxvYWRpbmcgPSB0aGlzLmxvYWRpbmdDdHJsLmNyZWF0ZSh7XG4gICAgICBjb250ZW50OiAnRXNwZXJlIHVuIG1vbWVudG8uLi4nXG4gICAgfSk7XG4gICAgbG9hZGluZy5wcmVzZW50KCk7XG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCd1JywgdGhpcy5sb2dpbi52YWx1ZS5lbWFpbCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdwJywgdGhpcy5sb2dpbi52YWx1ZS5wd2QpO1xuICAgIHRoaXMuYXBpU2VydmljZS5wb3N0RGF0YShmb3JtRGF0YSwgJ2FjY2Vzcy5waHAnKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGxvYWRpbmcuZGlzbWlzcygpO1xuICAgICAgICB0aGlzLnJlc3BvbnNlRGF0YSA9IHJlc3VsdDtcbiAgICAgICAgaWYgKHRoaXMucmVzcG9uc2VEYXRhLnN0YXR1cyA9PSBcIm9rXCIpIHtcbiAgICAgICAgICBsZXQgdXNlckFycmF5ID0ge1xuICAgICAgICAgICAgdXNlcklkOiB0aGlzLnJlc3BvbnNlRGF0YS51c2VyLmlkLFxuICAgICAgICAgICAgdXNlckVtYWlsOiB0aGlzLnJlc3BvbnNlRGF0YS51c2VyLmVtYWlsLFxuICAgICAgICAgICAgdXNlck5hbWU6IHRoaXMucmVzcG9uc2VEYXRhLnVzZXIubmFtZSxcbiAgICAgICAgICAgIHVzZXJUeXBlOiB0aGlzLnJlc3BvbnNlRGF0YS51c2VyLnVzZXJfdHlwZV9pZFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KENvbnN0YW50cy51c2VyTG9nZ2VkSW5LZXksIHVzZXJBcnJheSk7XG4gICAgICAgICAgdGhpcy5zaG93TG9naW5GYWlsVGV4dCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goJ3NldEJhbGFuY2UnLCAnJCcgKyBwYXJzZUZsb2F0KHRoaXMucmVzcG9uc2VEYXRhLnVzZXIuYW1vdW50KS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKCdzZXRNZW51SXRlbXMnLCB0aGlzLnJlc3BvbnNlRGF0YS51c2VyLnVzZXJfdHlwZV9pZCA9PSAyID8gJ3VzZXInIDogJ3N0b3JlJyk7XG4gICAgICAgICAgdGhpcy5uYXZDdHJsLnNldFJvb3QoSG9tZVBhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2hvd0xvZ2luRmFpbFRleHQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMubG9naW5GYWlsVGV4dCA9ICh0aGlzLnJlc3BvbnNlRGF0YS5tc2cgPT0gJ25vIHBhc3N3b3JkJyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRyYXNlw7FhIGluY29ycmVjdGEnIDogKHRoaXMucmVzcG9uc2VEYXRhLm1zZyA9PSAnbm8gdXNlcicgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdFc3RlIHVzdWFyaW8gbm8gZXhpc3RlJyA6ICdFcnJvciBkZXNjb25vY2lkbycpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvbG9naW4vbG9naW4udHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zLCBMb2FkaW5nQ29udHJvbGxlciwgRXZlbnRzLCBQbGF0Zm9ybSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yayc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQXBpU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9oZWxwZXInO1xuaW1wb3J0IHsgTkZDLCBOZGVmIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZmMnO1xuaW1wb3J0IHsgVG9hc3QgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3RvYXN0JztcblxuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tICcuLi9ob21lL2hvbWUnO1xuaW1wb3J0IHsgTG9naW5QYWdlIH0gZnJvbSAnLi4vbG9naW4vbG9naW4nO1xuaW1wb3J0IHsgRm9yZ290UGFnZSB9IGZyb20gJy4uL2ZvcmdvdC9mb3Jnb3QnO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIFNpZ251cFBhZ2UgcGFnZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2Utc2lnbnVwJyxcbiAgdGVtcGxhdGVVcmw6ICdzaWdudXAuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNpZ251cFBhZ2Uge1xuICBwdWJsaWMgaXNEZXZpY2VPbmxpbmUgOiBib29sZWFuO1xuICBwcml2YXRlIHJlZ2lzdGVyIDogRm9ybUdyb3VwO1xuICBwdWJsaWMgcmVzcG9uc2VEYXRhIDogYW55O1xuICBwdWJsaWMgc2hvd0R1cGxpY2F0ZVRleHQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIG5hbWVWYWx1ZSA6IHN0cmluZztcbiAgcHVibGljIGVtYWlsVmFsdWUgOiBzdHJpbmc7XG4gIHB1YmxpYyBpc1VzZXJMb2dnZWRJbiA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHNob3dMaW5rVGFnQnV0dG9uIDogYm9vbGVhbjtcbiAgcHVibGljIHVzZXJJbmZvOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwcml2YXRlIG5ldHdvcms6IE5ldHdvcmssIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHB1YmxpYyBhcGlTZXJ2aWNlIDogQXBpU2VydmljZVByb3ZpZGVyLCBwcml2YXRlIG5mYzogTkZDLCBwcml2YXRlIG5kZWY6IE5kZWYsIHB1YmxpYyBsb2FkaW5nQ3RybDogTG9hZGluZ0NvbnRyb2xsZXIsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBcbiAgICBwdWJsaWMgaGVscGVyOiBIZWxwZXJTZXJ2aWNlLCBwdWJsaWMgZXZlbnRzOiBFdmVudHMsIHB1YmxpYyBwbGF0Zm9ybTogUGxhdGZvcm0sIHByaXZhdGUgdG9hc3Q6IFRvYXN0KSB7XG4gICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBkaXNjb25uZWN0XG4gICAgdGhpcy5uZXR3b3JrLm9uRGlzY29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBjb25uZWN0aW9uXG4gICAgdGhpcy5uZXR3b3JrLm9uQ29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXIgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgIG5hbWU6IFsnJ10sXG4gICAgICAgIHB3ZDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXSldLFxuICAgICAgICBncm91cCA6IFsnJ11cbiAgICB9KTtcbiAgICB2YXIgJHZpZXcgPSB0aGlzO1xuICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnVzZXJMb2dnZWRJbktleSkudGhlbih2YWx1ZSA9PiB7XG4gICAgICBpZih2YWx1ZSAhPSBudWxsKXtcbiAgICAgICAgdGhpcy5pc1VzZXJMb2dnZWRJbiA9IHRydWU7XG4gICAgICAgIHRoaXMudXNlckluZm8gPSB2YWx1ZTtcbiAgICAgICAgaWYodmFsdWUudXNlclR5cGUgPT0gMilcbiAgICAgICAgICB0aGlzLnNob3dMaW5rVGFnQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgbGV0IGxvYWRpbmcgPSB0aGlzLmxvYWRpbmdDdHJsLmNyZWF0ZSh7XG4gICAgICAgICAgICBjb250ZW50OiAnRXNwZXJlIHVuIG1vbWVudG8uLi4nXG4gICAgICAgIH0pO1xuICAgICAgICBsb2FkaW5nLnByZXNlbnQoKTtcbiAgICAgICAgJHZpZXcucmVnaXN0ZXIgPSAkdmlldy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIG5hbWU6IFsnJ10sXG4gICAgICAgICAgICBwd2Q6IFsnJywgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildLFxuICAgICAgICAgICAgZ3JvdXAgOiBbJyddXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudXNlckluZm8gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLmdldERhdGEoeyAnaWQnOiB0aGlzLnVzZXJJbmZvLnVzZXJJZCwgJ3R5cGUnOiAndXNlcicgfSwgJ3VzZXJzLnBocCcpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICBsb2FkaW5nLmRpc21pc3MoKTtcbiAgICAgICAgICB0aGlzLnJlc3BvbnNlRGF0YSA9IHJlc3VsdDtcbiAgICAgICAgICB0aGlzLm5hbWVWYWx1ZSA9IHRoaXMucmVzcG9uc2VEYXRhLnVzZXIubmFtZTtcbiAgICAgICAgICB0aGlzLmVtYWlsVmFsdWUgPSB0aGlzLnJlc3BvbnNlRGF0YS51c2VyLmVtYWlsO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ2lvblZpZXdEaWRMb2FkIFNpZ251cFBhZ2UnKTtcbiAgfVxuXG4gIGxvZ291dCgpe1xuICAgICAgdGhpcy5oZWxwZXIubG9nb3V0KCk7XG4gICAgICB0aGlzLm5hdkN0cmwuc2V0Um9vdChMb2dpblBhZ2UpO1xuICB9XG5cbiAgY2FuY2VsKCl7XG4gICAgICB0aGlzLm5hdkN0cmwuc2V0Um9vdChIb21lUGFnZSk7XG4gIH1cblxuICBsb2dpblBhZ2UoKXsgdGhpcy5uYXZDdHJsLnNldFJvb3QoTG9naW5QYWdlKTsgfVxuICBmb3Jnb3RQYXNzd29yZFBhZ2UoKXsgdGhpcy5uYXZDdHJsLnNldFJvb3QoRm9yZ290UGFnZSk7IH1cblxuICBsaW5rVGFnKCl7XG4gICAgdGhpcy5uZmMuYWRkTmRlZkxpc3RlbmVyKCgpID0+IHtcbiAgICAgIGlmKHRoaXMucGxhdGZvcm0uaXMoJ2NvcmRvdmEnKSl7XG4gICAgICAgIHRoaXMudG9hc3Quc2hvdygnc3VjY2Vzc2Z1bGx5IGF0dGFjaGVkIG5kZWYgbGlzdGVuZXInLCAnNTAwMCcsICdjZW50ZXInKTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGFsZXJ0KCdzdWNjZXNzZnVsbHkgYXR0YWNoZWQgbmRlZiBsaXN0ZW5lcicpO1xuICAgICAgfVxuICAgIH0sIChlcnIpID0+IHtcbiAgICAgIGlmKHRoaXMucGxhdGZvcm0uaXMoJ2NvcmRvdmEnKSl7XG4gICAgICAgIHRoaXMudG9hc3Quc2hvdygnZXJyb3IgYXR0YWNoaW5nIG5kZWYgbGlzdGVuZXInICsgZXJyLCAnNTAwMCcsICdjZW50ZXInKTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGFsZXJ0KCdlcnJvciBhdHRhY2hpbmcgbmRlZiBsaXN0ZW5lcicgKyBlcnIpO1xuICAgICAgfVxuICAgIH0pLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgIGlmKHRoaXMucGxhdGZvcm0uaXMoJ2NvcmRvdmEnKSl7XG4gICAgICAgIHRoaXMudG9hc3Quc2hvdygncmVjZWl2ZWQgbmRlZiBtZXNzYWdlLiB0aGUgdGFnIGNvbnRhaW5zOiAnICsgZXZlbnQudGFnLCAnNTAwMCcsICdjZW50ZXInKTtcbiAgICAgICAgdGhpcy50b2FzdC5zaG93KCdkZWNvZGVkIHRhZyBpZCcgKyB0aGlzLm5mYy5ieXRlc1RvSGV4U3RyaW5nKGV2ZW50LnRhZy5pZCksICc1MDAwJywgJ2NlbnRlcicpO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgYWxlcnQoJ3JlY2VpdmVkIG5kZWYgbWVzc2FnZS4gdGhlIHRhZyBjb250YWluczogJyArIGV2ZW50LnRhZyk7XG4gICAgICAgIGFsZXJ0KCdkZWNvZGVkIHRhZyBpZCcgKyB0aGlzLm5mYy5ieXRlc1RvSGV4U3RyaW5nKGV2ZW50LnRhZy5pZCkpO1xuICAgICAgfVxuXG4gICAgICBsZXQgbWVzc2FnZSA9IHRoaXMubmRlZi50ZXh0UmVjb3JkKHRoaXMudXNlckluZm8udXNlckVtYWlsKTtcbiAgICAgIHRoaXMubmZjLnNoYXJlKFttZXNzYWdlXSkudGhlbihzdWNjZXNzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coc3VjY2Vzcyk7XG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgYXR0ZW1wdFVzZXJSZWdpc3Rlcigpe1xuICAgIHRoaXMuc2hvd0R1cGxpY2F0ZVRleHQgPSBmYWxzZTtcbiAgICBsZXQgbG9hZGluZyA9IHRoaXMubG9hZGluZ0N0cmwuY3JlYXRlKHtcbiAgICAgICAgY29udGVudDogJ0VzcGVyZSB1biBtb21lbnRvLi4uJ1xuICAgIH0pO1xuICAgIGxvYWRpbmcucHJlc2VudCgpO1xuXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMudXNlckxvZ2dlZEluS2V5KS50aGVuKHZhbHVlID0+IHtcbiAgICAgIHRoaXMudXNlckluZm8gPSB2YWx1ZTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgndXNlcklkJywgdGhpcy51c2VySW5mby51c2VySWQgKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbmFtZScsIHRoaXMucmVnaXN0ZXIudmFsdWUubmFtZSk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2VtYWlsJywgdGhpcy5yZWdpc3Rlci52YWx1ZS5lbWFpbCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3VzZXJfdHlwZV9pZCcsICcyJyk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3VpZCcsJzEyMzQ1Njc4OTAnKTtcbiAgICAgIGlmKHZhbHVlICE9IG51bGwpe1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3R5cGUnLCAnc2F2ZScpO1xuICAgICAgICBpZih0aGlzLnJlZ2lzdGVyLnZhbHVlLnB3ZClcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Bhc3N3b3JkJywgdGhpcy5yZWdpc3Rlci52YWx1ZS5wd2QpO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0eXBlJywgJ25ldycpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Bhc3N3b3JkJywgdGhpcy5yZWdpc3Rlci52YWx1ZS5wd2QpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFwaVNlcnZpY2UucG9zdERhdGEoZm9ybURhdGEsICd1c2Vycy5waHAnKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGxvYWRpbmcuZGlzbWlzcygpO1xuICAgICAgICB0aGlzLnJlc3BvbnNlRGF0YSA9IHJlc3VsdDtcbiAgICAgICAgaWYgKHRoaXMucmVzcG9uc2VEYXRhLnN0YXR1cyA9PSBcIm9rXCIpIHtcbiAgICAgICAgICBsZXQgdXNlckFycmF5ID0ge1xuICAgICAgICAgICAgdXNlcklkOiB0aGlzLnJlc3BvbnNlRGF0YS5pZCxcbiAgICAgICAgICAgIHVzZXJOYW1lOiB0aGlzLnJlc3BvbnNlRGF0YS51c2VyLm5hbWUsXG4gICAgICAgICAgICB1c2VyRW1haWw6IHRoaXMucmVzcG9uc2VEYXRhLnVzZXIuZW1haWwsXG4gICAgICAgICAgICB1c2VyVHlwZTogdGhpcy5yZXNwb25zZURhdGEudXNlci51c2VyX3R5cGVfaWRcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdGhpcy5zdG9yYWdlLnNldChDb25zdGFudHMudXNlckxvZ2dlZEluS2V5LCB1c2VyQXJyYXkpO1xuICAgICAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goJ3NldEJhbGFuY2UnLCAnJCcgKyBwYXJzZUZsb2F0KHRoaXMucmVzcG9uc2VEYXRhLnVzZXIuYW1vdW50KS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICB0aGlzLm5hdkN0cmwuc2V0Um9vdChIb21lUGFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLnJlc3BvbnNlRGF0YS5tc2cgPT0gXCJkdXBsaWNhdGVcIil7XG4gICAgICAgICAgdGhpcy5zaG93RHVwbGljYXRlVGV4dCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvc2lnbnVwL3NpZ251cC50cyJdLCJzb3VyY2VSb290IjoiIn0=
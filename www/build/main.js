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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_helper__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_constants__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(19);
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
    function AccountPage(navCtrl, formBuilder, network, navParams, loadingCtrl, apiService, storage, events, zone, helper /*, public barcoScanner: BarcodeScanner, private toast: Toast*/) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.network = network;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.storage = storage;
        this.events = events;
        this.zone = zone;
        this.helper = helper; /*, public barcoScanner: BarcodeScanner, private toast: Toast*/
        this.showForm = false;
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
        this.storage.get(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* Constants */].userLoggedInKey).then(function (value) {
            _this.userInfo = value;
            _this.updateTransactions();
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
        this.storage.get(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* Constants */].userLoggedInKey).then(function (value) {
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
            selector: 'page-account',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\user\src\pages\account\account.html"*/'<!--\n  Generated template for the AccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mi cuenta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    Su balance actual es\n\n    <h1>{{ balance }}</h1>\n\n    <button ion-button round color="secondary" (click)="showPayMoreBalanceForm()">Agregar mas</button>\n\n    <div *ngIf="showForm">\n      <form [formGroup]="balanceForm" (ngSubmit)="attempToPayMoreBalance()">\n        <ion-list no-lines padding-top>\n          <ion-item>\n            <ion-input type="number" placeholder="Monto" formControlName="amount"></ion-input>\n          </ion-item>\n        </ion-list>\n        <button ion-button full round color="secondary" type="submit" [disabled]="!balanceForm.valid">Pagar</button>\n        <label class="error" *ngIf="showPaymentResultText">{{ payResultText }} </label>\n      </form>\n    </div>\n  </ion-item>\n  <h1>Transacciones</h1>\n  <ion-grid>\n    <ion-row ion-item *ngFor="let item of items">\n      <ion-col col-2>\n        {{item.type}}\n      </ion-col>\n      <ion-col col-4>\n        {{item.store}}\n      </ion-col>\n      <ion-col col-2>\n        {{item.price}}\n      </ion-col>\n      <ion-col col-4>\n        {{item.date}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\user\src\pages\account\account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_5__providers_helper__["a" /* HelperService */] /*, public barcoScanner: BarcodeScanner, private toast: Toast*/])
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

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScannerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_helper__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__payment_payment__ = __webpack_require__(219);
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

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_toast__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_constants__ = __webpack_require__(22);
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

/***/ 22:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook_ngx__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_qr_scanner__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_toast__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_forgot_forgot__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_account_account__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_payment_payment__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_scanner_scanner__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_transactions_transactions__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_helper__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_api_service_api_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_qrcode2__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_nfc__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_forgot_forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_scanner_scanner__["a" /* ScannerPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_transactions_transactions__["a" /* TransactionsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_23_ngx_qrcode2__["a" /* NgxQRCodeModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_forgot_forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_scanner_scanner__["a" /* ScannerPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_transactions_transactions__["a" /* TransactionsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_19__providers_helper__["a" /* HelperService */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook_ngx__["a" /* Facebook */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_api_service_api_service__["a" /* ApiServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_qr_scanner__["a" /* QRScanner */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_nfc__["a" /* NFC */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_nfc__["b" /* Ndef */]
                //BarcodeScanner
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_constants__ = __webpack_require__(22);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_constants__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_constants__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_service_api_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_helper__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_account_account__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(62);
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
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */], type: 'root', icon: '' },
            { title: 'Mi cuenta', component: __WEBPACK_IMPORTED_MODULE_9__pages_account_account__["a" /* AccountPage */], type: 'push', icon: '' },
            { title: 'Perfil', component: __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */], type: 'root', icon: '' },
            { title: 'Logout', component: null, type: 'logout', icon: 'log-out' }
        ];
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

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_constants__ = __webpack_require__(22);
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

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_helper__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_constants__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__account_account__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__scanner_scanner__ = __webpack_require__(218);
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
    function HomePage(navCtrl, storage, network, events, zone, helper) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.network = network;
        this.events = events;
        this.zone = zone;
        this.helper = helper;
        this.showRefreshButton = false;
        this.showQRCode = false;
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
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_5__services_constants__["a" /* Constants */].userLoggedInKey).then(function (value) {
            if (value != null) {
                _this.userInfo = value;
                _this.showQRCode = true;
                _this.createdCode = "{\"user\":\"" + _this.userInfo.userName + "\",\"userId\":\"" + _this.userInfo.userId + "\"}";
            }
        });
    };
    HomePage.prototype.logout = function () {
        this.helper.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.reloadAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__account_account__["a" /* AccountPage */]);
    };
    HomePage.prototype.makePayment = function () {
        /*this.helper.storeName = 'Cerveceria Artesanal S.A.';
        this.helper.storeId = 2;
        this.navCtrl.push(PaymentPage);*/
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__scanner_scanner__["a" /* ScannerPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\user\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n  <ion-item class="no-conection" *ngIf="!isDeviceOnline">Sin conexión a internet</ion-item>\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n    <p class="balance-title">Saldo actual</p>\n    <p class="balance-number">{{ balance }}</p>\n\n    <ion-item *ngIf="showQRCode">\n      <h1>Código de venta</h1>\n      <div>\n        <ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>\n      </div>\n    </ion-item>\n\n    <button ion-button end color="primary" (click)="refreshBalance();" *ngIf="showRefreshButton"> RECARGAR CUENTA </button>\n  </div>\n  <button ion-button full color="secondary" (click)="reloadAccount();"> RECARGAR CUENTA </button>\n\n  <button ion-button full color="secondary" (click)="makePayment();"> HAZ UN PAGO </button>\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\user\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_4__providers_helper__["a" /* HelperService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_service_api_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_constants__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook_ngx__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signup_signup__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__forgot_forgot__ = __webpack_require__(113);
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
    function LoginPage(navCtrl, fb, storage, navParams, network, zone, formBuilder, events, apiService, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.fb = fb;
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
        this.FB_APP_ID = 260676854593763;
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
    LoginPage.prototype.signupPage = function () { this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__signup_signup__["a" /* SignupPage */]); };
    LoginPage.prototype.forgotPasswordPage = function () { this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__forgot_forgot__["a" /* ForgotPage */]); };
    LoginPage.prototype.fbLogin = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Espere un momento...'
        });
        loading.present();
        //let permissions = new Array<string>();
        //the permissions your facebook app needs from the user
        var permissions = ["public_profile", "email"];
        this.fb.login(permissions)
            .then(function (response) {
            var userId = response.authResponse.userID;
            //Getting name and gender properties
            _this.fb.api("/me?fields=name,email", permissions)
                .then(function (user) {
                //user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
                //now we have the users info, let's save it in the NativeStorage
                var formData = new FormData();
                formData.append('n', user.name);
                formData.append('u', user.email);
                formData.append('p', '00000');
                formData.append('i', '1234567');
                formData.append('f', userId);
                formData.append('t', '2');
                _this.apiService.postData(formData, 'access.php').then(function (result) {
                    loading.dismiss();
                    _this.responseData = result;
                    _this.accessResponse(_this.responseData);
                });
            });
        });
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
        formData.append('t', '2');
        this.apiService.postData(formData, 'access.php').then(function (result) {
            loading.dismiss();
            _this.responseData = result;
            _this.accessResponse(_this.responseData);
        });
    };
    LoginPage.prototype.accessResponse = function (_responseData) {
        if (_responseData.status == "ok") {
            var userArray = {
                userId: _responseData.user.id,
                userEmail: _responseData.user.email,
                userName: _responseData.user.name
            };
            this.storage.set(__WEBPACK_IMPORTED_MODULE_6__services_constants__["a" /* Constants */].userLoggedInKey, userArray);
            this.showLoginFailText = false;
            this.events.publish('setBalance', '$' + parseFloat(_responseData.user.amount).toFixed(2));
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
        }
        else {
            this.showLoginFailText = true;
            this.loginFailText = (_responseData.msg == 'no password' ? 'Contraseña incorrecta' : (_responseData.msg == 'no user' ? 'Este usuario no existe' : (_responseData.msg == 'no platform' ? 'Plataforma incorrecta' : 'Error desconocido')));
        }
        return;
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\user\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n  <ion-item class="no-conection" *ngIf="!isDeviceOnline">Sin conexión a internet</ion-item>\n\n</ion-header>\n\n\n<ion-content padding class="masters">\n\n    <ion-grid>\n      <ion-row>\n        <ion-col ><button ion-button block class="facebookButton" (click)="fbLogin();">Login With Facebook</button></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col><button ion-button block class="instagramButton">Login With Instagram</button></ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div class="hrLine"><span>Or</span></div>\n\n    <form [formGroup]="login" (ngSubmit)="attemptUserLogin()">\n      <ion-list no-lines padding-top>\n        <ion-item>\n          <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="password" placeholder="Password" formControlName="pwd"></ion-input>\n        </ion-item>\n      </ion-list>\n      <button ion-button block round color="secondary" type="submit" [disabled]="!login.valid">Login</button>\n      <label class="error" *ngIf="showLoginFailText">{{ loginFailText }} </label>\n    </form>\n\n    <div padding-top>\n    <button ion-button block color="light" clear (click)="signupPage();">If new member ? SIGNUP</button>\n    <button ion-button block color="light" clear (click)="forgotPasswordPage();">Forgot Password</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\user\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook_ngx__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_5__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_constants__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_helper__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_nfc__ = __webpack_require__(217);
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
                // TODO buscar si existe el tag en la bd y hacer login con ese id
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
                        userEmail: _this.responseData.user.email
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
            selector: 'page-signup',template:/*ion-inline-start:"C:\inetpub\wwwroot\paymentapp\user\src\pages\signup\signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>signup</ion-title>\n        <ion-buttons end *ngIf="isUserLoggedIn">\n          <button id="logout" (click)="logout()">\n            Logout\n          </button>\n        </ion-buttons>\n  </ion-navbar>\n  <ion-item class="no-conection" *ngIf="!isDeviceOnline">Sin conexión a internet</ion-item>\n\n</ion-header>\n\n\n<ion-content padding class="masters">\n\n    <ion-grid>\n      <ion-row *ngIf="!isUserLoggedIn">\n        <ion-col><button ion-button block class="facebookButton"> Facebook</button></ion-col>\n        <ion-col><button ion-button block class="instagramButton"> Instagram</button></ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button block (click)="linkTag()">Enlazar Tag</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div class="hrLine" *ngIf="!isUserLoggedIn"><span>Or</span></div>\n    <form [formGroup]="register" (ngSubmit)="attemptUserRegister()">\n      <ion-list no-lines padding-top>\n        <ion-item>\n          <ion-input type="text" placeholder="Nombre" value="{{ nameValue }}" formControlName="name"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="email" placeholder="Email" value="{{ emailValue }}" formControlName="email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="password" placeholder="Password" formControlName="pwd"></ion-input>\n        </ion-item>\n      </ion-list>\n      <button ion-button block round color="secondary" type="submit" [disabled]="!register.valid" *ngIf="!isUserLoggedIn">Signup</button>\n      <button ion-button block round color="secondary" type="submit" [disabled]="!register.valid" *ngIf="isUserLoggedIn">Guardar</button>\n      <label class="error" *ngIf="showDuplicateText">Este correo ya existe, intente otro</label>\n      <ion-row><a center ion-link color="primary" (click)="cancel();" *ngIf="isUserLoggedIn">Cancel</a></ion-row>\n    </form>\n    <div padding *ngIf="!isUserLoggedIn">\n      <button ion-button block color="light" clear (click)="loginPage();">If already have an account ? LOGIN</button>\n      <button ion-button block color="light" clear (click)="forgotPasswordPage();">Forgot Password</button>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\inetpub\wwwroot\paymentapp\user\src\pages\signup\signup.html"*/,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYWdlcy9mb3Jnb3QvZm9yZ290LnRzIiwiLi4vLi4vc3JjL3BhZ2VzL2FjY291bnQvYWNjb3VudC50cyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2VzbTUgbGF6eSIsIi4uLy4uL3NyYyBsYXp5IiwiLi4vLi4vc3JjL3BhZ2VzL3NjYW5uZXIvc2Nhbm5lci50cyIsIi4uLy4uL3NyYy9wYWdlcy9wYXltZW50L3BheW1lbnQudHMiLCIuLi8uLi9zcmMvc2VydmljZXMvY29uc3RhbnRzLnRzIiwiLi4vLi4vc3JjL2FwcC9tYWluLnRzIiwiLi4vLi4vc3JjL2FwcC9hcHAubW9kdWxlLnRzIiwiLi4vLi4vc3JjL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZS50cyIsIi4uLy4uL3NyYy9wcm92aWRlcnMvaGVscGVyLnRzIiwiLi4vLi4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiLi4vLi4vc3JjL3BhZ2VzL2xpc3QvbGlzdC50cyIsIi4uLy4uL3NyYy9wYWdlcy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25zLnRzIiwiLi4vLi4vc3JjL3BhZ2VzL2hvbWUvaG9tZS50cyIsIi4uLy4uL3NyYy9wYWdlcy9sb2dpbi9sb2dpbi50cyIsIi4uLy4uL3NyYy9wYWdlcy9zaWdudXAvc2lnbnVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQzBCO0FBQzVCO0FBQ29CO0FBQ1M7QUFFbEM7QUFDRztBQUU5Qzs7Ozs7R0FLRztBQU1IO0lBUUUsb0JBQW1CLE9BQXNCLEVBQVMsV0FBOEIsRUFBUyxTQUFvQixFQUFVLE9BQWdCLEVBQVUsSUFBWSxFQUNwSixVQUErQixFQUFVLFdBQXdCO1FBRDFFLGlCQWtCQztRQWxCa0IsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxZ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QUssQ0FBQyxhQUFHO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUE5SlUsVUFBVTtRQUp0Qix3RUFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7V0FDRztTQUMzQixDQUFDOzJPQVc0QiwwRUFBZ0MscUVBQTJCLENBQXlEO1lBQzFILHVJQUFpQyxFQUFHLCtEQUEwQyxzRUFBbUQ7WUFDdEksT0FBcUY7T0FaM0YsVUFBVSxDQStKdEI7SUFBRCxDQUFDO0FBQUE7U0EvSlksVUFBVSxlIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zLCBMb2FkaW5nQ29udHJvbGxlciB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yayc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQXBpU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcblxuaW1wb3J0IHsgTG9naW5QYWdlIH0gZnJvbSAnLi4vbG9naW4vbG9naW4nO1xuaW1wb3J0IHsgU2lnbnVwUGFnZSB9IGZyb20gJy4uL3NpZ251cC9zaWdudXAnO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIEZvcmdvdFBhZ2UgcGFnZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtZm9yZ290JyxcbiAgdGVtcGxhdGVVcmw6ICdmb3Jnb3QuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEZvcmdvdFBhZ2Uge1xuICBwcml2YXRlIGZvcmdvdCA6IEZvcm1Hcm91cDtcbiAgcHVibGljIGlzRGV2aWNlT25saW5lIDogYm9vbGVhbjtcbiAgcHVibGljIHNob3dGb3Jnb3RGYWlsVGV4dCA6IGJvb2xlYW47XG4gIHB1YmxpYyBmb3Jnb3RGYWlsVGV4dCA6IHN0cmluZztcbiAgcHVibGljIHJlc3BvbnNlRGF0YSA6IGFueTtcbiAgcHVibGljIHNob3dTZW50IDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHVibGljIGxvYWRpbmdDdHJsOiBMb2FkaW5nQ29udHJvbGxlciwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwcml2YXRlIG5ldHdvcms6IE5ldHdvcmssIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHB1YmxpYyBhcGlTZXJ2aWNlIDogQXBpU2VydmljZVByb3ZpZGVyLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xuICAgIHRoaXMuZm9yZ290ID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgZGlzY29ubmVjdFxuICAgIHRoaXMubmV0d29yay5vbkRpc2Nvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgY29ubmVjdGlvblxuICAgIHRoaXMubmV0d29yay5vbkNvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBpb25WaWV3RGlkTG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZygnaW9uVmlld0RpZExvYWQgRm9yZ290UGFnZScpO1xuICB9XG5cbiAgYXR0ZW1wdFVzZXJGb3Jnb3QoKSB7XG4gICAgbGV0IGxvYWRpbmcgPSB0aGlzLmxvYWRpbmdDdHJsLmNyZWF0ZSh7XG4gICAgICBjb250ZW50OiAnRXNwZXJlIHVuIG1vbWVudG8uLi4nXG4gICAgfSk7XG4gICAgbG9hZGluZy5wcmVzZW50KCk7XG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdlJywgdGhpcy5mb3Jnb3QudmFsdWUuZW1haWwpO1xuICAgIHRoaXMuYXBpU2VydmljZS5wb3N0RGF0YShmb3JtRGF0YSwnc2VuZF9tYWlsLnBocCcpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBsb2FkaW5nLmRpc21pc3MoKTtcbiAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXN1bHQ7XG4gICAgICAgIGlmKHRoaXMucmVzcG9uc2VEYXRhLnN0YXR1cyA9PSAnb2snKXtcbiAgICAgICAgICB0aGlzLnNob3dTZW50ID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnNob3dGb3Jnb3RGYWlsVGV4dCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2hvd0ZvcmdvdEZhaWxUZXh0ID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmZvcmdvdEZhaWxUZXh0ID0gdGhpcy5yZXNwb25zZURhdGEubXNnID09ICdubyB1c2VyJyA/ICdVc3VhcmlvIG5vIGV4aXN0ZScgOiAnRXJyb3IgZGVzY29ub2NpZG8nO1xuICAgICAgICB9XG4gICAgfSwgKGVycikgPT4ge1xuICAgICAgLy8gRXJyb3IgbG9nXG4gICAgICBsb2FkaW5nLmRpc21pc3MoKTtcbiAgICAgIHRoaXMuc2hvd0ZvcmdvdEZhaWxUZXh0ID0gdHJ1ZTtcbiAgICAgIHRoaXMuZm9yZ290RmFpbFRleHQgPSBlcnI7XG4gICAgfSk7XG4gIH1cblxuICBsb2dpblBhZ2UoKXsgdGhpcy5uYXZDdHJsLnNldFJvb3QoTG9naW5QYWdlKTsgfVxuICBzaWdudXBQYWdlKCl7IHRoaXMubmF2Q3RybC5zZXRSb290KFNpZ251cFBhZ2UpOyB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9mb3Jnb3QvZm9yZ290LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcywgTG9hZGluZ0NvbnRyb2xsZXIsIEV2ZW50cyB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25ldHdvcmsnO1xuaW1wb3J0IHsgQXBpU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvaGVscGVyJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuLy9pbXBvcnQgeyBCYXJjb2RlU2Nhbm5lciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmFyY29kZS1zY2FubmVyJztcblxuLy9pbXBvcnQgeyBUb2FzdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdG9hc3QnO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIEFjY291bnRQYWdlIHBhZ2UuXG4gKlxuICogU2VlIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvY29tcG9uZW50cy8jbmF2aWdhdGlvbiBmb3IgbW9yZSBpbmZvIG9uXG4gKiBJb25pYyBwYWdlcyBhbmQgbmF2aWdhdGlvbi5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLWFjY291bnQnLFxuICB0ZW1wbGF0ZVVybDogJ2FjY291bnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFjY291bnRQYWdlIHtcbiAgcHVibGljIGJhbGFuY2VGb3JtIDogRm9ybUdyb3VwO1xuICBwdWJsaWMgYmFsYW5jZSA6IHN0cmluZztcbiAgcHVibGljIHNob3dGb3JtIDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaXNEZXZpY2VPbmxpbmUgOiBib29sZWFuO1xuICBwdWJsaWMgcmVzcG9uc2VEYXRhIDogYW55O1xuICBwdWJsaWMgcGF5UmVzdWx0VGV4dCA6IHN0cmluZztcbiAgcHVibGljIHNob3dQYXltZW50UmVzdWx0VGV4dCA6IGJvb2xlYW47XG4gIHB1YmxpYyB0cmFuc2FjdGlvbnMgOiBhbnk7XG4gIHB1YmxpYyB1c2VySW5mbzogYW55O1xuICBwdWJsaWMgaXRlbXM6IEFycmF5PHtpZDogbnVtYmVyLCB0eXBlOiBzdHJpbmcsIHN0b3JlOiBzdHJpbmcsIHByaWNlOiBzdHJpbmcsIGRhdGU6IHN0cmluZ30+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBuZXR3b3JrOiBOZXR3b3JrLCBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsXG4gICAgcHVibGljIGxvYWRpbmdDdHJsOiBMb2FkaW5nQ29udHJvbGxlciwgcHVibGljIGFwaVNlcnZpY2UgOiBBcGlTZXJ2aWNlUHJvdmlkZXIsIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSwgcHVibGljIGV2ZW50cyA6IEV2ZW50cyxcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSBoZWxwZXI6IEhlbHBlclNlcnZpY2UgLyosIHB1YmxpYyBiYXJjb1NjYW5uZXI6IEJhcmNvZGVTY2FubmVyLCBwcml2YXRlIHRvYXN0OiBUb2FzdCovKSB7XG4gICAgdGhpcy5zaG93UGF5bWVudFJlc3VsdFRleHQgPSBmYWxzZTtcbiAgICB0aGlzLnBheVJlc3VsdFRleHQgPSBcIlwiO1xuXG4gICAgdGhpcy5iYWxhbmNlID0gdGhpcy5oZWxwZXIuYmFsYW5jZTtcbiAgICB0aGlzLmJhbGFuY2VGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgIGFtb3VudDpbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBkaXNjb25uZWN0XG4gICAgdGhpcy5uZXR3b3JrLm9uRGlzY29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBjb25uZWN0aW9uXG4gICAgdGhpcy5uZXR3b3JrLm9uQ29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnVzZXJMb2dnZWRJbktleSkudGhlbigodmFsdWUpPT57XG4gICAgICB0aGlzLnVzZXJJbmZvID0gdmFsdWU7XG4gICAgICB0aGlzLnVwZGF0ZVRyYW5zYWN0aW9ucygpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlVHJhbnNhY3Rpb25zKCl7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHZhciBkYXRhID0geyAndSc6IHRoaXMudXNlckluZm8udXNlcklkLCB0OiAnYnV5JyB9XG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldERhdGEoZGF0YSwgJ3RyYW5zYWN0aW9ucy5waHAnKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICB0aGlzLnRyYW5zYWN0aW9ucyA9IHJlc3VsdDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50cmFuc2FjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gdGhpcy50cmFuc2FjdGlvbnNbaV07XG4gICAgICAgIGxldCB0ZGF0ZSA9IG5ldyBEYXRlKHRyYW5zYWN0aW9uLmRhdGVfY3JlYXRlZCk7XG5cbiAgICAgICAgbGV0IG5hbWUgPSAnJztcbiAgICAgICAgaWYodHJhbnNhY3Rpb24uaW5fbmFtZS5sZW5ndGggPCA3KXtcbiAgICAgICAgICBuYW1lID0gdHJhbnNhY3Rpb24uaW5fbmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIG5hbWUgPSB0cmFuc2FjdGlvbi5pbl9uYW1lLnN1YnN0cigwLCA3KSArICcuLi4nXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHByaWNlRml4ZWQgPSB0cmFuc2FjdGlvbi50cmFuc2FjdGlvbl90eXBlX2lkID09IDMgPyAoJyQnICsgcGFyc2VGbG9hdCh0cmFuc2FjdGlvbi5wcmljZSkudG9GaXhlZCgyKSkgOiAnKCQnICsgcGFyc2VGbG9hdCh0cmFuc2FjdGlvbi5wcmljZSkudG9GaXhlZCgyKSArICcpJztcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICBpZDogdHJhbnNhY3Rpb24uaWQsXG4gICAgICAgICAgdHlwZTogdHJhbnNhY3Rpb24udHJhbnNhY3Rpb25fdHlwZV9pZCA9PSAzID8gJ0QnIDogJ0MnLFxuICAgICAgICAgIHN0b3JlOiB0cmFuc2FjdGlvbi50cmFuc2FjdGlvbl90eXBlX2lkID09IDMgPyAnLS0tLS0tLScgOiBuYW1lLFxuICAgICAgICAgIHByaWNlOiBwcmljZUZpeGVkLFxuICAgICAgICAgIGRhdGU6IHRkYXRlLmdldERhdGUoKSArICctJyArICh0ZGF0ZS5nZXRNb250aCgpICsgMSkgKyAnICcgKyB0ZGF0ZS5nZXRIb3VycygpICsgJzonICsgdGRhdGUuZ2V0TWludXRlcygpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2hvd1BheU1vcmVCYWxhbmNlRm9ybSgpe1xuICAgIHRoaXMuc2hvd0Zvcm0gPSB0cnVlO1xuICB9XG5cbiAgYXR0ZW1wVG9QYXlNb3JlQmFsYW5jZSgpe1xuICAgIGxldCBsb2FkaW5nID0gdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgY29udGVudDogJ0VzcGVyZSB1biBtb21lbnRvLi4uJ1xuICAgIH0pO1xuICAgIGxvYWRpbmcucHJlc2VudCgpO1xuICAgIHRoaXMuc2hvd1BheW1lbnRSZXN1bHRUZXh0ID0gZmFsc2U7XG5cbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy51c2VyTG9nZ2VkSW5LZXkpLnRoZW4odmFsdWUgPT4ge1xuICAgICAgdGhpcy51c2VySW5mbyA9IHZhbHVlO1xuICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2EnLCBwYXJzZUZsb2F0KHRoaXMuYmFsYW5jZUZvcm0udmFsdWUuYW1vdW50KS50b0ZpeGVkKDIpKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgndScsIHRoaXMudXNlckluZm8udXNlcklkKTtcblxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnBvc3REYXRhKGZvcm1EYXRhLCAncGF5bW9yZWJhbGFuY2UucGhwJykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIHRoaXMucmVzcG9uc2VEYXRhID0gcmVzdWx0O1xuICAgICAgICAgIHRoaXMuc2hvd1BheW1lbnRSZXN1bHRUZXh0ID0gdHJ1ZTtcblxuICAgICAgICAgIGxvYWRpbmcuZGlzbWlzcygpO1xuICAgICAgICAgIGlmICh0aGlzLnJlc3BvbnNlRGF0YS5zdGF0dXMgPT0gXCJva1wiKSB7XG4gICAgICAgICAgICB2YXIgYmFsYW5jZVZhbCA9ICckJyArIHBhcnNlRmxvYXQodGhpcy5yZXNwb25zZURhdGEuYmFsYW5jZSkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgIHRoaXMucGF5UmVzdWx0VGV4dCA9ICdTdSB0cmFuc2FjY2lvbiBzZSBoYSBoZWNobyBjb24gZXhpdG8uXFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU3UgbnVldm8gc2FsZG8gZXMgJyArIGJhbGFuY2VWYWw7XG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKCdzZXRCYWxhbmNlJywgYmFsYW5jZVZhbCk7XG4gICAgICAgICAgICB0aGlzLmJhbGFuY2UgPSBiYWxhbmNlVmFsO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUcmFuc2FjdGlvbnMoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgdGhpcy5wYXlSZXN1bHRUZXh0ID0gdGhpcy5yZXNwb25zZURhdGEubXNnO1xuICAgICAgICAgIH1cbiAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICBsb2FkaW5nLmRpc21pc3MoKTtcbiAgICAgICAgICB0aGlzLnNob3dQYXltZW50UmVzdWx0VGV4dCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5wYXlSZXN1bHRUZXh0ID0gJ0hhIG9jdXJyaWRvIHVuIGVycm9yOiAnICsgZXJyLnN0YXR1cztcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvYWNjb3VudC9hY2NvdW50LnRzIiwiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F0Y2hlZCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gMTI4O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvZXNtNSBsYXp5XG4vLyBtb2R1bGUgaWQgPSAxMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F0Y2hlZCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gMTcxO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjIGxhenlcbi8vIG1vZHVsZSBpZCA9IDE3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcywgRXZlbnRzLCBQbGF0Zm9ybSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgUVJTY2FubmVyLCBRUlNjYW5uZXJTdGF0dXMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3FyLXNjYW5uZXInO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9oZWxwZXInO1xuaW1wb3J0IHsgVG9hc3QgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3RvYXN0JztcblxuaW1wb3J0IHsgUGF5bWVudFBhZ2UgfSBmcm9tICcuLi9wYXltZW50L3BheW1lbnQnO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIFNjYW5uZXJQYWdlIHBhZ2UuXG4gKlxuICogU2VlIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvY29tcG9uZW50cy8jbmF2aWdhdGlvbiBmb3IgbW9yZSBpbmZvIG9uXG4gKiBJb25pYyBwYWdlcyBhbmQgbmF2aWdhdGlvbi5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLXNjYW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJ3NjYW5uZXIuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNjYW5uZXJQYWdlIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwcml2YXRlIHFyU2Nhbm5lcjogUVJTY2FubmVyLFxuICAgIHB1YmxpYyBoZWxwZXIgOiBIZWxwZXJTZXJ2aWNlLCBwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtLCBwdWJsaWMgZXZlbnRzIDogRXZlbnRzLCBwcml2YXRlIHRvYXN0OiBUb2FzdCkge1xuXG4gIH1cblxuICBpb25WaWV3RGlkTG9hZCgpIHtcbiAgICAvLyBPcHRpb25hbGx5IHJlcXVlc3QgdGhlIHBlcm1pc3Npb24gZWFybHlcbiAgICB0aGlzLnFyU2Nhbm5lci5wcmVwYXJlKClcbiAgICAgICAgLnRoZW4oKHN0YXR1czogUVJTY2FubmVyU3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgaWYgKHN0YXR1cy5hdXRob3JpemVkKSB7XG4gICAgICAgICAgICAgICAvLyBjYW1lcmEgcGVybWlzc2lvbiB3YXMgZ3JhbnRlZFxuXG5cbiAgICAgICAgICAgICAgIC8vIHN0YXJ0IHNjYW5uaW5nXG4gICAgICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1hcHAnKS5jbGFzc0xpc3QuYWRkKCdzY2FubmVyX2JnJyk7XG4gICAgICAgICAgICAgICAgbGV0IHNjYW5TdWIgPSB0aGlzLnFyU2Nhbm5lci5zY2FuKCkuc3Vic2NyaWJlKCh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8tIHRleHQgZGViZSB0ZW5lciB1biBqc29uIGNvbiBlbCBpZCBkZSBsYSB0aWVuZGEgeSBlbCBub21icmVcblxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBzY2FuSW5mbyA9IEpTT04ucGFyc2UodGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWxwZXIuc3RvcmVOYW1lID0gc2NhbkluZm8uc3RvcmU7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWxwZXIuc3RvcmVJZCA9IHNjYW5JbmZvLnN0b3JlSWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnFyU2Nhbm5lci5oaWRlKCk7IC8vIGhpZGUgY2FtZXJhIHByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgICBzY2FuU3ViLnVuc3Vic2NyaWJlKCk7IC8vIHN0b3Agc2Nhbm5pbmdcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdkN0cmwucHVzaChQYXltZW50UGFnZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucGxhdGZvcm0uaXMoJ2NvcmRvdmEnKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvYXN0LnNob3coJ0hhIG9jdXJyaWRvIHVuIGVycm9yLiBJbnRlbnRlIG51ZXZhbWVudGUgKCcrZSsnKScsICc1MDAwJywgJ2NlbnRlcicpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdkN0cmwucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0hhIG9jdXJyaWRvIHVuIGVycm9yLiBJbnRlbnRlIG51ZXZhbWVudGUgKCcrZSsnKScpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cy5kZW5pZWQpIHtcbiAgICAgICAgICAgICAgIC8vIGNhbWVyYSBwZXJtaXNzaW9uIHdhcyBwZXJtYW5lbnRseSBkZW5pZWRcbiAgICAgICAgICAgICAgIC8vIHlvdSBtdXN0IHVzZSBRUlNjYW5uZXIub3BlblNldHRpbmdzKCkgbWV0aG9kIHRvIGd1aWRlIHRoZSB1c2VyIHRvIHRoZSBzZXR0aW5ncyBwYWdlXG4gICAgICAgICAgICAgICAvLyB0aGVuIHRoZXkgY2FuIGdyYW50IHRoZSBwZXJtaXNzaW9uIGZyb20gdGhlcmVcbiAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgLy8gcGVybWlzc2lvbiB3YXMgZGVuaWVkLCBidXQgbm90IHBlcm1hbmVudGx5LiBZb3UgY2FuIGFzayBmb3IgcGVybWlzc2lvbiBhZ2FpbiBhdCBhIGxhdGVyIHRpbWUuXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIHRoaXMucXJTY2FubmVyLnNob3coKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZTogYW55KSA9PiB7XG4gICAgICBpZih0aGlzLnBsYXRmb3JtLmlzKCdjb3Jkb3ZhJykpe1xuICAgICAgICB0aGlzLnRvYXN0LnNob3coJ0hhIG9jdXJyaWRvIHVuIGVycm9yLiBJbnRlbnRlIG51ZXZhbWVudGUgKCcrZSsnKScsICcxMDAwMCcsICdjZW50ZXInKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL3NjYW5uZXIvc2Nhbm5lci50cyIsImltcG9ydCB7IENvbXBvbmVudCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vL2ltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9iYXJjb2RlLXNjYW5uZXInO1xuaW1wb3J0IHsgVG9hc3QgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3RvYXN0JztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcywgTG9hZGluZ0NvbnRyb2xsZXIsIEV2ZW50cywgUGxhdGZvcm0gfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yayc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuaW1wb3J0IHsgQXBpU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2FwaS1zZXJ2aWNlL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvaGVscGVyJztcbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSAnLi4vaG9tZS9ob21lJztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBQYXltZW50UGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1wYXltZW50JyxcbiAgdGVtcGxhdGVVcmw6ICdwYXltZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50UGFnZSB7XG4gIHByaXZhdGUgcGF5IDogRm9ybUdyb3VwO1xuICBwdWJsaWMgaXNEZXZpY2VPbmxpbmUgOiBib29sZWFuO1xuICBwdWJsaWMgc2hvd1BheW1lbnRGYWlsVGV4dCA6IGJvb2xlYW47XG4gIHB1YmxpYyBwYXlGYWlsVGV4dCA6IHN0cmluZztcbiAgcHVibGljIHN0b3JlTmFtZSA6IHN0cmluZztcbiAgcHVibGljIHN0b3JlSWQgOiBzdHJpbmc7XG4gIHB1YmxpYyByZXNwb25zZURhdGEgOiBhbnk7XG4gIHB1YmxpYyBjbGluZXRzOiBhbnlbXSA9IFtdO1xuICBwdWJsaWMgc2VsZWN0ZWRDbGllbnQ6IGFueTtcbiAgcHVibGljIGNsaWVudEZvdW5kOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBwYWlkIDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgdXNlckluZm86IGFueTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlLCBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsIHByaXZhdGUgbmV0d29yazogTmV0d29yaywgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSB0b2FzdDogVG9hc3QsIHB1YmxpYyBsb2FkaW5nQ3RybDogTG9hZGluZ0NvbnRyb2xsZXIsIHB1YmxpYyBhcGlTZXJ2aWNlIDogQXBpU2VydmljZVByb3ZpZGVyLCBwdWJsaWMgZXZlbnRzIDogRXZlbnRzLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLCBwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtLCBwdWJsaWMgaGVscGVyIDogSGVscGVyU2VydmljZS8qcHJpdmF0ZSBiYXJjb2RlU2Nhbm5lcjogQmFyY29kZVNjYW5uZXIsKi8pIHtcbiAgICB0aGlzLnBheSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICBwcmljZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgcXR5OiBbJzEnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgZGlzY29ubmVjdFxuICAgIHRoaXMubmV0d29yay5vbkRpc2Nvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgY29ubmVjdGlvblxuICAgIHRoaXMubmV0d29yay5vbkNvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5zdG9yZU5hbWUgPSBcIkN1YWwgZXMgbGEgY2FudGlkYWQgZGUgc3UgdHJhbnNhY2Npb24gY29uIFwiICsgaGVscGVyLnN0b3JlTmFtZSArIFwiP1wiO1xuICAgIC8qdGhpcy5zZWxlY3RlZENsaWVudCA9IHt9O1xuICAgIHRoaXMuYmFyY29kZVNjYW5uZXIuc2NhbigpLnRoZW4oKGJhcmNvZGVEYXRhKSA9PiB7XG4gICAgICAgIC8vLSB0ZXh0IGRlYmUgdGVuZXIgdW4ganNvbiBjb24gZWwgaWQgZGUgbGEgdGllbmRhIHkgZWwgbm9tYnJlXG4gICAgICAgIHZhciBzY2FuSW5mbyA9IEpTT04ucGFyc2UoYmFyY29kZURhdGEudGV4dCk7XG4gICAgICAgIHRoaXMuc3RvcmVOYW1lID0gc2NhbkluZm8uc3RvcmU7XG4gICAgICAgIHRoaXMuc3RvcmVJZCA9IHNjYW5JbmZvLnN0b3JlSWQ7XG4gICAgfSwgKGVycikgPT4ge1xuICAgICAgICB0aGlzLnRvYXN0LnNob3coZXJyLCAnNTAwMCcsICdjZW50ZXInKS5zdWJzY3JpYmUoXG4gICAgICAgICAgdG9hc3QgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9hc3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9KTsqL1xuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ2lvblZpZXdEaWRMb2FkIFBheW1lbnRQYWdlJyk7XG4gIH1cblxuICBnb0JhY2soKXtcbiAgICB0aGlzLm5hdkN0cmwuc2V0Um9vdChIb21lUGFnZSk7XG4gICAgdGhpcy5uYXZDdHJsLnBvcFRvUm9vdCgpO1xuICB9XG5cbiAgYXR0ZW1wVG9QYXkoKXtcbiAgICB0aGlzLnNob3dQYXltZW50RmFpbFRleHQgPSBmYWxzZTtcbiAgICBsZXQgbG9hZGluZyA9IHRoaXMubG9hZGluZ0N0cmwuY3JlYXRlKHtcbiAgICAgIGNvbnRlbnQ6ICdFc3BlcmUgdW4gbW9tZW50by4uLidcbiAgICB9KTtcbiAgICBsb2FkaW5nLnByZXNlbnQoKTtcblxuICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnVzZXJMb2dnZWRJbktleSkudGhlbih2YWx1ZSA9PiB7XG4gICAgICB0aGlzLnVzZXJJbmZvID0gdmFsdWU7XG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3AnLCB0aGlzLnBheS52YWx1ZS5wcmljZSk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncScsICcxJyk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYycsIFN0cmluZyh0aGlzLmhlbHBlci5zdG9yZUlkKSk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndScsIHRoaXMudXNlckluZm8udXNlcklkKTtcblxuICAgICAgICAvLy0gYWwgaGFjZXIgc3VibWl0IGRlYmUgZGUgY29ycmVyIGFwaSBwYXJhIGRlc2NvbnRhciBjYW50aWRhZCBlbiAkJCBkZSBsYSBjdWVudGEgZGVsIHVzdXNhcmlvIGxvZ3VlYWRvXG4gICAgICAgIHRoaXMuYXBpU2VydmljZS5wb3N0RGF0YShmb3JtRGF0YSwgJ3BheWJpbGwucGhwJykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgbG9hZGluZy5kaXNtaXNzKCk7XG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNlRGF0YSA9IHJlc3VsdDtcbiAgICAgICAgICAgIHRoaXMucGFpZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5yZXNwb25zZURhdGEuc3RhdHVzID09IFwib2tcIikge1xuICAgICAgICAgICAgICAgIHZhciB0b3RhbCA9IHRoaXMucGF5LnZhbHVlLnF0eSAqIHRoaXMucGF5LnZhbHVlLnByaWNlO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMucGxhdGZvcm0uaXMoJ2NvcmRvdmEnKSl7XG4gICAgICAgICAgICAgICAgICB0aGlzLnRvYXN0LnNob3coJ1N1IHRyYW5zYWNjaW9uIHBvciAkJyArIHRvdGFsICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnIGEgJyArIHRoaXMuaGVscGVyLnN0b3JlTmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyBzZSBoYSBoZWNobyBjb24gZXhpdG8uXFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1N1IHNhbGRvIHJlc3RhbnRlIGVzIGRlICQnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZURhdGEuYmFsYW5jZSwgJzE1MDAwJywgJ2NlbnRlcicpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goXCJzZXRCYWxhbmNlXCIsICckJyArIHBhcnNlRmxvYXQodGhpcy5yZXNwb25zZURhdGEuYmFsYW5jZSkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZDdHJsLnNldFJvb3QoSG9tZVBhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2Q3RybC5wb3BUb1Jvb3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BheW1lbnRGYWlsVGV4dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICB0aGlzLnBheUZhaWxUZXh0ID0gJ1N1IHRyYW5zYWNjaW9uIHBvciAkJyArIHRvdGFsICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnIGEgJyArIHRoaXMuaGVscGVyLnN0b3JlTmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyBzZSBoYSBoZWNobyBjb24gZXhpdG8uXFxuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1N1IHNhbGRvIHJlc3RhbnRlIGVzIGRlICQnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZURhdGEuYmFsYW5jZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHMucHVibGlzaCgnc2V0QmFsYW5jZScsICckJyArIHBhcnNlRmxvYXQodGhpcy5yZXNwb25zZURhdGEuYmFsYW5jZSkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zaG93UGF5bWVudEZhaWxUZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhpcy5wYXlGYWlsVGV4dCA9IHRoaXMucmVzcG9uc2VEYXRhLm1zZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgKGVycikgPT4ge1xuICAgICAgICAgIGxvYWRpbmcuZGlzbWlzcygpO1xuICAgICAgICAgIHRoaXMucGFpZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zaG93UGF5bWVudEZhaWxUZXh0ID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnBheUZhaWxUZXh0ID0gJ2Vycm9yJztcbiAgICAgIH0pO1xuICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgbG9hZGluZy5kaXNtaXNzKCk7XG4gICAgICAgIHRoaXMucGFpZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hvd1BheW1lbnRGYWlsVGV4dCA9IHRydWU7XG4gICAgICAgIHRoaXMucGF5RmFpbFRleHQgPSBlcnIubXNnO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvcGF5bWVudC9wYXltZW50LnRzIiwiZXhwb3J0IHZhciBDb25zdGFudHMgPSB7XHJcbiAgICBBUElfRU5EUE9JTlQgOiAnaHR0cHM6Ly93d3cuZXNmZXJhc29sdWNpb25lcy5jb20vYXBpL3BheW1lbnQvYXBpLycsXHJcbiAgICBMT0NBTF9BUElfRU5EUE9JTlQ6ICdodHRwOi8vbG9jYWxob3N0OjgwOTkvJyxcclxuICAgIHVzZXJMb2dnZWRJbktleSA6ICd1c2VyTG9nZ2VkSW4nLFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL2NvbnN0YW50cy50cyIsImltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC5tb2R1bGUnO1xuXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21haW4udHMiLCJpbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBFcnJvckhhbmRsZXIsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJb25pY1N0b3JhZ2VNb2R1bGUgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5pbXBvcnQgeyBJb25pY0FwcCwgSW9uaWNFcnJvckhhbmRsZXIsIElvbmljTW9kdWxlIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBGYWNlYm9vayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmFjZWJvb2svbmd4JztcbmltcG9ydCB7IFFSU2Nhbm5lciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvcXItc2Nhbm5lcic7XG5cbmltcG9ydCB7IFRvYXN0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS90b2FzdCc7XG5cbmltcG9ydCB7IE15QXBwIH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSAnLi4vcGFnZXMvaG9tZS9ob21lJztcbmltcG9ydCB7IExpc3RQYWdlIH0gZnJvbSAnLi4vcGFnZXMvbGlzdC9saXN0JztcbmltcG9ydCB7IExvZ2luUGFnZSB9IGZyb20gJy4uL3BhZ2VzL2xvZ2luL2xvZ2luJztcbmltcG9ydCB7IFNpZ251cFBhZ2UgfSBmcm9tICcuLi9wYWdlcy9zaWdudXAvc2lnbnVwJztcbmltcG9ydCB7IEZvcmdvdFBhZ2UgfSBmcm9tICcuLi9wYWdlcy9mb3Jnb3QvZm9yZ290JztcbmltcG9ydCB7IEFjY291bnRQYWdlIH0gZnJvbSAnLi4vcGFnZXMvYWNjb3VudC9hY2NvdW50JztcbmltcG9ydCB7IFBheW1lbnRQYWdlIH0gZnJvbSAnLi4vcGFnZXMvcGF5bWVudC9wYXltZW50JztcbmltcG9ydCB7IFNjYW5uZXJQYWdlIH0gZnJvbSAnLi4vcGFnZXMvc2Nhbm5lci9zY2FubmVyJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uc1BhZ2UgfSBmcm9tICcuLi9wYWdlcy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25zJztcblxuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zdGF0dXMtYmFyJztcbmltcG9ydCB7IFNwbGFzaFNjcmVlbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3BsYXNoLXNjcmVlbic7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2hlbHBlcic7XG5pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZXR3b3JrJztcbmltcG9ydCB7IEFwaVNlcnZpY2VQcm92aWRlciB9IGZyb20gJy4uL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmd4UVJDb2RlTW9kdWxlIH0gZnJvbSAnbmd4LXFyY29kZTInO1xuaW1wb3J0IHsgTkZDLCBOZGVmIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZmMnO1xuLy9pbXBvcnQgeyBCYXJjb2RlU2Nhbm5lciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmFyY29kZS1zY2FubmVyJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTXlBcHAsXG4gICAgSG9tZVBhZ2UsXG4gICAgTGlzdFBhZ2UsXG4gICAgTG9naW5QYWdlLFxuICAgIFNpZ251cFBhZ2UsXG4gICAgRm9yZ290UGFnZSxcbiAgICBBY2NvdW50UGFnZSxcbiAgICBQYXltZW50UGFnZSxcbiAgICBTY2FubmVyUGFnZSxcbiAgICBUcmFuc2FjdGlvbnNQYWdlXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLmZvclJvb3QoTXlBcHApLFxuICAgIElvbmljU3RvcmFnZU1vZHVsZS5mb3JSb290KCksXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBOZ3hRUkNvZGVNb2R1bGVcbiAgXSxcbiAgYm9vdHN0cmFwOiBbSW9uaWNBcHBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBNeUFwcCxcbiAgICBIb21lUGFnZSxcbiAgICBMaXN0UGFnZSxcbiAgICBMb2dpblBhZ2UsXG4gICAgU2lnbnVwUGFnZSxcbiAgICBGb3Jnb3RQYWdlLFxuICAgIEFjY291bnRQYWdlLFxuICAgIFBheW1lbnRQYWdlLFxuICAgIFNjYW5uZXJQYWdlLFxuICAgIFRyYW5zYWN0aW9uc1BhZ2VcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgU3RhdHVzQmFyLFxuICAgIFNwbGFzaFNjcmVlbixcbiAgICBIZWxwZXJTZXJ2aWNlLFxuICAgIE5ldHdvcmssXG4gICAgRmFjZWJvb2ssXG4gICAge3Byb3ZpZGU6IEVycm9ySGFuZGxlciwgdXNlQ2xhc3M6IElvbmljRXJyb3JIYW5kbGVyfSxcbiAgICBBcGlTZXJ2aWNlUHJvdmlkZXIsXG4gICAgUVJTY2FubmVyLFxuICAgIFRvYXN0LFxuICAgIE5GQyxcbiAgICBOZGVmXG4gICAgLy9CYXJjb2RlU2Nhbm5lclxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAubW9kdWxlLnRzIiwiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuXG4vKlxuICBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBBcGlTZXJ2aWNlUHJvdmlkZXIgcHJvdmlkZXIuXG5cbiAgU2VlIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9kZXBlbmRlbmN5LWluamVjdGlvbiBmb3IgbW9yZSBpbmZvIG9uIHByb3ZpZGVyc1xuICBhbmQgQW5ndWxhciBESS5cbiovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZVByb3ZpZGVyIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cENsaWVudCwgcHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybSkge1xuICAgIGNvbnNvbGUubG9nKCdIZWxsbyBBcGlTZXJ2aWNlUHJvdmlkZXIgUHJvdmlkZXInKTtcbiAgfVxuXG4gIHBvc3REYXRhKGRhdGEsIHVybCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgZW5kcG9pbnQgPSBDb25zdGFudHMuQVBJX0VORFBPSU5UO1xuICAgICAgaWYoIXRoaXMucGxhdGZvcm0uaXMoJ2NvcmRvdmEnKSl7XG4gICAgICAgIGVuZHBvaW50ID0gQ29uc3RhbnRzLkxPQ0FMX0FQSV9FTkRQT0lOVDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5odHRwLnBvc3QoZW5kcG9pbnQgKyB1cmwsIGRhdGEpXG4gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXREYXRhKGRhdGEsIHVybCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHZhciBzdHIgPSBbXTtcbiAgICAgIGZvciAodmFyIHAgaW4gZGF0YSl7XG4gICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgICAgc3RyLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KHApICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtwXSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBlbmRwb2ludCA9IENvbnN0YW50cy5BUElfRU5EUE9JTlQ7XG4gICAgICBpZighdGhpcy5wbGF0Zm9ybS5pcygnY29yZG92YScpKXtcbiAgICAgICAgZW5kcG9pbnQgPSBDb25zdGFudHMuTE9DQUxfQVBJX0VORFBPSU5UO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmh0dHAuZ2V0KGVuZHBvaW50ICsgdXJsKyc/JytzdHIuam9pbihcIiZcIikpXG4gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcblxyXG5leHBvcnQgY2xhc3MgSGVscGVyU2VydmljZSB7XHJcbiAgICBwdWJsaWMgYmFsYW5jZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHN0b3JlTmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHN0b3JlSWQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2Upe1xyXG4gICAgICAgIHRoaXMuYmFsYW5jZSA9ICctLS0tJztcclxuICAgIH1cclxuXHJcbiAgICBzZXRCYWxhbmNlKGFjdHVhbEJhbGFuY2Upe1xyXG4gICAgICAgIHRoaXMuYmFsYW5jZSA9IGFjdHVhbEJhbGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RvcmVJbmZvKGFjdHVhbFN0b3JlTmFtZSwgYWN0dWFsU3RvcmVJZCl7XHJcbiAgICAgICAgdGhpcy5zdG9yZU5hbWUgPSBhY3R1YWxTdG9yZU5hbWU7XHJcbiAgICAgICAgdGhpcy5zdG9yZUlkID0gYWN0dWFsU3RvcmVJZDtcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQoKXtcclxuICAgICAgICB0aGlzLmJhbGFuY2UgPSAnLS0tLSc7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChDb25zdGFudHMudXNlckxvZ2dlZEluS2V5LCBudWxsKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm92aWRlcnMvaGVscGVyLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdiwgUGxhdGZvcm0sIExvYWRpbmdDb250cm9sbGVyLCBFdmVudHMgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3RhdHVzLWJhcic7XG5pbXBvcnQgeyBTcGxhc2hTY3JlZW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NwbGFzaC1zY3JlZW4nO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUHJvdmlkZXIgfSBmcm9tICcuLi9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uL3Byb3ZpZGVycy9oZWxwZXInO1xuXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4uL3BhZ2VzL2hvbWUvaG9tZSc7XG5pbXBvcnQgeyBBY2NvdW50UGFnZSB9IGZyb20gJy4uL3BhZ2VzL2FjY291bnQvYWNjb3VudCc7XG5pbXBvcnQgeyBMb2dpblBhZ2UgfSBmcm9tICcuLi9wYWdlcy9sb2dpbi9sb2dpbic7XG5pbXBvcnQgeyBTaWdudXBQYWdlIH0gZnJvbSAnLi4vcGFnZXMvc2lnbnVwL3NpZ251cCc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJ2FwcC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIE15QXBwIHtcbiAgQFZpZXdDaGlsZChOYXYpIG5hdjogTmF2O1xuXG4gIHJvb3RQYWdlOiBhbnkgPSBIb21lUGFnZTtcbiAgdXNlckluZm86IGFueTtcbiAgcmVzcG9uc2VEYXRhOmFueTtcblxuICBwYWdlczogQXJyYXk8e3RpdGxlOiBzdHJpbmcsIGNvbXBvbmVudDogYW55LCB0eXBlOiBzdHJpbmcsIGljb246IHN0cmluZ30+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwbGF0Zm9ybTogUGxhdGZvcm0sIHB1YmxpYyBzdGF0dXNCYXI6IFN0YXR1c0JhciwgcHVibGljIHNwbGFzaFNjcmVlbjogU3BsYXNoU2NyZWVuLCBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UsXG4gICAgcHVibGljIGFwaVNlcnZpY2UgOiBBcGlTZXJ2aWNlUHJvdmlkZXIsIHB1YmxpYyBsb2FkaW5nQ3RybDogTG9hZGluZ0NvbnRyb2xsZXIsIHB1YmxpYyBldmVudHMgOiBFdmVudHMsIHB1YmxpYyBoZWxwZXIgOiBIZWxwZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy5pbml0aWFsaXplQXBwKCk7XG5cbiAgICB0aGlzLnBhZ2VzID0gW1xuICAgICAgeyB0aXRsZTogJ0hvbWUnLCBjb21wb25lbnQ6IEhvbWVQYWdlLCB0eXBlOiAncm9vdCcsIGljb246ICcnIH0sXG4gICAgICB7IHRpdGxlOiAnTWkgY3VlbnRhJywgY29tcG9uZW50OiBBY2NvdW50UGFnZSwgdHlwZTogJ3B1c2gnLCBpY29uOiAnJyB9LFxuICAgICAgeyB0aXRsZTogJ1BlcmZpbCcsIGNvbXBvbmVudDogU2lnbnVwUGFnZSwgdHlwZTogJ3Jvb3QnLCBpY29uOiAnJyB9LFxuICAgICAgeyB0aXRsZTogJ0xvZ291dCcsIGNvbXBvbmVudDogbnVsbCwgdHlwZTogJ2xvZ291dCcsIGljb246ICdsb2ctb3V0JyB9XG4gICAgXTtcblxuICAgIHBsYXRmb3JtLnJlYWR5KCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoQ29uc3RhbnRzLnVzZXJMb2dnZWRJbktleSkudGhlbigodmFsdWUpPT57XG4gICAgICAgICAgaWYodmFsdWUgPT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLm5hdi5zZXRSb290KExvZ2luUGFnZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICBsZXQgbG9hZGluZyA9IHRoaXMubG9hZGluZ0N0cmwuY3JlYXRlKHtcbiAgICAgICAgICAgICAgY29udGVudDogJ0VzcGVyZSB1biBtb21lbnRvLi4uJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsb2FkaW5nLnByZXNlbnQoKTtcbiAgICAgICAgICAgIHRoaXMudXNlckluZm8gPSB2YWx1ZTtcbiAgICAgICAgICAgIHZhciBkYXRhID0geyAnaWQnOiB0aGlzLnVzZXJJbmZvLnVzZXJJZCwgJ3R5cGUnOiAndXNlcicgfVxuICAgICAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLmdldERhdGEoZGF0YSwgJ3VzZXJzLnBocCcpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgbG9hZGluZy5kaXNtaXNzKCk7XG4gICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VEYXRhID0gcmVzdWx0O1xuICAgICAgICAgICAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKFwic2V0QmFsYW5jZVwiLCAnJCcgKyBwYXJzZUZsb2F0KHRoaXMucmVzcG9uc2VEYXRhLnVzZXIuYW1vdW50KS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgIH0sIGVyciA9PiB7XG4gICAgICAgICAgICAgIGxvYWRpbmcuZGlzbWlzcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIHRoaXMubmF2LnNldFJvb3QoTG9naW5QYWdlKTtcbiAgICAgICAgfSk7O1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUFwcCgpIHtcbiAgICB0aGlzLnBsYXRmb3JtLnJlYWR5KCkudGhlbigoKSA9PiB7XG4gICAgICAvLyBPa2F5LCBzbyB0aGUgcGxhdGZvcm0gaXMgcmVhZHkgYW5kIG91ciBwbHVnaW5zIGFyZSBhdmFpbGFibGUuXG4gICAgICAvLyBIZXJlIHlvdSBjYW4gZG8gYW55IGhpZ2hlciBsZXZlbCBuYXRpdmUgdGhpbmdzIHlvdSBtaWdodCBuZWVkLlxuICAgICAgdGhpcy5zdGF0dXNCYXIuc3R5bGVEZWZhdWx0KCk7XG4gICAgICB0aGlzLnNwbGFzaFNjcmVlbi5oaWRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuUGFnZShwYWdlKSB7XG4gICAgLy8gUmVzZXQgdGhlIGNvbnRlbnQgbmF2IHRvIGhhdmUganVzdCB0aGlzIHBhZ2VcbiAgICAvLyB3ZSB3b3VsZG4ndCB3YW50IHRoZSBiYWNrIGJ1dHRvbiB0byBzaG93IGluIHRoaXMgc2NlbmFyaW9cbiAgICBpZihwYWdlLnR5cGUgPT0gJ2xvZ291dCcpXG4gICAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKCdsb2dvdXQnKTtcbiAgICBlbHNlIGlmKHBhZ2UudHlwZSA9PSAncm9vdCcpXG4gICAgICB0aGlzLm5hdi5zZXRSb290KHBhZ2UuY29tcG9uZW50KTtcbiAgICBlbHNlXG4gICAgICB0aGlzLm5hdi5wdXNoKHBhZ2UuY29tcG9uZW50KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICdsaXN0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIExpc3RQYWdlIHtcbiAgc2VsZWN0ZWRJdGVtOiBhbnk7XG4gIGljb25zOiBzdHJpbmdbXTtcbiAgaXRlbXM6IEFycmF5PHt0aXRsZTogc3RyaW5nLCBub3RlOiBzdHJpbmcsIGljb246IHN0cmluZ30+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMpIHtcbiAgICAvLyBJZiB3ZSBuYXZpZ2F0ZWQgdG8gdGhpcyBwYWdlLCB3ZSB3aWxsIGhhdmUgYW4gaXRlbSBhdmFpbGFibGUgYXMgYSBuYXYgcGFyYW1cbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG5hdlBhcmFtcy5nZXQoJ2l0ZW0nKTtcblxuICAgIC8vIExldCdzIHBvcHVsYXRlIHRoaXMgcGFnZSB3aXRoIHNvbWUgZmlsbGVyIGNvbnRlbnQgZm9yIGZ1bnppZXNcbiAgICB0aGlzLmljb25zID0gWydmbGFzaycsICd3aWZpJywgJ2JlZXInLCAnZm9vdGJhbGwnLCAnYmFza2V0YmFsbCcsICdwYXBlci1wbGFuZScsXG4gICAgJ2FtZXJpY2FuLWZvb3RiYWxsJywgJ2JvYXQnLCAnYmx1ZXRvb3RoJywgJ2J1aWxkJ107XG5cbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMTsgaSsrKSB7XG4gICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICB0aXRsZTogJ0l0ZW0gJyArIGksXG4gICAgICAgIG5vdGU6ICdUaGlzIGlzIGl0ZW0gIycgKyBpLFxuICAgICAgICBpY29uOiB0aGlzLmljb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuaWNvbnMubGVuZ3RoKV1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGl0ZW1UYXBwZWQoZXZlbnQsIGl0ZW0pIHtcbiAgICAvLyBUaGF0J3MgcmlnaHQsIHdlJ3JlIHB1c2hpbmcgdG8gb3Vyc2VsdmVzIVxuICAgIHRoaXMubmF2Q3RybC5wdXNoKExpc3RQYWdlLCB7XG4gICAgICBpdGVtOiBpdGVtXG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9saXN0L2xpc3QudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgTmF2UGFyYW1zIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UnO1xuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yayc7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJztcbmltcG9ydCB7IEhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvaGVscGVyJztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBUcmFuc2FjdGlvbnNQYWdlIHBhZ2UuXG4gKlxuICogU2VlIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvY29tcG9uZW50cy8jbmF2aWdhdGlvbiBmb3IgbW9yZSBpbmZvIG9uXG4gKiBJb25pYyBwYWdlcyBhbmQgbmF2aWdhdGlvbi5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLXRyYW5zYWN0aW9ucycsXG4gIHRlbXBsYXRlVXJsOiAndHJhbnNhY3Rpb25zLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2FjdGlvbnNQYWdlIHtcbiAgcHVibGljIGlzRGV2aWNlT25saW5lIDogYm9vbGVhbjtcbiAgcHVibGljIGJhbGFuY2UgOiBzdHJpbmc7XG4gIHB1YmxpYyB0cmFuc2FjdGlvbnMgOiBhbnk7XG4gIHB1YmxpYyB1c2VySW5mbzogYW55O1xuICBwdWJsaWMgaXRlbXM6IEFycmF5PHtpZDogbnVtYmVyLCB1c2VyOiBzdHJpbmcsIHByaWNlOiBzdHJpbmcsIGRhdGU6IHN0cmluZ30+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYXZDdHJsOiBOYXZDb250cm9sbGVyLCBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UsIHB1YmxpYyBhcGlTZXJ2aWNlIDogQXBpU2VydmljZVByb3ZpZGVyLCBcbiAgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zLCBwcml2YXRlIHpvbmU6IE5nWm9uZSwgcHJpdmF0ZSBuZXR3b3JrOiBOZXR3b3JrLCBwcml2YXRlIGhlbHBlcjogSGVscGVyU2VydmljZSkge1xuICAgIFxuICAgIHRoaXMuYmFsYW5jZSA9IHRoaXMuaGVscGVyLmJhbGFuY2U7XG4gICAgXG4gICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBkaXNjb25uZWN0XG4gICAgdGhpcy5uZXR3b3JrLm9uRGlzY29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBjb25uZWN0aW9uXG4gICAgdGhpcy5uZXR3b3JrLm9uQ29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy51c2VyTG9nZ2VkSW5LZXkpLnRoZW4oKHZhbHVlKT0+e1xuICAgICAgdGhpcy51c2VySW5mbyA9IHZhbHVlO1xuICAgICAgdmFyIGRhdGEgPSB7ICd1JzogdGhpcy51c2VySW5mby51c2VySWQsIHR5cGU6ICdzZWxsJyB9XG4gICAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0RGF0YShkYXRhLCAndHJhbnNhY3Rpb25zLnBocCcpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbnMgPSByZXN1bHQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50cmFuc2FjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSB0aGlzLnRyYW5zYWN0aW9uc1tpXTtcbiAgICAgICAgICBsZXQgdGRhdGUgPSBuZXcgRGF0ZSh0cmFuc2FjdGlvbi5kYXRlX2NyZWF0ZWQpO1xuICAgICAgICAgIFxuICAgICAgICAgIGxldCBuYW1lID0gJyc7XG4gICAgICAgICAgaWYodHJhbnNhY3Rpb24ub3V0X25hbWUubGVuZ3RoIDwgMTApe1xuICAgICAgICAgICAgbmFtZSA9IHRyYW5zYWN0aW9uLm91dF9uYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgbmFtZSA9IHRyYW5zYWN0aW9uLm91dF9uYW1lLnN1YnN0cigwLCAxMCkgKyAnLi4uJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgcHJpY2VGaXhlZCA9ICckJyArIHBhcnNlRmxvYXQodHJhbnNhY3Rpb24ucHJpY2UpLnRvRml4ZWQoMik7XG4gICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiB0cmFuc2FjdGlvbi5pZCxcbiAgICAgICAgICAgIHVzZXI6IG5hbWUsXG4gICAgICAgICAgICBwcmljZTogcHJpY2VGaXhlZCxcbiAgICAgICAgICAgIGRhdGU6IHRkYXRlLmdldERhdGUoKSArICctJyArICh0ZGF0ZS5nZXRNb250aCgpICsgMSkgKyAnICcgKyB0ZGF0ZS5nZXRIb3VycygpICsgJzonICsgdGRhdGUuZ2V0TWludXRlcygpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25zLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIEV2ZW50cyB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yayc7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuaW1wb3J0IHsgSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9oZWxwZXInO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29uc3RhbnRzJztcblxuaW1wb3J0IHsgTG9naW5QYWdlIH0gZnJvbSAnLi4vbG9naW4vbG9naW4nO1xuaW1wb3J0IHsgQWNjb3VudFBhZ2UgfSBmcm9tICcuLi9hY2NvdW50L2FjY291bnQnO1xuaW1wb3J0IHsgU2Nhbm5lclBhZ2UgfSBmcm9tICcuLi9zY2FubmVyL3NjYW5uZXInO1xuLy9pbXBvcnQgeyBQYXltZW50UGFnZSB9IGZyb20gJy4uL3BheW1lbnQvcGF5bWVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnaG9tZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBIb21lUGFnZSB7XG4gIHB1YmxpYyBpc0RldmljZU9ubGluZSA6IGJvb2xlYW47XG4gIHB1YmxpYyBiYWxhbmNlIDogc3RyaW5nO1xuICBwdWJsaWMgc2hvd1JlZnJlc2hCdXR0b24gOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzaG93UVJDb2RlIDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgY3JlYXRlZENvZGU6IGFueTtcbiAgcHVibGljIHVzZXJJbmZvOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSwgcHJpdmF0ZSBuZXR3b3JrOiBOZXR3b3JrLCBwdWJsaWMgZXZlbnRzIDogRXZlbnRzLCBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBwdWJsaWMgaGVscGVyIDogSGVscGVyU2VydmljZSkge1xuICAgICAgdGhpcy5iYWxhbmNlID0gdGhpcy5oZWxwZXIuYmFsYW5jZTtcbiAgICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3NldEJhbGFuY2UnLCBhY3R1YWxCYWxhbmNlID0+IHtcbiAgICAgICAgdGhpcy5iYWxhbmNlID0gYWN0dWFsQmFsYW5jZTtcbiAgICAgICAgdGhpcy5oZWxwZXIuc2V0QmFsYW5jZShhY3R1YWxCYWxhbmNlKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmV2ZW50cy5zdWJzY3JpYmUoJ2xvZ291dCcsKCkgPT4ge1xuICAgICAgICAgIC8vY2FsbCBtZXRob2QgdG8gcmVmcmVzaCBjb250ZW50XG4gICAgICAgICAgdGhpcy5sb2dvdXQoKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmlzRGV2aWNlT25saW5lID0gdHJ1ZTtcbiAgICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgZGlzY29ubmVjdFxuICAgICAgdGhpcy5uZXR3b3JrLm9uRGlzY29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgY29ubmVjdGlvblxuICAgICAgdGhpcy5uZXR3b3JrLm9uQ29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgaW9uVmlld0RpZExvYWQoKXtcbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy51c2VyTG9nZ2VkSW5LZXkpLnRoZW4oKHZhbHVlKT0+e1xuICAgICAgaWYodmFsdWUgIT0gbnVsbCl7XG4gICAgICAgIHRoaXMudXNlckluZm8gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5zaG93UVJDb2RlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jcmVhdGVkQ29kZSA9IFwie1xcXCJ1c2VyXFxcIjpcXFwiXCIgKyB0aGlzLnVzZXJJbmZvLnVzZXJOYW1lICsgXCJcXFwiLFxcXCJ1c2VySWRcXFwiOlxcXCJcIiArIHRoaXMudXNlckluZm8udXNlcklkICsgXCJcXFwifVwiO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbG9nb3V0KCl7XG4gICAgdGhpcy5oZWxwZXIubG9nb3V0KCk7XG4gICAgdGhpcy5uYXZDdHJsLnNldFJvb3QoTG9naW5QYWdlKTtcbiAgfVxuXG4gIHJlbG9hZEFjY291bnQoKXtcbiAgICAgIHRoaXMubmF2Q3RybC5wdXNoKEFjY291bnRQYWdlKTtcbiAgfVxuXG4gIG1ha2VQYXltZW50KCl7XG4gICAgLyp0aGlzLmhlbHBlci5zdG9yZU5hbWUgPSAnQ2VydmVjZXJpYSBBcnRlc2FuYWwgUy5BLic7XG4gICAgdGhpcy5oZWxwZXIuc3RvcmVJZCA9IDI7XG4gICAgdGhpcy5uYXZDdHJsLnB1c2goUGF5bWVudFBhZ2UpOyovXG4gICAgdGhpcy5uYXZDdHJsLnB1c2goU2Nhbm5lclBhZ2UpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvaG9tZS9ob21lLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIE5hdlBhcmFtcywgRXZlbnRzLCBMb2FkaW5nQ29udHJvbGxlciB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgTmV0d29yayB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbmV0d29yayc7XG4vL2ltcG9ydCB7IEZhY2Vib29rIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9mYWNlYm9vayc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7IEFwaVNlcnZpY2VQcm92aWRlciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9hcGktc2VydmljZS9hcGktc2VydmljZSc7XG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb25zdGFudHMnO1xuaW1wb3J0IHsgRmFjZWJvb2sgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ZhY2Vib29rL25neCc7XG5cbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSAnLi4vaG9tZS9ob21lJztcbmltcG9ydCB7IFNpZ251cFBhZ2UgfSBmcm9tICcuLi9zaWdudXAvc2lnbnVwJztcbmltcG9ydCB7IEZvcmdvdFBhZ2UgfSBmcm9tICcuLi9mb3Jnb3QvZm9yZ290JztcblxuLyoqXG4gKiBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBMb2dpblBhZ2UgcGFnZS5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9jb21wb25lbnRzLyNuYXZpZ2F0aW9uIGZvciBtb3JlIGluZm8gb25cbiAqIElvbmljIHBhZ2VzIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJ2xvZ2luLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpblBhZ2Uge1xuICBwcml2YXRlIGxvZ2luIDogRm9ybUdyb3VwO1xuICBwdWJsaWMgaXNEZXZpY2VPbmxpbmUgOiBib29sZWFuO1xuICBwdWJsaWMgc2hvd0xvZ2luRmFpbFRleHQgOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyB1c2VySW5mbyA6IGFueSA9IHt9O1xuICBwdWJsaWMgcmVzcG9uc2VEYXRhIDogYW55O1xuICBwdWJsaWMgbG9naW5GYWlsVGV4dCA6IHN0cmluZztcbiAgRkJfQVBQX0lEOiBudW1iZXIgPSAyNjA2NzY4NTQ1OTM3NjM7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsIHByaXZhdGUgZmI6IEZhY2Vib29rLCBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UsIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtcywgcHJpdmF0ZSBuZXR3b3JrOiBOZXR3b3JrLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLCBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHVibGljIGV2ZW50cyA6IEV2ZW50cywgcHVibGljIGFwaVNlcnZpY2UgOiBBcGlTZXJ2aWNlUHJvdmlkZXIsXG4gICAgcHVibGljIGxvYWRpbmdDdHJsOiBMb2FkaW5nQ29udHJvbGxlcikge1xuICAgIHRoaXMubG9naW4gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgcHdkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIH0pO1xuICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuXG4gICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBkaXNjb25uZWN0XG4gICAgdGhpcy5uZXR3b3JrLm9uRGlzY29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBjb25uZWN0aW9uXG4gICAgdGhpcy5uZXR3b3JrLm9uQ29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0RldmljZU9ubGluZSA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCdpb25WaWV3RGlkTG9hZCBMb2dpblBhZ2UnKTtcbiAgfVxuXG4gIHNpZ251cFBhZ2UoKXsgdGhpcy5uYXZDdHJsLnNldFJvb3QoU2lnbnVwUGFnZSk7IH1cbiAgZm9yZ290UGFzc3dvcmRQYWdlKCl7IHRoaXMubmF2Q3RybC5zZXRSb290KEZvcmdvdFBhZ2UpOyB9XG5cbiAgZmJMb2dpbigpe1xuICAgIGxldCBsb2FkaW5nID0gdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgY29udGVudDogJ0VzcGVyZSB1biBtb21lbnRvLi4uJ1xuICAgIH0pO1xuICAgIGxvYWRpbmcucHJlc2VudCgpO1xuICAgIC8vbGV0IHBlcm1pc3Npb25zID0gbmV3IEFycmF5PHN0cmluZz4oKTtcblxuICAgIC8vdGhlIHBlcm1pc3Npb25zIHlvdXIgZmFjZWJvb2sgYXBwIG5lZWRzIGZyb20gdGhlIHVzZXJcbiAgICBjb25zdCBwZXJtaXNzaW9ucyA9IFtcInB1YmxpY19wcm9maWxlXCIsIFwiZW1haWxcIl07XG5cbiAgICB0aGlzLmZiLmxvZ2luKHBlcm1pc3Npb25zKVxuICAgIC50aGVuKHJlc3BvbnNlID0+e1xuICAgICAgbGV0IHVzZXJJZCA9IHJlc3BvbnNlLmF1dGhSZXNwb25zZS51c2VySUQ7XG5cbiAgICAgIC8vR2V0dGluZyBuYW1lIGFuZCBnZW5kZXIgcHJvcGVydGllc1xuICAgICAgdGhpcy5mYi5hcGkoXCIvbWU/ZmllbGRzPW5hbWUsZW1haWxcIiwgcGVybWlzc2lvbnMpXG4gICAgICAudGhlbih1c2VyID0+e1xuICAgICAgICAvL3VzZXIucGljdHVyZSA9IFwiaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vXCIgKyB1c2VySWQgKyBcIi9waWN0dXJlP3R5cGU9bGFyZ2VcIjtcbiAgICAgICAgLy9ub3cgd2UgaGF2ZSB0aGUgdXNlcnMgaW5mbywgbGV0J3Mgc2F2ZSBpdCBpbiB0aGUgTmF0aXZlU3RvcmFnZVxuXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ24nLCB1c2VyLm5hbWUpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3UnLCB1c2VyLmVtYWlsKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwJywgJzAwMDAwJyk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaScsICcxMjM0NTY3Jyk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZicsIHVzZXJJZCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndCcsICcyJyk7XG4gICAgICAgIHRoaXMuYXBpU2VydmljZS5wb3N0RGF0YShmb3JtRGF0YSwgJ2FjY2Vzcy5waHAnKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgbG9hZGluZy5kaXNtaXNzKCk7XG4gICAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXN1bHQ7XG4gICAgICAgICAgdGhpcy5hY2Nlc3NSZXNwb25zZSh0aGlzLnJlc3BvbnNlRGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICB9KTtcbiAgfVxuXG4gIGF0dGVtcHRVc2VyTG9naW4oKXtcbiAgICBsZXQgbG9hZGluZyA9IHRoaXMubG9hZGluZ0N0cmwuY3JlYXRlKHtcbiAgICAgIGNvbnRlbnQ6ICdFc3BlcmUgdW4gbW9tZW50by4uLidcbiAgICB9KTtcbiAgICBsb2FkaW5nLnByZXNlbnQoKTtcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3UnLCB0aGlzLmxvZ2luLnZhbHVlLmVtYWlsKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3AnLCB0aGlzLmxvZ2luLnZhbHVlLnB3ZCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCd0JywgJzInKTtcbiAgICB0aGlzLmFwaVNlcnZpY2UucG9zdERhdGEoZm9ybURhdGEsICdhY2Nlc3MucGhwJykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBsb2FkaW5nLmRpc21pc3MoKTtcbiAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXN1bHQ7XG4gICAgICAgIHRoaXMuYWNjZXNzUmVzcG9uc2UodGhpcy5yZXNwb25zZURhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgYWNjZXNzUmVzcG9uc2UoX3Jlc3BvbnNlRGF0YSl7XG4gICAgICBpZiAoX3Jlc3BvbnNlRGF0YS5zdGF0dXMgPT0gXCJva1wiKSB7XG4gICAgICAgIGxldCB1c2VyQXJyYXkgPSB7XG4gICAgICAgICAgdXNlcklkOiBfcmVzcG9uc2VEYXRhLnVzZXIuaWQsXG4gICAgICAgICAgdXNlckVtYWlsOiBfcmVzcG9uc2VEYXRhLnVzZXIuZW1haWwsXG4gICAgICAgICAgdXNlck5hbWU6IF9yZXNwb25zZURhdGEudXNlci5uYW1lXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChDb25zdGFudHMudXNlckxvZ2dlZEluS2V5LCB1c2VyQXJyYXkpO1xuICAgICAgICB0aGlzLnNob3dMb2dpbkZhaWxUZXh0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goJ3NldEJhbGFuY2UnLCAnJCcgKyBwYXJzZUZsb2F0KF9yZXNwb25zZURhdGEudXNlci5hbW91bnQpLnRvRml4ZWQoMikpO1xuICAgICAgICB0aGlzLm5hdkN0cmwuc2V0Um9vdChIb21lUGFnZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93TG9naW5GYWlsVGV4dCA9IHRydWU7XG4gICAgICAgIHRoaXMubG9naW5GYWlsVGV4dCA9IChfcmVzcG9uc2VEYXRhLm1zZyA9PSAnbm8gcGFzc3dvcmQnID8gJ0NvbnRyYXNlw7FhIGluY29ycmVjdGEnIDogKF9yZXNwb25zZURhdGEubXNnID09ICdubyB1c2VyJyA/ICdFc3RlIHVzdWFyaW8gbm8gZXhpc3RlJyA6IChfcmVzcG9uc2VEYXRhLm1zZyA9PSAnbm8gcGxhdGZvcm0nID8gJ1BsYXRhZm9ybWEgaW5jb3JyZWN0YScgOiAnRXJyb3IgZGVzY29ub2NpZG8nKSkpO1xuICAgICAgfVxuICAgIHJldHVybiA7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYWdlcy9sb2dpbi9sb2dpbi50cyIsImltcG9ydCB7IENvbXBvbmVudCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBOYXZQYXJhbXMsIExvYWRpbmdDb250cm9sbGVyLCBFdmVudHMsIFBsYXRmb3JtIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG5pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uZXR3b3JrJztcbmltcG9ydCB7IFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvYXBpLXNlcnZpY2UvYXBpLXNlcnZpY2UnO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2hlbHBlcic7XG5pbXBvcnQgeyBORkMsIE5kZWYgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25mYyc7XG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdG9hc3QnO1xuXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4uL2hvbWUvaG9tZSc7XG5pbXBvcnQgeyBMb2dpblBhZ2UgfSBmcm9tICcuLi9sb2dpbi9sb2dpbic7XG5pbXBvcnQgeyBGb3Jnb3RQYWdlIH0gZnJvbSAnLi4vZm9yZ290L2ZvcmdvdCc7XG5cbi8qKlxuICogR2VuZXJhdGVkIGNsYXNzIGZvciB0aGUgU2lnbnVwUGFnZSBwYWdlLlxuICpcbiAqIFNlZSBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2NvbXBvbmVudHMvI25hdmlnYXRpb24gZm9yIG1vcmUgaW5mbyBvblxuICogSW9uaWMgcGFnZXMgYW5kIG5hdmlnYXRpb24uXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1zaWdudXAnLFxuICB0ZW1wbGF0ZVVybDogJ3NpZ251cC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwUGFnZSB7XG4gIHB1YmxpYyBpc0RldmljZU9ubGluZSA6IGJvb2xlYW47XG4gIHByaXZhdGUgcmVnaXN0ZXIgOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyByZXNwb25zZURhdGEgOiBhbnk7XG4gIHB1YmxpYyBzaG93RHVwbGljYXRlVGV4dDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgbmFtZVZhbHVlIDogc3RyaW5nO1xuICBwdWJsaWMgZW1haWxWYWx1ZSA6IHN0cmluZztcbiAgcHVibGljIGlzVXNlckxvZ2dlZEluIDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgdXNlckluZm86IGFueTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlLCBwdWJsaWMgbmF2UGFyYW1zOiBOYXZQYXJhbXMsIHByaXZhdGUgbmV0d29yazogTmV0d29yaywgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgcHVibGljIGFwaVNlcnZpY2UgOiBBcGlTZXJ2aWNlUHJvdmlkZXIsIHByaXZhdGUgbmZjOiBORkMsIHByaXZhdGUgbmRlZjogTmRlZiwgcHVibGljIGxvYWRpbmdDdHJsOiBMb2FkaW5nQ29udHJvbGxlciwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHVibGljIGhlbHBlcjogSGVscGVyU2VydmljZSwgcHVibGljIGV2ZW50czogRXZlbnRzLCBwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtLCBwcml2YXRlIHRvYXN0OiBUb2FzdCkge1xuICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgZGlzY29ubmVjdFxuICAgIHRoaXMubmV0d29yay5vbkRpc2Nvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgY29ubmVjdGlvblxuICAgIHRoaXMubmV0d29yay5vbkNvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICBuYW1lOiBbJyddLFxuICAgICAgICBwd2Q6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KV0pXSxcbiAgICAgICAgZ3JvdXAgOiBbJyddXG4gICAgfSk7XG4gICAgdmFyICR2aWV3ID0gdGhpcztcbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KENvbnN0YW50cy51c2VyTG9nZ2VkSW5LZXkpLnRoZW4odmFsdWUgPT4ge1xuICAgICAgaWYodmFsdWUgIT0gbnVsbCl7XG4gICAgICAgIHRoaXMuaXNVc2VyTG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnVzZXJJbmZvID0gdmFsdWU7XG4gICAgICAgIGxldCBsb2FkaW5nID0gdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgICAgICAgY29udGVudDogJ0VzcGVyZSB1biBtb21lbnRvLi4uJ1xuICAgICAgICB9KTtcbiAgICAgICAgbG9hZGluZy5wcmVzZW50KCk7XG4gICAgICAgICR2aWV3LnJlZ2lzdGVyID0gJHZpZXcuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBuYW1lOiBbJyddLFxuICAgICAgICAgICAgcHdkOiBbJycsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXSxcbiAgICAgICAgICAgIGdyb3VwIDogWycnXVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVzZXJJbmZvID0gdmFsdWU7XG4gICAgICAgIHRoaXMuYXBpU2VydmljZS5nZXREYXRhKHsgJ2lkJzogdGhpcy51c2VySW5mby51c2VySWQsICd0eXBlJzogJ3VzZXInIH0sICd1c2Vycy5waHAnKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgbG9hZGluZy5kaXNtaXNzKCk7XG4gICAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSByZXN1bHQ7XG4gICAgICAgICAgdGhpcy5uYW1lVmFsdWUgPSB0aGlzLnJlc3BvbnNlRGF0YS51c2VyLm5hbWU7XG4gICAgICAgICAgdGhpcy5lbWFpbFZhbHVlID0gdGhpcy5yZXNwb25zZURhdGEudXNlci5lbWFpbDtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlvblZpZXdEaWRMb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCdpb25WaWV3RGlkTG9hZCBTaWdudXBQYWdlJyk7XG4gIH1cblxuICBsb2dvdXQoKXtcbiAgICAgIHRoaXMuaGVscGVyLmxvZ291dCgpO1xuICAgICAgdGhpcy5uYXZDdHJsLnNldFJvb3QoTG9naW5QYWdlKTtcbiAgfVxuXG4gIGNhbmNlbCgpe1xuICAgICAgdGhpcy5uYXZDdHJsLnNldFJvb3QoSG9tZVBhZ2UpO1xuICB9XG5cbiAgbG9naW5QYWdlKCl7IHRoaXMubmF2Q3RybC5zZXRSb290KExvZ2luUGFnZSk7IH1cbiAgZm9yZ290UGFzc3dvcmRQYWdlKCl7IHRoaXMubmF2Q3RybC5zZXRSb290KEZvcmdvdFBhZ2UpOyB9XG5cbiAgbGlua1RhZygpe1xuICAgIHRoaXMubmZjLmFkZE5kZWZMaXN0ZW5lcigoKSA9PiB7XG4gICAgICBpZih0aGlzLnBsYXRmb3JtLmlzKCdjb3Jkb3ZhJykpe1xuICAgICAgICB0aGlzLnRvYXN0LnNob3coJ3N1Y2Nlc3NmdWxseSBhdHRhY2hlZCBuZGVmIGxpc3RlbmVyJywgJzUwMDAnLCAnY2VudGVyJyk7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBhbGVydCgnc3VjY2Vzc2Z1bGx5IGF0dGFjaGVkIG5kZWYgbGlzdGVuZXInKTtcbiAgICAgIH1cbiAgICB9LCAoZXJyKSA9PiB7XG4gICAgICBpZih0aGlzLnBsYXRmb3JtLmlzKCdjb3Jkb3ZhJykpe1xuICAgICAgICB0aGlzLnRvYXN0LnNob3coJ2Vycm9yIGF0dGFjaGluZyBuZGVmIGxpc3RlbmVyJyArIGVyciwgJzUwMDAnLCAnY2VudGVyJyk7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBhbGVydCgnZXJyb3IgYXR0YWNoaW5nIG5kZWYgbGlzdGVuZXInICsgZXJyKTtcbiAgICAgIH1cbiAgICB9KS5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICBpZih0aGlzLnBsYXRmb3JtLmlzKCdjb3Jkb3ZhJykpe1xuICAgICAgICB0aGlzLnRvYXN0LnNob3coJ3JlY2VpdmVkIG5kZWYgbWVzc2FnZS4gdGhlIHRhZyBjb250YWluczogJyArIGV2ZW50LnRhZywgJzUwMDAnLCAnY2VudGVyJyk7XG4gICAgICAgIHRoaXMudG9hc3Quc2hvdygnZGVjb2RlZCB0YWcgaWQnICsgdGhpcy5uZmMuYnl0ZXNUb0hleFN0cmluZyhldmVudC50YWcuaWQpLCAnNTAwMCcsICdjZW50ZXInKTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGFsZXJ0KCdyZWNlaXZlZCBuZGVmIG1lc3NhZ2UuIHRoZSB0YWcgY29udGFpbnM6ICcgKyBldmVudC50YWcpO1xuICAgICAgICBhbGVydCgnZGVjb2RlZCB0YWcgaWQnICsgdGhpcy5uZmMuYnl0ZXNUb0hleFN0cmluZyhldmVudC50YWcuaWQpKTtcbiAgICAgIH1cblxuICAgICAgbGV0IG1lc3NhZ2UgPSB0aGlzLm5kZWYudGV4dFJlY29yZCh0aGlzLnVzZXJJbmZvLnVzZXJFbWFpbCk7XG4gICAgICB0aGlzLm5mYy5zaGFyZShbbWVzc2FnZV0pLnRoZW4oc3VjY2VzcyA9PiB7XG4gICAgICAgIC8vIFRPRE8gYnVzY2FyIHNpIGV4aXN0ZSBlbCB0YWcgZW4gbGEgYmQgeSBoYWNlciBsb2dpbiBjb24gZXNlIGlkXG4gICAgICAgIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xuICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYXR0ZW1wdFVzZXJSZWdpc3Rlcigpe1xuICAgIHRoaXMuc2hvd0R1cGxpY2F0ZVRleHQgPSBmYWxzZTtcbiAgICBsZXQgbG9hZGluZyA9IHRoaXMubG9hZGluZ0N0cmwuY3JlYXRlKHtcbiAgICAgICAgY29udGVudDogJ0VzcGVyZSB1biBtb21lbnRvLi4uJ1xuICAgIH0pO1xuICAgIGxvYWRpbmcucHJlc2VudCgpO1xuXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgdGhpcy5zdG9yYWdlLmdldChDb25zdGFudHMudXNlckxvZ2dlZEluS2V5KS50aGVuKHZhbHVlID0+IHtcbiAgICAgIHRoaXMudXNlckluZm8gPSB2YWx1ZTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgndXNlcklkJywgdGhpcy51c2VySW5mby51c2VySWQgKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbmFtZScsIHRoaXMucmVnaXN0ZXIudmFsdWUubmFtZSk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2VtYWlsJywgdGhpcy5yZWdpc3Rlci52YWx1ZS5lbWFpbCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3VzZXJfdHlwZV9pZCcsICcyJyk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3VpZCcsJzEyMzQ1Njc4OTAnKTtcbiAgICAgIGlmKHZhbHVlICE9IG51bGwpe1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3R5cGUnLCAnc2F2ZScpO1xuICAgICAgICBpZih0aGlzLnJlZ2lzdGVyLnZhbHVlLnB3ZClcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Bhc3N3b3JkJywgdGhpcy5yZWdpc3Rlci52YWx1ZS5wd2QpO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0eXBlJywgJ25ldycpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Bhc3N3b3JkJywgdGhpcy5yZWdpc3Rlci52YWx1ZS5wd2QpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFwaVNlcnZpY2UucG9zdERhdGEoZm9ybURhdGEsICd1c2Vycy5waHAnKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGxvYWRpbmcuZGlzbWlzcygpO1xuICAgICAgICB0aGlzLnJlc3BvbnNlRGF0YSA9IHJlc3VsdDtcbiAgICAgICAgaWYgKHRoaXMucmVzcG9uc2VEYXRhLnN0YXR1cyA9PSBcIm9rXCIpIHtcbiAgICAgICAgICBsZXQgdXNlckFycmF5ID0ge1xuICAgICAgICAgICAgdXNlcklkOiB0aGlzLnJlc3BvbnNlRGF0YS5pZCxcbiAgICAgICAgICAgIHVzZXJOYW1lOiB0aGlzLnJlc3BvbnNlRGF0YS51c2VyLm5hbWUsXG4gICAgICAgICAgICB1c2VyRW1haWw6IHRoaXMucmVzcG9uc2VEYXRhLnVzZXIuZW1haWxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdGhpcy5zdG9yYWdlLnNldChDb25zdGFudHMudXNlckxvZ2dlZEluS2V5LCB1c2VyQXJyYXkpO1xuICAgICAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goJ3NldEJhbGFuY2UnLCAnJCcgKyBwYXJzZUZsb2F0KHRoaXMucmVzcG9uc2VEYXRhLnVzZXIuYW1vdW50KS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICB0aGlzLm5hdkN0cmwuc2V0Um9vdChIb21lUGFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLnJlc3BvbnNlRGF0YS5tc2cgPT0gXCJkdXBsaWNhdGVcIil7XG4gICAgICAgICAgdGhpcy5zaG93RHVwbGljYXRlVGV4dCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvc2lnbnVwL3NpZ251cC50cyJdLCJzb3VyY2VSb290IjoiIn0=
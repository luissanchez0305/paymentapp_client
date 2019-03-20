import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../../services/constants';
import { Platform } from 'ionic-angular';

/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiceProvider {

  constructor(public http: HttpClient, public platform: Platform) {
    console.log('Hello ApiServiceProvider Provider');
  }

  postData(data, url) {
    return new Promise((resolve, reject) => {
      let endpoint = Constants.API_ENDPOINT;
      if(!this.platform.is('cordova')){
        endpoint = Constants.LOCAL_API_ENDPOINT;
      }

      this.http.post(endpoint + url, data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getData(data, url){
    return new Promise((resolve, reject) => {
      var str = [];
      for (var p in data){
        if (data.hasOwnProperty(p)) {
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
        }
      }

      let endpoint = Constants.API_ENDPOINT;
      if(!this.platform.is('cordova')){
        endpoint = Constants.LOCAL_API_ENDPOINT;
      }

      this.http.get(endpoint + url+'?'+str.join("&"))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../../services/constants';

/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiServiceProvider Provider');
  }

  postData(data, url) {
    return new Promise((resolve, reject) => {
      this.http.post(Constants.API_ENDPOINT + url, data)
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
      for (var p in data)
        if (data.hasOwnProperty(p)) {
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
        }

      this.http.get(Constants.API_ENDPOINT + url+'?'+str.join("&"))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}

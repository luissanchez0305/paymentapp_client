import { Injectable } from '@angular/core';
import { Constants } from '../services/constants';
import { Storage } from '@ionic/storage';

@Injectable()

export class HelperService {
    public balance: string;
    public storeName: string;
    public storeId: number;

    constructor(private storage: Storage){
        this.balance = '----';
    }

    setBalance(actualBalance){
        this.balance = actualBalance;
    }

    setStoreInfo(actualStoreName, actualStoreId){
        this.storeName = actualStoreName;
        this.storeId = actualStoreId;
    }

    logout(){
        this.balance = '----';
        this.storage.set(Constants.userLoggedInKey, null);
    }
}
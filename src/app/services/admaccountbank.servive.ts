import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AdmAccountBank {
    token = localStorage.getItem('token')
    headers = new Headers();
    opts: RequestOptionsArgs;
    
    constructor(private http: Http, private urlService: UrlService) {

    }

    getAccountBankList(): Observable<any[]> {
        return this.http.get(this.urlService.getUrlAdmAccountBank())
              .map((res: Response) => res.json())
              .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
     }

     addAccountBank(param): Observable<any> {
        return this.http.post(this.urlService.postUrlAddAdmAccountBank() + param,param )
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    } 
      
    editAccountBank(param): Observable<any> {
        return this.http.post(this.urlService.postUrlEditAdmAccountBank() + param,param )
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }

    deleteAccountBank(param) : Observable<any>{
        return this.http.post(this.urlService.postUrlDeleteAdmAccountBank() + param,param )
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }


     private extractData(res:Response) {
        let body = res.json();
        return body || [];
     } 

     handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
      } 
}
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class AdvClaimerService {
    token = localStorage.getItem('token')
    headers = new Headers();
    opts: RequestOptionsArgs;

       
    constructor(private http: Http, private urlService: UrlService) {

    }

    getAdvClaimerList(): Observable<any[]> {
        return this.http.get(this.urlService.getUrlAdvClaimer())
              .map((res: Response) => res.json())
              .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
     }

     addAdvClaimer(param): Observable<any> {
        return this.http.post(this.urlService.postUrlAddAdvClaimer() + param,param )
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    } 
      
    editAdvClaimer(param): Observable<any> {
        return this.http.post(this.urlService.postUrlEditAdvClaimer() + param,param )
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }

    deleteAdvClaimer(param) : Observable<any>{
        return this.http.post(this.urlService.postUrlDeleteClaimer() + param,param )
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
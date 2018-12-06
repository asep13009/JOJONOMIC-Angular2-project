import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AdmStatusService {
    token = localStorage.getItem('token')
    headers = new Headers();
    opts: RequestOptionsArgs;
    
    constructor(private http: Http, private urlService: UrlService) {

    }

    getAdmStatusList(): Observable<any[]> {
        return this.http.get(this.urlService.getUrlAdmStatus())
              .map((res: Response) => res.json())
              .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
     }

     addAdmStatus(param): Observable<any> {
        return this.http.post(this.urlService.postUrlAddAdmStatus() + param,param )
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    } 
      
    editAdmStatus(param): Observable<any> {
        return this.http.post(this.urlService.postUrlEditAdmStatus() + param,param )
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }

    deleteAdmStatus(param) : Observable<any>{
        return this.http.post(this.urlService.postUrlDeleteAdmStatus() + param,param )
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
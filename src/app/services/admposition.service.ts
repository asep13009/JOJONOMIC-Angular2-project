import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs/Rx';



@Injectable()
export class AdmPositionService {
    token = localStorage.getItem('token')
    headers = new Headers();
    opts: RequestOptionsArgs;

       
    constructor(private http: Http, private urlService: UrlService) {

    }

    getAdmPositionList(): Observable<any[]> {
        return this.http.get(this.urlService.getUrlAdmPosition())
              .map((res: Response) => res.json())
              .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
     }

     addAdmPosition(param): Observable<any> {
        return this.http.post(this.urlService.postUrlAddAdmPosition() + param,param )
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    } 
      
    editAdmPosition(param): Observable<any> {
        return this.http.post(this.urlService.postUrlEditAdmPosition() + param,param )
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }

    deleteAdmPosition(param) : Observable<any>{
        return this.http.post(this.urlService.postUrlDeleteAdmPosition() + param,param )
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
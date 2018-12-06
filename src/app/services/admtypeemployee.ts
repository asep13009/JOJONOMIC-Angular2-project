import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AdmTypeEmployee {
    token = localStorage.getItem('token')
    headers = new Headers();
    opts: RequestOptionsArgs;
    
    constructor(private http: Http, private urlService: UrlService) {

    }

    getAdmTypeEmployeeList(): Observable<any[]> {
        return this.http.get(this.urlService.getUrlAdmTypEmployee())
              .map((res: Response) => res.json())
              .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
     }

     addAdmTypeEmployee(param): Observable<any> {
        return this.http.post(this.urlService.postUrlAddAdmTypEmployee() + param,param )
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    } 
      
    editAdmTypeEmployee(param): Observable<any> {
        return this.http.post(this.urlService.postUrlEditAdmTypEmployee() + param,param )
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }

    deleteAdmTypeEmployee(param) : Observable<any>{
        return this.http.post(this.urlService.postUrlDeleteAdmTypEmployee() + param,param )
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
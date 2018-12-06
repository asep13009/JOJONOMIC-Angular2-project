import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs/Rx';



@Injectable()
export class AdmReimbursementTypeService {
    token = localStorage.getItem('token')
    headers = new Headers();
    opts: RequestOptionsArgs;

       
    constructor(private http: Http, private urlService: UrlService) {

    }

    getAdmReimbursementTypeList(): Observable<any[]> {
        return this.http.get(this.urlService.getUrlAdmReimbursementType())
              .map((res: Response) => res.json())
              .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
     }

     addAdmReimbursementType(param): Observable<any> {
        return this.http.post(this.urlService.postUrlAddAdmReimbursementType() + param,param )
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    } 
      
    editAdmReimbursementType(param): Observable<any> {
        return this.http.post(this.urlService.postUrlEditAdmReimbursementType() + param,param )
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }

    deleteAdmReimbursementType(param) : Observable<any>{
        return this.http.post(this.urlService.postUrlDeleteAdmReimbursementType() + param,param )
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
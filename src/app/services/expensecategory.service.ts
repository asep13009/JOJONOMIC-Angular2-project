import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ExpenseCategoryService {
    token = localStorage.getItem('token')
    headers = new Headers();
    opts: RequestOptionsArgs;

       
    constructor(private http: Http, private urlService: UrlService) {
    //    this.token = localStorage.getItem('token')
    //    this.headers.append("Content-Type", "application/json");
    //    this.headers.append("Charset", "UTF-8");
    //    this.headers.append('Authorization', this.token);
    //    this.opts = { headers : this.headers };
    }

    getExpenseCategoryUserList(): Observable<any[]> {
        return this.http.get(this.urlService.getUrlExpenseCategory())
              .map((res: Response) => res.json())
              .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
     }

     addExpenseCategory(param): Observable<any> {
        return this.http.post(this.urlService.postUrlAddExpenseCategory() + param,param,param)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    } 
      
    editExpenseCategory(param): Observable<any> {
        return this.http.post(this.urlService.postUrlEditExpenseCategory() + param,param )
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }

    deleteExpenseCategory(param) : Observable<any>{
        return this.http.post(this.urlService.postUrlDeleteExpenseCategory() + param,param )
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }


  

     handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
      }


     
     private extractData(res:Response) {
        let body = res.json();
        return body || [];
     } 
}
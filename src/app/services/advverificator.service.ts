import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class AdvVerificatorService {
    token = localStorage.getItem('token')
    headers = new Headers();
    opts: RequestOptionsArgs;

       
    constructor(private http: Http, private urlService: UrlService) {

    }

    getAdvVerificatorList(): Observable<any[]> {
        return this.http.get(this.urlService.getAdvVerificator())
              .map((res: Response) => res.json())
              .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
     }
     private extractData(res:Response) {
        let body = res.json();
        return body || [];
     } 
}
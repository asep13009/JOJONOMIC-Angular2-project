import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestOptionsArgs } from '@angular/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class EmployeeService {
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

    getEmployeeUserList(): Observable<any[]> {
        return this.http.get(this.urlService.getUrlEmployee())
              .map((res: Response) => res.json())
              .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
     }

     getJabatanList(): Observable<any[]> {
        return this.http.get(this.urlService.getUrlJabatan())
              .map((res: Response) => res.json())
              .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
     }



    // getMaintenanceList(id:number): Observable<ListMaintenance[]> {
    //     return this.http.get(this.urlService.getUrlMaintenancetList(id), this.opts)
    //           .map((res: Response) => res.json())
    //           .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    //  }
 

    //  public editAttendance(periodId:number, scheduleId:number, attendanceData: PostEditAttendance[]): Observable<boolean>{
    //         return this.http.post(this.urlService.postUrlEditAttendance(periodId, scheduleId), attendanceData, this.opts)
    //         .map(this.extractData)
    //         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    //   }

     
     private extractData(res:Response) {
        let body = res.json();
        return body || [];
     } 
}
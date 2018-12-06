import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class UrlService {
   constructor() {
   }
    serverUrl: string ="http://139.255.131.112:8989";

    

   getUrlAdvClaimer():string{
    return this.serverUrl + "/jabatanall"
    }

    postUrlAddAdvClaimer():string{
        return this.serverUrl + "/insertjabatan"
    }

    postUrlEditAdvClaimer():string{
        return this.serverUrl + "/updatejabatan"
    }
    postUrlDeleteClaimer():string{
        return this.serverUrl + "/deletejabatan"
    }




    getUrlAdmRole():string{
    return this.serverUrl + "/roleloginall"
    }

    postUrlAddAdmRole():string{
        return this.serverUrl + "/insertrolelogin"
    }

    postUrlEditAdmRole():string{
        return this.serverUrl + "/updatetrolelogin"
    }
    postUrlDeleteAdmRole():string{
        return this.serverUrl + "/deleterolelogin"
    }




    getUrlAdmPosition():string{
        return this.serverUrl + "/jabatanall"
    }
    
    postUrlAddAdmPosition():string{
        return this.serverUrl + "/insertjabatan"
    }
    
    postUrlEditAdmPosition():string{
        return this.serverUrl + "/updatejabatan"
    }
    postUrlDeleteAdmPosition():string{
    return this.serverUrl + "/deletejabatan"
    }


    //employee type
    getUrlAdmTypEmployee():string{
        return this.serverUrl + "/tipekaryawanall"
    }
        
    postUrlAddAdmTypEmployee():string{
        return this.serverUrl + "/inserttipekaryawan"
    }
        
    postUrlEditAdmTypEmployee():string{
        return this.serverUrl + "/updatetipekaryawan"
    }
    postUrlDeleteAdmTypEmployee():string{
        return this.serverUrl + "/deletetipekaryawan"
    }


  

     //REimbursement type
     getUrlAdmReimbursementType():string{
        return this.serverUrl + "/tipepengajuanall"
    }
        
    postUrlAddAdmReimbursementType():string{
        return this.serverUrl + "/inserttipePengajuan"
    }
        
    postUrlEditAdmReimbursementType():string{
        return this.serverUrl + "/updatetipePengajuan"
    }
    postUrlDeleteAdmReimbursementType():string{
        return this.serverUrl + "/deletetipePengajuan"
    }


    


    //status
    getUrlAdmStatus():string{
        return this.serverUrl + "/statusall"
    }
        
    postUrlAddAdmStatus():string{
        return this.serverUrl + "/insertstatus"
    }
        
    postUrlEditAdmStatus():string{
        return this.serverUrl + "/updatestatus"
    }
    postUrlDeleteAdmStatus():string{
        return this.serverUrl + "/deletestatus"
    }




    //akun bank
    getUrlAdmAccountBank():string{
        return this.serverUrl + "/akunbankall"
    }
        
    postUrlAddAdmAccountBank():string{
        return this.serverUrl + "/insertakunbank"
    }
        
    postUrlEditAdmAccountBank():string{
        return this.serverUrl + "/updateakunbank"
    }
    postUrlDeleteAdmAccountBank():string{
        return this.serverUrl + "/deleteakunbank"
    }


   urlAdvApprover: string="https://jsonplaceholder.typicode.com/users";
   getUrlAdvApprover():string{
       return this.urlAdvApprover;
   }

   
   urlTeam: string="https://jsonplaceholder.typicode.com/users";
   getUrlTeam():string{
       return this.urlTeam;
   }

   getUrlJabatan():string{
    return this.serverUrl + "/jabatanall"
    }
   
    urlEmployee: string="https://jsonplaceholder.typicode.com/users";
   getUrlEmployee():string{
         return this.urlEmployee;
   }


   //expanse category
   
   
   getUrlExpenseCategory():string{
     return this.serverUrl + "/expensekategoriall"
   }

    postUrlAddExpenseCategory():string{
        return this.serverUrl + "/insertexpensekategori/"
    }
        
    postUrlEditExpenseCategory():string{
        return this.serverUrl + "/updateexpensekategori/"
    }
    postUrlDeleteExpenseCategory():string{
        return this.serverUrl + "/deleteexpensekategori/"
    }


   urlTag: string="https://jsonplaceholder.typicode.com/users";
   getUrlTag():string{
       return this.urlTag;
   }
   
   urlAttendanceClaimer: string="https://jsonplaceholder.typicode.com/users";
   getUrlAttendanceClaimer():string{
       return this.urlAttendanceClaimer;
   }
   urlAttendanceConfig: string="https://jsonplaceholder.typicode.com/users";
   getUrlAttendanceConfig():string{
       return this.urlAttendanceConfig;
   }
   urlAttendanceMonitor: string="https://jsonplaceholder.typicode.com/users";
   getUrlAttendanceMonitor():string{
       return this.urlAttendanceMonitor;
   }



   urlAdvFinance: string="https://jsonplaceholder.typicode.com/users";
   getAdvFinance():string{
       return this.urlAdvFinance;
   }

   urlAdvVerificator: string="https://jsonplaceholder.typicode.com/users";
   getAdvVerificator():string{
       return this.urlAdvVerificator;
   }

   urlReimbursementClaimer: string="https://jsonplaceholder.typicode.com/users";
   getReimbursementClaimer():string{
       return this.urlReimbursementClaimer;
   }

   urlReimbursementApprover: string="https://jsonplaceholder.typicode.com/users";
   getReimbursementApprover():string{
       return this.urlReimbursementApprover;
   }

   urlReimbursementFinance: string="https://jsonplaceholder.typicode.com/users";
   getReimbursementFinance():string{
       return this.urlReimbursementFinance;
   }
   urlChart: string="https://jsonplaceholder.typicode.com/users";
   getChart():string{
       return this.urlChart;
   }

}
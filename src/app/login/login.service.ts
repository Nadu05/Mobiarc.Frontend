import { HttpClient } from "@angular/common/http";
import { Injectable} from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})   
export class LoginService {
    private url: string = 'http://localhost:3000/user/register';

    constructor(private http: HttpClient) {}

    signin(dataJson:{username:string,password:string}): Observable<any> {
        return this.http.post(this.url, dataJson);
    }
    //this the sign in function

   
    }



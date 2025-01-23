import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
    providedIn:'root'
})
export class SigninService{
    private signupUrl:string='http://localhost:3333/auth/signin';

    constructor(
        private http:HttpClient,
    ){}

    signin(dataJson:{username:string,password:string}): Observable<any>{
        return this.http.post(this.signupUrl, dataJson);// THIS HAVE CHANGE IN FUTURE
    }

}


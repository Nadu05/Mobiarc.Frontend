import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({ providedIn: 'root' })
export class jwtinterceptor implements HttpInterceptor {



    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const jwttoken ='myjwttoken';



        const clonrRequest=req.clone({
            setHeaders:{
                Authorization:`Bearer ${jwttoken}`
            }
        })
        return next.handle(clonrRequest);
    }
}
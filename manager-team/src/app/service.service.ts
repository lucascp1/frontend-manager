import { throwError } from 'rxjs';
import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { catchError, debounceTime, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class Service {
    constructor(private http: HttpClient) { }

    buildAdress(port: string, endpoint: string) {
        return `http://localhost:${port}/${endpoint}`;
    }

    public callApiMethod(url: string, endpoint: string, args: {[id: string]:any}) : Promise<any> {
        url = this.buildAdress(url, endpoint);
        let headers = new HttpHeaders().set('Accept', 'application/json')
        .set('Header', 'access-control-allow-origin')
        .set('Content-Type', 'application/json');

        const options = {
            headers,
            withCredentials: true
        };

        const data = {...args}

        return new Promise<any>((resolve: any, reject: any) => {
                this.http.post<any>(url, data, options)
                .pipe(
                    map((response: Response): Response => {
                        return resolve(response);
                    }),
                    catchError((response: Response) => {
                        return throwError(response)
                    }),
                    debounceTime(500)
                )
                .subscribe((response: any): void => {resolve(response);} , reject);
        });
    }
}
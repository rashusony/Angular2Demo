import { Injectable } from '@angular/core';
import { Iemployee } from './employee';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {

    constructor(private _http: Http) { }

    getEmployees(): Observable< Iemployee[] >{
        return this._http.get("https://localhost:44392/api/Employees")
            .map((response: Response) => <Iemployee[]>response.json());
    }

        getEmployeeByCode(empCode: string):Observable<Iemployee>
        {
            return this._http.get("https://localhost:44392/api/Employees/"+empCode)
                .map((response: Response) => <Iemployee>response.json());
        }

    
}
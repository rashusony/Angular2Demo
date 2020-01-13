import { Component, OnInit } from '@angular/core';
import { Iemployee } from './employee'
import { EmployeeService } from './employee.service'

@Component({
    selector: 'empWebApi-list',
    templateUrl: 'app/employee/testWebApi.component.html',
    styleUrls: ['app/employee/empList.component.css'],
    providers: [EmployeeService]

})

export class EmpListComponent implements OnInit {
    employees: Iemployee[];

    constructor(private _employeeService: EmployeeService) { }

    ngOnInit() {
        this._employeeService.getEmployees().subscribe((employeeData) => this.employees = employeeData);
    }
}
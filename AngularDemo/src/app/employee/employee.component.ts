import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iemployee } from './employee';
import { EmployeeService } from './employee.service'


@Component(
    {
        selector: 'emp-apps',
        templateUrl: 'app/employee/employee.component.html',
        styleUrls: ['app/employee/employee.component.css'],
        
    }
) 



export class employee implements OnInit {

    employees: Iemployee;

    CustomError: string='Loading Data Please Wait.....';

    constructor(private _employeeservice: EmployeeService, private _activeroute: ActivatedRoute, private _router: Router) { }

    OnBackButtonClick(): void {

        this._router.navigate(['/employee']);
    }

    ngOnInit() {
        let empCode: string = this._activeroute.snapshot.params['code'];

        this._employeeservice.getEmployeeByCode(empCode).subscribe(


            (employeedata) => {
                if (employeedata == null)
                {
                     this.CustomError = 'No employee with this id exsist';
                }
                else
                {
                     this.employees = employeedata
                }
            },
            (error) => this.CustomError = 'Not able to get the Employee Details'
        );
    }
    }
   

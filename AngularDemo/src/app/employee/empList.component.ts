import { Component, OnInit } from '@angular/core';
import { Iemployee } from './employee'
import { EmployeeService } from './employee.service'

@Component({
    selector: 'emp-list',
    templateUrl: 'app/employee/empList.component.html',
    styleUrls: ['app/employee/empList.component.css'],
    

})

export class EmployeeListComponent implements OnInit{
    employees: Iemployee[];
    
    selectedEmployeeCountRadioButton: string = 'All';

    constructor(private _employeeService: EmployeeService) { }

    ngOnInit() {
       this._employeeService.getEmployees().subscribe((employeeData) => this.employees = employeeData);
    }

    onEmployeeCountRadioButtonChange(selectRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectRadioButtonValue;
    }
    getTotalEmpCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmpCount(): number {
        return this.employees.filter(e => e.gender === "Male").length;
    }

    getTotalFemaleEmpCount(): number {
        return this.employees.filter(e => e.gender==="Female").length;
    }
    
}
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent }  from './app.component';
import { employee } from './employee/employee.component';
import { EmployeeListComponent } from './employee/empList.component';
import { EmployeeTitlePipe } from './employee/empTitle.pipe';
import { EmployeeCount } from './employee/empCount.component';
import { test } from './employee/test.component'
import { EmpListComponent } from './employee/testWebApi.component'
import { ErrorComponent } from './Shared/error.component'
import { HomePageComponent } from './Home/home.component'
import { EmployeeService } from './employee/employee.service'

import { FormsModule } from '@angular/forms';

const appRoutes: Routes=[
    { path: 'home', component: HomePageComponent },
    { path: 'employee/:code', component: employee},
    { path: 'employee', component: EmployeeListComponent },
    { path: '', redirectTo:'/Home', pathMatch: 'full' },
    { path: '**', component: ErrorComponent },
];
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes, { useHash:true })],
    declarations: [AppComponent, employee, EmployeeListComponent, EmployeeTitlePipe, EmployeeCount, test, EmpListComponent, ErrorComponent, HomePageComponent],
    bootstrap: [AppComponent],
    providers: [EmployeeService]
})
export class AppModule { }

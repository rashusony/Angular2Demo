"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var employee_component_1 = require("./employee/employee.component");
var empList_component_1 = require("./employee/empList.component");
var empTitle_pipe_1 = require("./employee/empTitle.pipe");
var empCount_component_1 = require("./employee/empCount.component");
var test_component_1 = require("./employee/test.component");
var testWebApi_component_1 = require("./employee/testWebApi.component");
var error_component_1 = require("./Shared/error.component");
var home_component_1 = require("./Home/home.component");
var employee_service_1 = require("./employee/employee.service");
var forms_1 = require("@angular/forms");
var appRoutes = [
    { path: 'home', component: home_component_1.HomePageComponent },
    { path: 'employee/:code', component: employee_component_1.employee },
    { path: 'employee', component: empList_component_1.EmployeeListComponent },
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: '**', component: error_component_1.ErrorComponent },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes, { useHash: true })],
            declarations: [app_component_1.AppComponent, employee_component_1.employee, empList_component_1.EmployeeListComponent, empTitle_pipe_1.EmployeeTitlePipe, empCount_component_1.EmployeeCount, test_component_1.test, testWebApi_component_1.EmpListComponent, error_component_1.ErrorComponent, home_component_1.HomePageComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [employee_service_1.EmployeeService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
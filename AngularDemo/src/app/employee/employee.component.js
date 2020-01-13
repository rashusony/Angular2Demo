"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var employee_service_1 = require("./employee.service");
var employee = /** @class */ (function () {
    function employee(_employeeservice, _activeroute, _router) {
        this._employeeservice = _employeeservice;
        this._activeroute = _activeroute;
        this._router = _router;
        this.CustomError = 'Loading Data Please Wait.....';
    }
    employee.prototype.OnBackButtonClick = function () {
        this._router.navigate(['/employee']);
    };
    employee.prototype.ngOnInit = function () {
        var _this = this;
        var empCode = this._activeroute.snapshot.params['code'];
        this._employeeservice.getEmployeeByCode(empCode).subscribe(function (employeedata) {
            if (employeedata == null) {
                _this.CustomError = 'No employee with this id exsist';
            }
            else {
                _this.employees = employeedata;
            }
        }, function (error) { return _this.CustomError = 'Not able to get the Employee Details'; });
    };
    employee = __decorate([
        core_1.Component({
            selector: 'emp-apps',
            templateUrl: 'app/employee/employee.component.html',
            styleUrls: ['app/employee/employee.component.css'],
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService, router_1.ActivatedRoute, router_1.Router])
    ], employee);
    return employee;
}());
exports.employee = employee;
//# sourceMappingURL=employee.component.js.map
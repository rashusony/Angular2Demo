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
var EmployeeCount = /** @class */ (function () {
    function EmployeeCount() {
        this.SelectedRadioButtonValue = 'All';
        this.countRadioButtonSelectionChanged = new core_1.EventEmitter();
    }
    EmployeeCount.prototype.onRadioButtonSelectionChanged = function () {
        this.countRadioButtonSelectionChanged.emit(this.SelectedRadioButtonValue);
        console.log(this.SelectedRadioButtonValue);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], EmployeeCount.prototype, "countRadioButtonSelectionChanged", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], EmployeeCount.prototype, "All", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], EmployeeCount.prototype, "Male", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], EmployeeCount.prototype, "Female", void 0);
    EmployeeCount = __decorate([
        core_1.Component({
            selector: 'employee-count',
            templateUrl: 'app/employee/empCount.component.html',
            styleUrls: ['app/employee/empCount.component.css']
        })
    ], EmployeeCount);
    return EmployeeCount;
}());
exports.EmployeeCount = EmployeeCount;
//# sourceMappingURL=empCount.component.js.map
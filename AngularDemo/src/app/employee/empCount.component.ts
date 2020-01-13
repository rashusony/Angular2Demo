import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'employee-count',
    templateUrl: 'app/employee/empCount.component.html',
    styleUrls: [ 'app/employee/empCount.component.css']
})

export class EmployeeCount {


    SelectedRadioButtonValue: string = 'All';

    @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();


    @Input()
    All: number;

    @Input()
    Male: number;

    @Input()
    Female: number;

    onRadioButtonSelectionChanged() {
        this.countRadioButtonSelectionChanged.emit(this.SelectedRadioButtonValue);
        console.log(this.SelectedRadioButtonValue);
    }

}
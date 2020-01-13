import { Component } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';

@Component({
    selector: 'test-demo',
    templateUrl: 'app/employee/test.component.html'
})

export class test {
    name: string = 'rashmi';
}
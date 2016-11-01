import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {
    isUpdateVisible: boolean = false;

    constructor() {
    }

    togglImage() {
        this.isUpdateVisible = !this.isUpdateVisible
    }
}
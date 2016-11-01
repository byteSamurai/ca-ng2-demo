import {Component} from "@angular/core";
import {ICNDBService} from "./icndb.service";
import {ICNDBResponse} from "./icndb.response";
import {Joke} from "./Joke";

@Component({
    moduleId: module.id,
    selector: 'icndb',
    templateUrl: 'icndb.component.html'
})
export class ICNDBComponent {
    private jokes: Joke[] = [];
    private icndbService: ICNDBService;
    private amount: number = 1;

    constructor(icndbService: ICNDBService) {
        this.icndbService = icndbService;
    }

    getJokes() {
        this.icndbService.getRandomJoke(this.amount).subscribe((e: ICNDBResponse)=> {
            this.jokes = ICNDBService.filterQuotes(e.value);
        });
    }
}
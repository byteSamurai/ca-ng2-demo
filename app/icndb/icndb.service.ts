import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Joke} from "./Joke";
import {Observable} from "rxjs/Observable";
import {ICNDBResponse} from "./icndb.response";
import "rxjs/add/operator/map";

@Injectable()
export class ICNDBService {
    static RAND_JOKE_URL: string = "http://api.icndb.com/jokes/random/";

    private httpService: Http;

    /**
     * constr
     * @param httpService
     */
    constructor(httpService: Http) {
        this.httpService = httpService;
    }

    /**
     * Liefert n Chuck-jokes
     * @param amount
     */
    public getRandomJoke(amount: number = 1): Observable<ICNDBResponse> {
        return this.httpService.get(ICNDBService.RAND_JOKE_URL + "/" + amount)
            .map((r: Response) =>r.json() as ICNDBResponse);
    }

    /**
     * Bereinigt Jokes um HTML-Quote-Entities
     * @param jokes
     * @returns {Array<Joke>}
     */
    public static filterQuotes(jokes: Array<Joke>): Array<Joke> {
        return jokes.map((e: Joke)=> {
            e.joke = e.joke.replace(/&quot;/g, "\"");
            return e;
        });
    }
}
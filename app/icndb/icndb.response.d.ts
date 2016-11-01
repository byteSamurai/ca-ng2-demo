import {Joke} from "./Joke";
export interface ICNDBResponse {
    type:string,
    value:Array<Joke>
}
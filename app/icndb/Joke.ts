export class Joke {
    public id:number;
    public joke:string;
    public categories:string[];

    constructor(id:number, joke:string, categories:string[]) {
        this.id = id;
        this.joke = joke;
        this.categories = categories;
    }
}
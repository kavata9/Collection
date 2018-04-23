export class Quote {
    public showDescription:boolean;

    constructor(public name: string, public author: string, public submit: string,public completeDate:Date){
        this.showDescription = false
    }
}

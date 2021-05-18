export class Page {
    title:string;

    constructor() {
        this.title = 'My Page'
    }

    open(path:string) {
        browser.url(path)
    }
}
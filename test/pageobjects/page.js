class Page {
    constructor() {
        this.title = 'My Page';
    }

    clickOn(item) {
        item.click();
    }
    
    open(path) {
        browser.url(path);
    }
}

module.exports = Page;
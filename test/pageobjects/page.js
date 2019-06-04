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
    
    textOf(item){
        return item.getText();
      }
}

module.exports = Page;
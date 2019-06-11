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
      
    valueSet(item, value){
        item.setValue(value);
    }

    valueGet(item){
        return item.getValue();
    }

    randomizer(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

module.exports = Page;
let page = require('./page');

class MainPage extends page {
    //case 1
    get usersCountMenu() { return $('#xp__guests__toggle'); }
    get usersChildNumber() {return $$('button.bui-stepper__add-button')[1];}
    get usersChildAssert() {return $$('span.bui-stepper__display')[1];}
    //case 2
    get searchField() {return $('#ss');}
    get searchButton() {return $('button.sb-searchbox__button');}
    //case 4
    get cityPostcard() {return  $$('div.promotion-postcard__small')[1];}
    
    textOf(item){
      return item.getText();
    }
    
     // case 3 preconditions
     startFromSearchPage(checkData){
        this.open('https://booking.com/');
        this.searchField.setValue(checkData);
        this.searchButton.waitForExist(3000);
        this.clickOn(this.searchButton);
    }
}

module.exports = new MainPage;
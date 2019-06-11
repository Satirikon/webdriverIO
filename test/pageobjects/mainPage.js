let page = require('./page');

class MainPage extends page {
    //case 1
    get usersCountMenu() { return $('#xp__guests__toggle'); }
    get usersChildCount() {return $$('button.bui-stepper__add-button')[1];}
    get usersChildOutput() {return $$('span.bui-stepper__display')[1];}
    //case 2
    get searchField() {return $('#ss');}
    get searchButton() {return $('button.sb-searchbox__button');}
    //case 4
    get cityPostcard() {return  $$('div.promotion-postcard__small')[1];}
    
     // case 3 preconditions
     startFromSearchResultsPage(checkData){
        this.searchField.setValue(checkData);
        this.searchButton.waitForExist(3000);
        this.clickOn(this.searchButton);
    }

    clearCookies(){
        browser.deleteCookies();
    }
}

module.exports = new MainPage;
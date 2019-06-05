let mainPage = require('../pageobjects/main');
let searchPage = require('../pageobjects/search');

describe('Booking.com case two', () => {
    mainPage.open('https://booking.com/');

    it('User is provided with the same search form at search results page', () => {       
        let checkData = 'Астурия';
        let searchField = mainPage.searchField;
        searchField.setValue(checkData);
        mainPage.clickOn(mainPage.searchButton);
        let checkSearchField = searchPage.searchField;

        //the same values provided inside the form at the left
        expect(checkSearchField.getValue()).toEqual(checkData);
    })
})
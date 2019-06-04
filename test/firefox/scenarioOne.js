let mainPage = require('../pageobjects/main');

describe('Booking.com case one', () => {
    mainPage.open('https://booking.com/');


    it('User is able to specify age of each child', () => {
        mainPage.clickOn(mainPage.usersCountMenu);
        mainPage.clickOn(mainPage.usersChildNumber);
        mainPage.clickOn(mainPage.usersChildNumber);
        let countChildren = mainPage.textOf(mainPage.usersChildAssert);

        //the number of age inputs is equal to N
        expect(countChildren).toBe('2');
    })
})
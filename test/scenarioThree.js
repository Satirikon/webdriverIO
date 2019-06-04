let mainPage = require('../pageobjects/main');
let searchPage = require('../pageobjects/search');

describe('Booking.com case three', () => {

    it('Resulting search entries are taken based on filter', async () => {
        
        let checkData = 'Валетта';
        mainPage.startFromSearchPage(checkData);
        searchPage.clickOn(searchPage.starsRate);
        let itemsCount = searchPage.getLength(searchPage.listOfHotels);
        //need timeout
        browser.pause(5000);
        let counterStars = searchPage.getLength(searchPage.hotelsWithStars);
        let counterUserRate = searchPage.getLength(searchPage.hotelsWithUserRate);
        
        //each hotel has chosen number of stars
        expect(counterStars+counterUserRate).toEqual(itemsCount)
    })

    it('Each hotel has rating corresponding to chosen',()=>{
        searchPage.clickOn(searchPage.closeCalendarBtn);
        searchPage.clickOn(searchPage.confirmDateButton);
        searchPage.clickOn(searchPage.hotelsQualityRate);
        
        let checkRate = searchPage.textOf(searchPage.hotelsQualityRate);
        checkRate = checkRate.split('');
        checkRate = checkRate[checkRate.length-2]
        checkRate = isNaN(checkRate) ? 0 : +checkRate;
        
        let hotelsList = searchPage.hotelsQualityList;
        let counter = 0;
        for (item of hotelsList){
        if(+item.getText() <= checkRate) counter++
        }

        //each hotel has rating corresponding to chosen
        expect(counter).toEqual(0);
    })
})
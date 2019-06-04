let mainPage = require('../pageobjects/main');
let searchPage = require('../pageobjects/search');

describe('Booking.com case three', () => {

    it('Resulting search entries are taken based on filter', async () => {
        
        let checkData = 'Valetta';
        mainPage.startFromSearchPage(checkData);
        searchPage.clickOn(searchPage.starsRate);
        let itemsCount = searchPage.getLength(searchPage.listOfHotels);
        //need timeout
        //browser.pause(4000);
        //let result = async () => await new Promise(resolve => setTimeout(resolve, 4000));
        let result = await setTimeout(() => {
            let counterStars = searchPage.getLength(searchPage.hotelsWithStars);
            let counterUserRate = searchPage.getLength(searchPage.hotelsWithUserRate);
          console.log('settimeout time'+Date.now);
            return counterStars + counterUserRate;
        }, 4000);
        console.log(itemsCount);
        console.log(result);
        console.log('current time'+Date.now);
        
        //each hotel has chosen number of stars
        expect(result).toEqual(itemsCount)
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
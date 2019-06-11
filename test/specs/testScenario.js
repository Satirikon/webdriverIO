const mainPage = require('../pageobjects/mainPage');
const searchResultsPage = require('../pageobjects/searchResultsPage');
const chai = require('chai')

describe('Booking.com testing', () => {

    beforeEach( () => {
        mainPage.clearCookies();
        mainPage.open('https://booking.com/');
    });

//     it('Case 1 - User is able to specify age of each child', () => {
//         const amountOfChildrenForInput = mainPage.randomizer(1,5);
        
//         mainPage.clickOn(mainPage.usersCountMenu);
//         for(let i=0; i< amountOfChildrenForInput; i++){
//             mainPage.clickOn(mainPage.usersChildCount);
//         }
//         const amountOfChildrenInOutput = mainPage.textOf(mainPage.usersChildOutput);

// // expect: the number of age inputs is equal to initial
//         chai.assert.equal(amountOfChildrenInOutput, amountOfChildrenForInput);
//     })

//     it('Case 2 - User is provided with the same search form at search results page', () => {       
//         const initialValue = 'Астурия';
//         const searchField = mainPage.searchField;
//         mainPage.valueSet(searchField, initialValue);
//         mainPage.clickOn(mainPage.searchButton);
//         const valueInSearchField = searchResultsPage.valueGet(searchResultsPage.searchField);

// // expect: the same values provided inside the form at the left
//         chai.assert.equal(valueInSearchField, initialValue);
//     })
    
//     it('Case 3 - Filtering and rating testing', () => {       
// //Resulting search entries are taken based on filter
//         const initialValue = 'Валетта';
//         mainPage.startFromSearchResultsPage(initialValue);
        
//         const randomRate = searchResultsPage.randomizer(1, searchResultsPage.getLength(searchResultsPage.variantsOfStarsRateCounter()));
//         searchResultsPage.clickOn(searchResultsPage.variantsOfStarsRateCounter()[randomRate]);
//         let hotelsStarsAmount = searchResultsPage.textOf(searchResultsPage.variantsOfStarsRateCounter()[randomRate]).split('');
//         if(isNaN(hotelsStarsAmount[0])) {
//             hotelsStarsAmount = 0;
//         } else {
//             hotelsStarsAmount = hotelsStarsAmount[0];
//         }
    

//         const allItemsOnPageCounter = searchResultsPage.getLength(searchResultsPage.listOfHotels);
//         //need timeout
//         browser.pause(5000);
//         const itemsWithStarsCounter = searchResultsPage.getLength(searchResultsPage.hotelsWithStars);
//         const itemsWithUserRateCounter = searchResultsPage.getLength(searchResultsPage.hotelsWithUserRate);
// // expect: every hotel in results list have stars or users rate
//         chai.assert.equal(itemsWithStarsCounter + itemsWithUserRateCounter, allItemsOnPageCounter);
        
//         let hotelsWithWrongStarsRate = 0;
//         for(let i = 1; i < itemsWithStarsCounter; i++){
//         if(searchResultsPage.elementTitle(searchResultsPage.hotelsWithStars[i]).split('')[0] < hotelsStarsAmount ) hotelsWithWrongStarsRate++
//         }
// // expect: no hotels with stars rate lower then picked
//         chai.assert.isNotOk(hotelsWithWrongStarsRate);

// // Each hotel has rating corresponding to chosen
//         searchResultsPage.clickOn(searchResultsPage.closeCalendarBtn);
//         searchResultsPage.clickOn(searchResultsPage.confirmDateButton);
//         searchResultsPage.clickOn(searchResultsPage.hotelsQualityRate);
        
//         let qualityRate = searchResultsPage.textOf(searchResultsPage.hotelsQualityRate).split('');
//         if(isNaN(qualityRate[qualityRate.length-2])) {
//             qualityRate = 0;
//         } else {
//             qualityRate = qualityRate[qualityRate.length-2];
//         }
        
//         let hotelsWithWrongQualityRate = 0;
//         for (item of searchResultsPage.hotelsQualityList){
//         if(+searchResultsPage.textOf(item) < qualityRate) hotelsWithWrongQualityRate++
//         }

// // expect: each hotel has rating corresponding to chosen
//         chai.assert.isNotOk(hotelsWithWrongQualityRate);
//     })
    
    it('Case 4 - Price visibility & calendar testing', () => {
//Price & calendar visibility
        let waiter = mainPage.cityPostcard;
        waiter.waitForExist(3000);
        mainPage.clickOn(mainPage.cityPostcard);
        const isCorrectTitleOfPage = searchResultsPage.pageTitle().includes('Забронируйте отель прямо сейчас!');
        let hotelsWhichPriceIsVisible; 
        if (searchResultsPage.getLength(searchResultsPage.PriceField)) {
            hotelsWhichPriceIsVisible = true;
        } else {
            hotelsWhichPriceIsVisible = false;
        }

// expect: page with listed hotels is opened
        chai.assert.isOk(isCorrectTitleOfPage);
// expect: calendar for specifying arrival date is opened
        chai.assert.isOk(Boolean(searchResultsPage.calendarWindow));
// expect: no result entry containing booking price or booking status
        chai.assert.isNotOk(hotelsWhichPriceIsVisible);

//Calendar for specifying arrival date is opened
        searchResultsPage.clickOn(searchResultsPage.closeCalendarBtn);
        searchResultsPage.clickOn(searchResultsPage.callCalendar);
  
// expect: calendar for specifying arrival date is opened
        chai.assert.isOk(Boolean(searchResultsPage.calendarWindow));

// Set any dates for check in and out
       const addRandomMonth = searchResultsPage.randomizer(1,9);
//Data diapazone calculating
       let currentDate = new Date();
       currentDate.setMonth(currentDate.getMonth()+addRandomMonth);
       let firstDayOfTargetMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1, 0, 0, 0, 0).getTime();
       firstDayOfTargetMonth = Number(String(firstDayOfTargetMonth).slice(1,7));
       let lastDayOfTargetMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0, 0, 0, 0, 0).getTime();
       lastDayOfTargetMonth = Number(String(lastDayOfTargetMonth).slice(1,7));


       for(let i=0; i< addRandomMonth; i++){
        searchResultsPage.clickOn($$('.c2-button-further')[0]);
       }
       let datesOfCurrentMonth = [];
       let unhandledDates = $$('td[class*="c2-day "]');
       for(item of unhandledDates){
           let temp = item.getAttribute('data-id').slice(1,7);
           if (temp > firstDayOfTargetMonth && temp < lastDayOfTargetMonth) datesOfCurrentMonth.push(item);
       }
       const randomInDate = searchResultsPage.randomizer(1, 25);
       const randomOutDate = searchResultsPage.randomizer(randomInDate, datesOfCurrentMonth.length);

        searchResultsPage.clickOn(datesOfCurrentMonth[randomInDate]);
        searchResultsPage.clickOn(searchResultsPage.fieldSecondDate);
        
           console.log(randomInDate);
           console.log(randomOutDate);
           browser.debug();
        searchResultsPage.clickOn(datesOfCurrentMonth[randomOutDate]);
        searchResultsPage.clickOn(searchResultsPage.confirmDateButton);
        browser.pause(5000);
        // const allItemsOnPageCounter = searchResultsPage.getLength(searchResultsPage.listOfHotels);
        // const checkItemsOnPageCounter = searchResultsPage.getLength(searchResultsPage.noRoomsHotels) + searchResultsPage.getLength(searchResultsPage.availableRoomsHotels);
      
// // expect: each result entry booking price or banner saying no free places
//         chai.assert.equal(checkItemsOnPageCounter, allItemsOnPageCounter);
      })
})
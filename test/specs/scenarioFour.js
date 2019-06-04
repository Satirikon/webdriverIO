let mainPage = require('../pageobjects/main');
let searchPage = require('../pageobjects/search');

describe('Booking.com case four', () => {
  mainPage.open('https://booking.com/');
  
    it('Price & calendar visibility', () => {
      browser.pause(3000);
      mainPage.clickOn(mainPage.cityPostcard);
      let isCorrectPage = browser.getTitle().includes('Book your hotel now!');
      let isPriceVisible = searchPage.getLength(searchPage.PriceField) ? 1 : 0;

      //page with listed hotels is opened
      expect(isCorrectPage).toBe(true);
      //calendar for specifying arrival date is opened
      expect(!!searchPage.calendarWindow).toBe(true);
      //no result entry containing booking price or booking status
      expect(isPriceVisible).toEqual(0);
    })

    it('Calendar for specifying arrival date is opened', () => {
      searchPage.clickOn(searchPage.closeCalendarBtn);
      searchPage.clickOn(searchPage.callCalendar);

      //calendar for specifying arrival date is opened
      expect(!!searchPage.calendarWindow).toBe(true);
    })

    it('Set any dates for check in and out', () => {
      searchPage.clickOn(searchPage.firstDate);
      searchPage.clickOn(searchPage.fieldSecondDate);
      searchPage.clickOn(searchPage.secondDate);
      searchPage.clickOn(searchPage.confirmDateButton);
      let itemsCount = searchPage.getLength(searchPage.listOfHotels);
      let checkCount = searchPage.getLength(searchPage.noRoomsHotels) + searchPage.getLength(searchPage.availableRoomsHotels);
      
      //each result entry booking price or banner saying no free places
      expect(checkCount).toEqual(itemsCount);
    })
})
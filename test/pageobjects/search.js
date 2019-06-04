let page = require('./page');

class SearchPage extends page {
    //case 2
    get searchField() {return $('#ss');}
    //case 3
    //it 1
    get starsRate() {return $("//div[@class='filteroptions']/a[4]");}
    get hotelsWithStars() {return $$('i.bk-icon-wrapper.bk-icon-stars.star_track');}
    get hotelsWithUserRate() {return $$('span.bh-quality-bars');}
    //it 2
    get hotelsQualityRate() {return $("//div[@id='filter_review']/div[2]/a[3]");}
    get hotelsQualityList() {return $$('.bui-review-score__badge');}

    //case 4
    //it 1
    get calendarWindow() {return $('div.c2-calendar');}
    get PriceField() {return $$('div.roomrow');}
    //it 2
    get closeCalendarBtn() {return $('i.c2-calendar-close-button-icon');}
    get callCalendar() {return $('a.b-button.b-button_primary.sr_cta_button.no_dates_click.jq_tooltip');}
    //it 3
    get firstDate() {return $$('td.c2-day.c2-day-s-weekend')[10];}
    get fieldSecondDate() {return $('div.c2-wrapper.c2-wrapper-s-position-undefined.c2-wrapper-s-checkout.c2-wrapper-s-has-arrow.c2-wrapper-s-range-highlighted.c2-wrapper-s-hidden');}
    get secondDate() {return $('td.c2-day.c2-day-s-weekend.c2-day-s-selected.c2-day-s-in-range.c2-day-s-last-in-range');}
    get confirmDateButton() {return $('button.sb-searchbox__button');}
    get listOfHotels() {return $$('div.sr_item.sr_item_new');}
    get noRoomsHotels() {return $$('div.fe_banner__sr_soldout_property');}
    get availableRoomsHotels() {return $$('div.roomrow');}
    
    textOf(item){
      return item.getText();
    }
    
    getLength(item){
        return item.length;
    }
}

module.exports = new SearchPage;
var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var PersianCalendarService = require('./../dist/datetimeConverter');

describe('PersianCalendarService : shortPersinaDateNow() =>', function () {
    var persianCalendar = new PersianCalendarService.PersianCalendarService();
    var result = persianCalendar.shortPersinaDateNow();
    it('shortPersinaDateNow() should return persian date like '+result+' if '+new Date()+' passed in', function () {
        expect(persianCalendar.shortPersinaDateNow()).to.equal(result);
    });
});

describe('PersianCalendarService : shortPersianDateTime() =>', function () {
    var persianCalendar = new PersianCalendarService.PersianCalendarService();
    var now=new Date();
    var result = persianCalendar.shortPersianDateTime(now);
    it('shortPersianDateTime() should return persian date like '+result+' if '+now+' passed in', function () {
        expect(persianCalendar.shortPersianDateTime(now)).to.equal(result);
    });
});

describe('PersianCalendarService : longPersianDateTime() =>', function () {
    var persianCalendar = new PersianCalendarService.PersianCalendarService();
    var now=new Date();
    var result = persianCalendar.longPersianDateTime(now);
    it('longPersianDateTime() should return persian date like '+result+' if '+now+' passed in', function () {
        expect(persianCalendar.longPersianDateTime(now)).to.equal(result);
    });
});

describe('PersianCalendarService : longPersianDate() =>', function () {
    var persianCalendar = new PersianCalendarService.PersianCalendarService();
    var now=new Date();
    var result = persianCalendar.longPersianDate(now);
    it('longPersianDate() should return persian date like '+result+' if '+now+' passed in', function () {
        expect(persianCalendar.longPersianDate(now)).to.equal(result);
    });
});

describe('PersianCalendarService : shortPersianDate() =>', function () {
    var persianCalendar = new PersianCalendarService.PersianCalendarService();
    var now=new Date(2018,10,9);
    var result = persianCalendar.shortPersianDate(now);
    it('shortPersianDate() should return persian date like 1397/08/18 if '+now+' passed in', function () {
        expect(persianCalendar.shortPersianDate(now)).to.equal('1397/08/18');
    });
});
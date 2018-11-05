'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');
describe('shortPersianDate function test', () => {
    it('should return 1397/08/14', () => {
        var result = index.shortPersianDate('2018/10/05');
        expect(result).to.equal('1397/08/14');
    });

});
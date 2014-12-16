/*global describe, it */
'use strict';
var assert = require('assert');
var slapdash = require('../lib');

describe('slapdash antepenultimate', function () {
    it('must have at least one test', function () {
        var result = slapdash.antepenultimate([1,2,3,4,5]);
        assert.equal( result, 3, 'I was too lazy to write any tests. Shame on me.');
    });
});


describe('slapdash aenultimate', function () {
    it('must have at least one test', function () {
        var result = slapdash.penultimate([1,2,3,4,5]);
        assert.equal( result, 4, 'I was too lazy to write any tests. Shame on me.');
    });
});
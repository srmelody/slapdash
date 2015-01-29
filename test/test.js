/*global describe, it */
'use strict';
var assert = require('assert');
var slapdash = require('../lib/slapdash');
describe('slapdash', function() {
	describe('#antepenultimate', function () {
	    it('should return two before the final element in the array', function () {
	        var result = slapdash.antepenultimate([1,2,3,4,5]);
	        assert.equal( result, 3);
	    });
	});


	describe('#penultimate', function () {
	    it('should return one before the final element in the array', function () {
	        var result = slapdash.penultimate([1,2,3,4,5]);
	        assert.equal( result, 4);
	    });
	});


	describe('#pentultimate', function () {
	    it('should return the fifth element', function () {
	        var result = slapdash.pentultimate([1,2,3,4,5,6]);
	        assert.equal( result, 5);
	    });
	    it('should return undefined for small collections', function() {
   			var result = slapdash.pentultimate([1,2,3,4]);
	       
	        assert.equal(result, undefined);

	    });
	});
});

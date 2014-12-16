/*global describe, it */
'use strict';
var assert = require('assert');
var slapdash = require('../');

describe('slapdash node module', function () {
    it('must have at least one test', function () {
        slapdash();
        assert(false, 'I was too lazy to write any tests. Shame on me.');
    });
});

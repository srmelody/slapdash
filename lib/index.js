'use strict';
var exports = module.exports;

exports.antepenultimate = function (arr) {
    if (arr.length > 2 ) {
    	var val = arr[arr.length - 3];
    	return val;
    }
    else {
    	return undefined;
    }
};


exports.penultimate = function (arr) {
    if (arr.length > 1 ) {
    	var val = arr[arr.length - 2];
    	return val;
    }
    else {
    	return undefined;
    }
};


'use strict';


module.exports = {
    antepenultimate : function(arr) {
        if (arr.length > 2 ) {
        	var val = arr[arr.length - 3];
        	return val;
        }
        else {
        	return undefined;
        }
    },


    penultimate : function (arr) {
        if (arr.length > 1 ) {
        	var val = arr[arr.length - 2];
        	return val;
        }
        else {
        	return undefined;
        }
    },


    pentultimate : function(arr) {
        if (arr.length >= 5 ) {
            var val = arr[4];
            return val;
        }
        else {
            return undefined;
        }

    }
};

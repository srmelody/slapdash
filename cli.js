#!/usr/bin/env node
'use strict';
var meow = require('meow');
var slapdash = require('./');

var cli = meow({
    help: [
        'Usage',
        '  slapdash <input>',
        '',
        'Example',
        '  slapdash Unicorn'
    ].join('\n')
});

slapdash(cli.input[0]);

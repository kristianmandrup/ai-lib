/*
 * ai-lib
 * https://github.com/kristianmandrup/ai-lib
 *
 * Copyright (c) 2016, Kristian Mandrup
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai'),
    expect = chai.expect;

chai.should();

var ai-lib = require('../lib/ai-lib.js');

describe('ai-lib module', function() {
    describe('#awesome()', function() {
        it('should return a hello', function() {
            expect(ai-lib.awesome('livia')).to.equal('hello livia');
        });
    });
});

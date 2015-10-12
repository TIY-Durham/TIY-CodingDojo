var test = require('mocha').it,
    expect = require('chai').expect,
    main = require('./main.js');

// main.hello(); // To test our sanity...

test('toFraction', function(){
  // Does this thing even exist?
  expect(main.toFraction).to.be.a('function');

  /**
   * toFraction accepts Numbers with two (2) decimal places
   * and any whole number value and produces a String
   * representation of JUST the decimal as a fraction.
   *
   * input | output
   * ==============
   *  0.00 | "00/100"
   *  0.01 | "01/100"
   *  1.23 | "23/100"
   *  0    | "00/100"
   *  0.99 | "99/100"
   *  1.00 | "00/100"
   * 3.349 | "34/100" or "35/100" ???
   */
}); // END toFraction

var test = require('mocha').it,
    expect = require('chai').expect,
    main = require('./main.js');

// main.hello(); // To test our sanity...

test('toFraction', function(){
  // Does this thing even exist?
  expect(main.toFraction).to.be.a('function');
}); // END toFraction

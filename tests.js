var test = require('mocha').it,
    expect = require('chai').expect,
    assert = require('chai').assert,
    main = require('./main.js');

// console.log('test.js');
// main.hello(); // Just a sanity check...
test('multiplesOf3', function(){
  // expect(main).to.be.undefined;
  // assert.isUndefined(main);

  expect(main.multiplesOf3).is.a('function');
  expect(main.multiplesOf3(3)).is.an('array');
  expect(main.multiplesOf3(3)).is.deep.equal([ ]);
});

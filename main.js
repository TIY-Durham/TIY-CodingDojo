;(function(globals){ // That IIFE though...
  // In Node JS: module.exports.hello = hello;
  // In Browser: window.hello = hello;
  globals.hello = hello;

  // In Node JS: module.exports.hello();
  // In Browser: window.hello();
  globals.hello();

  function hello(){
    console.log('Hello from main.js!');
  }
})(module && module.exports || window || this);
// Now we know a little more...

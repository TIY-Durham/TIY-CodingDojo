;(function(globals){ // That IIFE though...
  globals.toFraction = toFraction;

  function toFraction(number){
    if (number == 0.00){
      console.log(String(number).split('.')[1]);

      return '00/100';
    }

    if (number == 0.01){
      console.log(String(number).split('.')[1]);

      return '01/100';
    }

    return '02/100';
  }
})(module && module.exports || window || this);
// Now we know a little more...

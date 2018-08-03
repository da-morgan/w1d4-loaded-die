var countdownGenerator = function (x) {
  var counter = x;
  var returnMessage = "";

  return function(){

    if(counter > 0){
      returnMessage = "T-minus " + counter + "...";
      counter--;
    } else if(counter === 0){
      returnMessage = "Blast Off!";
      counter--;
    } else {
      returnMessage = "Rockets already gone, bub!";
    }


    return console.log(returnMessage);
  };
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!

// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
  // Step 1
  let message = "%c" + txt;

  // Step 2
  let style = `color: ${color};`;

  // Step 3
  style += `background: ${background};`;

  // Step 4
  style += `font-size: ${fontSize};`;

  // Step 5
  console.log(message, style);
}




// Task 2: Build another console log message generator
function celebrateStyler(reason) {
  // Step 1
  const fontStyle = "color: tomato; font-size: 50px";

  // Step 2
  if (reason == "birthday") {
    // Step 3
    console.log(`%cHappy birthday`, fontStyle);
  }
  // Step 4
  else if (reason == "champions") {
    // Step 5
    console.log(`%cCongrats on the title!`, fontStyle);
  }
  // Step 6
  else {
    console.log(`%cCelebrate!`, fontStyle);
  }
}



// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');



// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
  // Invoke the consoleStyler and celebrateStyler functions
  consoleStyler(color, background, fontSize, txt);
  celebrateStyler(reason);
}


// Call styleAndCelebrate
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');

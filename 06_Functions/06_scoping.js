//scoped to global/window
const sentence = "I read the Metro daily.";

//scoped to function
function read() {
  let sentence = "I read the Times daily";
  sentence = "I read the Sun";
  console.log(sentence);
}

//x variable is scoped to for loop block
function doALoop() {
  for (let i = 0; i < 5; i++) {
    let x = i;
    console.log(x);
  }
  console.log(x);
}

doALoop();

//this shows that var is function scoped
function doALoop() {
  for (let i = 0; i < 5; i++) {
    var x = i;
    console.log(x);
  }
  console.log(x);
}
doALoop();

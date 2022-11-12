//Function Scope
function loop() {
    for( var i = 0; i < 5; i++) {
      console.log(i);
    }
    console.log("final==",i)
  }
// my ans  final == 5
loop()
  
  //Block Scope
  function loop2() {
    for( let i = 0; i < 5; i++) {
      console.log(i);
    }
    console.log("final == ",i)
  }

//my ans   reference error
loop2()
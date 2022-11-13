// bind

const obj = {
    name: 'Billy',
    sing: function() {
      console.log(this) // in this case, it's a method on an object.
      var anotherFunc = function() {
        console.log(this)// this points to windows!
      }
      return anotherFunc.bind(this)
    }
  }


//   call/apply

const wizard = {
    name: 'Merlin',
    health: 100,
    heal: function(num1, num2) {
      this.health += num1 + num2;
    }
  }
  
  const archer = {
    name: 'Robin Hood',
    health: 50
  }
  
  wizard.heal.call(archer, 50, 60)
  wizard.heal.apply(archer, [20, 30])
  archer
  // function borrowing
  
  const healArcher = wizard.heal.bind(archer, 50, 60);
  console.log(archer)
  healArcher()
  console.log(archer)


//   bind curring

function multiply(a, b) {
    return a*b;
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4));

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));

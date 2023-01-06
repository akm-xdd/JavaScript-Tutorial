// Task 1
function logDairy() {
  var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

  for (const item of dairy) {
    console.log(item);
  }
}



// Task 2

logDairy();
function birdCan() {
  const animal = {
    canJump: true
  };

  const bird = Object.create(animal);
  bird.canFly = true;
  bird.hasFeathers = true;

  for (const [key, value] of Object.entries(bird)) {
    console.log(`${key}: ${value}`);
  }
}

birdCan();

// Task 3
function animalCan() {
  const animal = {
    canJump: true
  };

  const bird = Object.create(animal);
  bird.canFly = true;
  bird.hasFeathers = true;

  for (const key in bird) {
    console.log(`${key}: ${bird[key]}`);
  }
}

animalCan();


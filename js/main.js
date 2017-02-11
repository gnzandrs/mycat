// create the object in global scope
var Minino = new Cat('Minino', 13);

// buttons
var initButton, eatButton, danceButton, sleepButton;

function init () {
  var message = document.getElementById('message');
  message.innerHTML = Minino.name + ' was a very cute cat and he live wonderful until the age of ' + Minino.age;
  Minino.eat();

  initButton = document.getElementById('initButton');
  eatButton = document.getElementById('eatButton');
  danceButton = document.getElementById('danceButton');
  sleepButton = document.getElementById('sleepButton');

  initButton.style.display = 'none';
  danceButton.style.display = '';
  eatButton.style.display = '';
  sleepButton.style.display = '';
}

function dance () {
  Minino.dance();
  danceButton.style.display = 'none';
  eatButton.style.display = '';
  sleepButton.style.display = '';
}

function eat () {
  Minino.eat();
  danceButton.style.display = '';
  eatButton.style.display = 'none';
  sleepButton.style.display = '';
}

function sleep () {
  Minino.sleep();
  danceButton.style.display = '';
  eatButton.style.display = '';
  sleepButton.style.display = 'none';
}

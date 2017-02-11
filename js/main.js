function init () {
  var message = document.getElementById('message');
  // create and call the object
  var Minino = new Cat('Minino', 13);
  message.innerHTML = Minino.name + ' was a very cute cat and he live wonderful until the age of ' + Minino.age;
  Minino.eat();
  var initButton = document.getElementById('initButton');
  initButton.style.display = 'none';
}

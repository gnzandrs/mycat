function despertar()
{
  var message = document.getElementById('message');

  // construct
  var Cat = function(name, age){

    this.name = name;
    this.age = age;

    if (typeof this.name != 'string')
    {
      message.innerHTML = 'The propety name have to be a string';
      exit();
    }

    if (typeof this.age != 'number')
    {
      message.innerHTML = 'The propety age have to be a number';
      exit();
    }

    // methods
    this.eat = function()
    {
      message.innerHTML = 'My dear cat ' + Minino.name + ' ate a cookie!';
      document.getElementById('imageAction').src = 'img/eating.gif';
    }
  }

  // create and call the object
  var Minino = new Cat('Minino', 13);
  message.innerHTML = Minino.name + ' was a very cute cat and he live wonderful until the age of ' + Minino.age;
  Minino.eat();

}

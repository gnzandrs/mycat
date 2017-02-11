// construct
function Cat (name, age ) {
  this.name = name;
  this.age = age;

  if (typeof this.name != 'string') {
		message.innerHTML = 'The propety name have to be a string';
		exit();
	}

  if (typeof this.age != 'number') {
    message.innerHTML = 'The propety age have to be a number';
    exit();
  }
};

Cat.prototype = {
  dance: function () {
    message.innerHTML = 'My dear cat ' + this.name + ' is dancing!';
    document.getElementById('imageAction').src = 'img/dance.gif';
  },

  eat: function () {
    message.innerHTML = 'My dear cat ' + this.name + ' ate a cookie!';
    document.getElementById('imageAction').src = 'img/eating.gif';
  },

  sleep: function () {
    message.innerHTML = 'My dear cat ' + this.name + ' is taking a nap!';
    document.getElementById('imageAction').src = 'img/sleeping.gif';
  }
};

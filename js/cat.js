// construct
function Cat (name, age ) {
  this.name = name;
  this.age = age;
};

Cat.prototype = {
  eat: function() {
    message.innerHTML = 'My dear cat ' + this.name + ' ate a cookie!';
    document.getElementById('imageAction').src = 'img/eating.gif';
  }
};

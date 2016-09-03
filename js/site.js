//Kế thừa trong JS ---> Kiểm tra các test trong test modult "Kế thừa trong JS"
var Mamal = function(name){
  this.name = name;
}

Mamal.prototype.getName = function () {
  return this.name;
};

Mamal.prototype.says = function () {
  return this.saying || '';
};


var Cat = function(name){
  this.name = name;
  this.saying = "Meoo.."
}

Cat.prototype = new Mamal();

Cat.prototype.purr = function(n){ //purr ở đây tiếng Anh nghĩa là tiếng kêu của mèo khi thích thú
  var i, s = '';
  for (i = 0; i < n; i += 1) {
  if (s) {
    s += '-';
  }
    s += 'r';
  }
  return s;
}

Cat.prototype.getName = function ( ) {
  return this.name +  ' says: ' +  this.says( ); //hàm says được kế thừa thừ Mamal
};

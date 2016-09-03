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
  } // đây là cách nối chuỗi rất hay, nếu dùng s+='r'+'-'; thì kết quả sau cùng phải cắt kí tự cuối --> mệt
  return s;
}

Cat.prototype.getName = function ( ) {
  return this.name +  ' says: ' +  this.says(); //hàm says được kế thừa thừ Mamal
};

//Dùng cách như trên thì cũng được, nhưng có vẻ gì đó khó hiểu, xa vời --> viết một hàm thực hiện việc kế thừa
Function.method('inherits', function(Parent){
  this.prototype = new Parent();
  return this;
});

//Vì hàm inherits trả về this nên ta có thể dùng hàm này kiểu cascade như sau:
var Dog = function(name){
  this.name = name;
  this.saying = "Gâu gâu..";
}.inherits(Mamal)
 .method('purr', function(){
     var i, s = '';
     for (i = 0; i < n; i += 1) {
     if (s) {
       s += '-';
     }
       s += 'ẳng';
     }
     return s;
 }).method('getName', function(){
   return this.name + ' says: ' + this.says();
 })

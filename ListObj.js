function ListObj () {
}

ListObj.prototype.addObj = function (name, type) {
if (name in listObj) {
     alert( "Объекст с таким именем существует! Укажите другое имя" );
   } else if (type === 'Лампа'){
      listObj[name] = new Illuminator(name, 0);
      drawing.draw(listObj);
   } else {
      alert( "Для этого объекта еще не добавлена обработка" );
   }
};
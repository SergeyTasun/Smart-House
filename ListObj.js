"use strict";

function ListObj () {}

ListObj.prototype.addObj = function (name, type) {
if (name in listObj) {
     alert( "Объекст с таким именем существует! Укажите другое имя" );
   
   } else if (type === 'Лампа'){
      listObj[name] = new Illuminator(name);
      drawing.draw(listObj);
   
   } else if (type === 'Обогреватель'){
      listObj[name] = new Heater(name);
      drawing.draw(listObj);
   
   } else if (type === 'Калорифер'){
      listObj[name] = new Сalorifier(name);
      drawing.draw(listObj); 
   
   } else {
      alert( "Для этого объекта еще не добавлена обработка" );
   }
};
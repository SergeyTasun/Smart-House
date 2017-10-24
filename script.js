"use strict";

var listObj = new ListObj();
var drawing = new Drawing();

function add() {
   var name = document.getElementById('new_Name').value;
   var type = document.getElementById('new_Type').value;
   listObj.addObj(name, type);  
}

listObj.addObj("Лампа Зал", "Лампа");
listObj.addObj("Лампа Кухня", "Лампа");
listObj.addObj("Обогреватель", "Обогреватель");
listObj.addObj("Калорифер", "Калорифер");
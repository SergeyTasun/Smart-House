"use strict";

var listObj = new ListObj();
var drawing = new Drawing();

function add() {
   var name = document.getElementById('new_Name').value;
   var type = document.getElementById('new_Type').value;

   listObj.addObj(name, type);  
}
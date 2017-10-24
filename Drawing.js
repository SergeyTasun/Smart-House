"use strict";

function Drawing () {
   this._nameButtonDel          = "Удалить";
   this._nameButtonSwitch       = "Мягкий свет";
   this._nameButtonSwitchВright = "Яркий свет";
   this._nameButtonModePower    = "Режимы обогревателя";
   this._nameButtonFan          = "Режим вентилятора";
}

Drawing.prototype.draw = function (obj) {
   var wrappedD = document.getElementById("divWork");
   wrappedD.innerHTML = '';

   for (var name in obj) {
      var obj = listObj[name];
      var elem = document.createElement("div");

      if (obj instanceof Illuminator) {
         elem.innerHTML = obj.toString();
         this.addInput(elem, this._nameButtonSwitch, this.onSwitch.bind(obj))
         this.addInput(elem, this._nameButtonSwitchВright, this.onSwitchВright.bind(obj))
         this.addInput(elem, this._nameButtonDel, this.deleteObj.bind(obj))  
         wrappedD.appendChild(elem); 
      }  
         
      if (obj instanceof Heater) {
         elem.innerHTML = obj.toString();
         this.addInput(elem, this._nameButtonModePower, this.modePower.bind(obj))       
         this.addInput(elem, this._nameButtonDel, this.deleteObj.bind(obj))
         wrappedD.appendChild(elem);
      }  // если здесь написать "else"   - то код валиться и родительский класс отваливается
      
      if (obj instanceof Сalorifier){
         elem.innerHTML = obj.toString();
         this.addInput(elem, this._nameButtonModePower, this.modePower.bind(obj))
         this.addInput(elem, this._nameButtonFan, this.onFan.bind(obj))
         this.addInput(elem, this._nameButtonDel, this.deleteObj.bind(obj))
         wrappedD.appendChild(elem);
      }
   }
}

Drawing.prototype.addInput = function (elem, name, func) {
   var input = document.createElement("input"); 
   input.type = "button"; 
   input.value = name; 
   input.onclick = func; 
   elem.appendChild(input);
}

Drawing.prototype.deleteObj = function () {
   delete listObj[this._name];
   drawing.draw(listObj);
}

Drawing.prototype.onSwitch = function () {
   this.lightState(1);
   drawing.draw(listObj);
}

Drawing.prototype.onSwitchВright = function () {
   this.lightStateВright(1);
   drawing.draw(listObj);
}

Drawing.prototype.modePower = function () {
   this.powerMod(1);
   drawing.draw(listObj);
}

Drawing.prototype.onFan = function () {
   this.fanState(1);
   drawing.draw(listObj);
}
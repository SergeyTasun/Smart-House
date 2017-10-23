"use strict";

function Drawing () {}

Drawing.prototype.draw = function (obj) {
   var wrappedD = document.getElementById("divWork");
   wrappedD.innerHTML = '';

   for (var name in obj) {
      var obj = listObj[name];
      
      if (obj instanceof Illuminator){
          
         var elem = document.createElement("div");
         elem.innerHTML = obj.toString();
         wrappedD.appendChild(elem);
         
         var inputOn = document.createElement("input"); inputOn.type = "button"; inputOn.value = "Яркий свет"; inputOn.onclick = on.bind(obj); elem.appendChild(inputOn);
         function on () {
           this.lightState(1);
            drawing.draw(listObj);
         }
   
         var inputOn = document.createElement("input"); inputOn.type = "button"; inputOn.value = "Мягкий свет"; inputOn.onclick = on1.bind(obj); elem.appendChild(inputOn);
         function on1 () {
           this.lightState1(1);
            drawing.draw(listObj);
         }
         
         var inputOff = document.createElement("input"); inputOff.type = "button"; inputOff.value = "Удалить"; inputOff.onclick = deleteObj.bind(obj); elem.appendChild(inputOff);
         function deleteObj () {
           delete listObj[this._name];
            drawing.draw(listObj);
         }
      }
      
      if (obj instanceof Heater){
         
      var elem = document.createElement("div");
         elem.innerHTML = obj.toString();
         wrappedD.appendChild(elem);
         
         var inputOn = document.createElement("input"); inputOn.type = "button"; inputOn.value = "Режимы обогревателя"; inputOn.onclick = mode.bind(obj); elem.appendChild(inputOn);
         function mode () {
           this.powerMod(1);
            drawing.draw(listObj);
         }
         
         var inputOff = document.createElement("input"); inputOff.type = "button"; inputOff.value = "Удалить"; inputOff.onclick = deleteObj.bind(obj); elem.appendChild(inputOff);
         function deleteObj () {
           delete listObj[this._name];
            drawing.draw(listObj);
         }
      }

      if (obj instanceof Сalorifier){
         
      var elem = document.createElement("div");
         elem.innerHTML = obj.toString();
         wrappedD.appendChild(elem);
         
         var inputOn = document.createElement("input"); inputOn.type = "button"; inputOn.value = "Режим вентилятора"; inputOn.onclick = mode2.bind(obj); elem.appendChild(inputOn);
         function mode2 () {
           this.fanState(1);
            drawing.draw(listObj);
         }
 
         var inputOff = document.createElement("input"); inputOff.type = "button"; inputOff.value = "Удалить"; inputOff.onclick = deleteObj.bind(obj); elem.appendChild(inputOff);
         function deleteObj () {
           delete listObj[this._name];
            drawing.draw(listObj);
         }
      }
   }
}



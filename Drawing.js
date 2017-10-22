function Drawing () {

}

Drawing.prototype.draw = function (obj) {
   var wrappedD = document.getElementById("divWork");
   wrappedD.innerHTML = '';

   for (var name in obj) {
      var obj = listObj[name];
      
      if (obj instanceof Illuminator){   //// Узнаем тип объекта чтобы для него нарисовать отображение

         idLightState = "Illuminator_" + obj._name; 
                     
         id_B_ON = "Illuminator_" + obj._name +"_ON";
         id_B_OFF = "Illuminator_" + obj._name +"_OFF";  
         
         var elem = document.createElement("div");
         
         var Top =  obj.toString() + '<b><p id = "'+ idLightState +'"></b>' + obj._lightState + '</p>' ;
         var B_ON =  '<input type = "submint" id = "' + id_B_ON + '" value = "Включить"> ';
         var B_OFF = '<input type = "submint" id = "' + id_B_OFF + '" value = "Выключить">';
         elem.innerHTML = Top + B_ON + B_OFF;
         wrappedD.appendChild(elem);
         
         document.getElementById(id_B_ON).onclick = on.bind(obj);
         document.getElementById(id_B_OFF).onclick = off.bind(obj);
         
         function on () {
           this.lightState(1);
            drawing.draw(listObj);
         }
         
         function off () {
           this.lightState(0);
            drawing.draw(listObj);
         }
      }
   }
}



"use strict";

function Сalorifier(name) {
   Heater.call(this, name);
   this._fanState = new Switch();
}

Сalorifier.prototype = Object.create(Heater.prototype);
Сalorifier.prototype.constructor = Сalorifier;

Сalorifier.prototype.fanState = function(fanState) {
   return this._fanState.powerState(fanState); 
};

Сalorifier.prototype.toString = function () {
      return "</p>Калорифер с именем: [ " + this._name + " ]. Режим работы:  { " + this.powerMod() + " }. Режим вентилятора: { " + this.fanState() + " }</p>";
};
"use strict";

function Illuminator (name) {
   this._name = name;
   this._lightState = new Switch();
   this._lightState1 = new Switch();
}

Illuminator.prototype.lightState = function(lightState) {
   return this._lightState.powerState(lightState);
};

Illuminator.prototype.lightState1 = function(lightState) {
   return this._lightState1.powerState(lightState);
};

Illuminator.prototype.toString = function () {
      return "Лампа с именем: " + this._name + " [Явкий свет]:  " + this.lightState() + " [Мягкий свет]: " + this.lightState1()  + "</p>";
};
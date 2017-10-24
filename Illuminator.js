"use strict";

function Illuminator (name) {
   this._name = name;
   this._lightStateВright = new Switch();
   this._lightState = new Switch();
}

Illuminator.prototype.lightStateВright = function(lightState) {
   return this._lightStateВright.powerState(lightState);
};

Illuminator.prototype.lightState = function(lightState) {
   return this._lightState.powerState(lightState);
};

Illuminator.prototype.toString = function () {
      return "</p>Лампа с именем: [ " + this._name + " ]. Мягкий свет:  { " + this.lightState() + " }. Явкий свет: { " + this.lightStateВright()  + " }</p>";
};
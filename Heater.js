"use strict";

function Heater (name) {
   this._name = name;
   this._powerMod = new Mode();
}

Heater.prototype.powerMod = function(powerMod) {
   return this._powerMod.modeState(powerMod);
};

Heater.prototype.toString = function () {
      return "Обогреватель с именем: " + this._name + " [Режим работы]:  " + this.powerMod() + "</p>";
};
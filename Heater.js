function Heater (powerState) {
   this._powerState = powerState;
}

Heater.prototype.powerState = function (powerState) {
   if (powerState === 1 || powerState === 0) {
      this._powerState = powerState;
   } else {
      return this._powerState;
   }
};
function Сalorifier(powerState, fanState) {
   Heater.call(this, powerState);
   this._fanState = fanState;
}

Сalorifier.prototype = Object.create(Heater.prototype);
Сalorifier.prototype.constructor = Сalorifier;

Сalorifier.prototype.fanState = function (fanState) {
   if (fanState === 1 || fanState === 0) {
      this._fanState = fanState;
   } else {
      return this._fanState;
   }
};
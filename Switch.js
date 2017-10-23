"use strict";

function Switch () {
   this._powerState = 0;
}

Switch.prototype.powerState = function (powerState) {
   if (powerState === 1) {
      if (this._powerState === 1) {
         this._powerState = 0;
      } else {
         this._powerState = 1;
      }
   } else {
      return this._powerState;
   }
}
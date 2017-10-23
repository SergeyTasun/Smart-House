"use strict";

function Mode () {
   this._powerMod = 0;
}

Mode.prototype.modeState = function (modeState) {
   if (modeState === 1) {
      if (this._powerMod < 3){
         this._powerMod = this._powerMod + 1;
      } else {
         this._powerMod = 0;
      }
   } else {
      return this._powerMod;
   }
}


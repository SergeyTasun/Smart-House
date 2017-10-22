function Illuminator (name, lightState) {
   this._name = name;
   this._lightState = lightState;
}

Illuminator.prototype.lightState = function (lightState) {
   if (lightState === 1 || lightState === 0) {
      this._lightState = lightState;
   } else {
      return this._lightState;
   }
};

Illuminator.prototype.toString = function () {
      return "Объект -Illuminator- с именем: " + this._name + "   // Положенние выключателя:  " + this._lightState;

};
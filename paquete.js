"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Paquete = /** @class */ (function () {
    function Paquete(valor, peso) {
        this.dimension = 4;
        this.valor = valor;
        this.peso = peso;
    }
    ;
    Paquete.prototype.getValor = function () {
        return this.valor;
    };
    ;
    Paquete.prototype.setValorDimensiones = function (dimension) {
        if (dimension == "pequeño") {
            this.dimension = 3000;
        }
    };
    ;
    Paquete.prototype.valorDimension = function () {
        return this.dimension;
    };
    return Paquete;
}());
exports.default = Paquete;
//# sourceMappingURL=paquete.js.map
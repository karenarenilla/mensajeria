"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var paquete_1 = __importDefault(require("./paquete"));
var valor = 2;
var peso = 3;
var dimension = "pequeño";
var paquete = new paquete_1.default(valor, peso);
paquete.setValorDimensiones(dimension);
var crearPaquete = /** @class */ (function () {
    function crearPaquete() {
    }
    return crearPaquete;
}());
exports.default = crearPaquete;
//# sourceMappingURL=servicio.js.map
import Paquete from './paquete';
let valor: number = 2;
let peso: number = 3;
const dimension: string = "pequeño";
let paquete = new Paquete(valor,peso);
paquete.setValorDimensiones(dimension);
console.log(paquete.valorDimension);
export default class crearPaquete{
    
}

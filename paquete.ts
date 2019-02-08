export default class Paquete {
    public valor: number;
    public peso: number;
    public dimension: number = 4;
    constructor (valor: number, peso: number) {
        this.valor = valor;
        this.peso = peso;
    };
    getValor(): number {
        return this.valor;
    };
    setValorDimensiones(dimension: string): void {
        if(dimension == "pequeño"){
            this.dimension = 3000;
        }
    };
    valorDimension(){
        return this.dimension;
    }
}

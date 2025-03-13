// Exercício 1

// Interface Carro
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;
}

// Objeto meuCarro
const meuCarro: Carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2021,
    motor: '2.0'
};

console.log(meuCarro);

// Exercício 2

// Interface Multiplicação
interface Multiplicacao {
    (numero1: number, numero2: number): number;
}

const multiplicar: Multiplicacao = (numero1, numero2) => {
    return numero1 * numero2;
};

console.log(multiplicar(2, 3));
console.log(multiplicar(5, 4));
console.log(multiplicar(10, 0));
console.log(multiplicar(-3, 7));


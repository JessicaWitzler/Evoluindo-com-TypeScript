// Exercício 1
// Objeto meuCarro
var meuCarro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2021,
    motor: '2.0'
};
console.log(meuCarro);
var multiplicar = function (numero1, numero2) {
    return numero1 * numero2;
};
console.log(multiplicar(2, 3));
console.log(multiplicar(5, 4));
console.log(multiplicar(10, 0));
console.log(multiplicar(-3, 7));
// Exercício 3
// Função genérica 
function inverterArray(arr) {
    return arr.reverse(); // Usa o método reverse para inverter o array
}
// Testando a função
var numeros = [1, 2, 3, 4, 5];
var numerosInvertidos = inverterArray(numeros);
console.log(numerosInvertidos); // Resultado: [5, 4, 3, 2, 1]
var palavras = ['maça', 'banana', 'pera'];
var palavrasInvertidas = inverterArray(palavras);
console.log(palavrasInvertidas);
var RepositorioUsuario = /** @class */ (function () {
    function RepositorioUsuario() {
        this.usuarios = [];
    }
    // Salvar um usuário
    RepositorioUsuario.prototype.salvar = function (dado) {
        this.usuarios.push(dado);
    };
    RepositorioUsuario.prototype.obterTodos = function () {
        return this.usuarios;
    };
    return RepositorioUsuario;
}());
var repositorio = new RepositorioUsuario();
repositorio.salvar({ nome: 'João', email: 'joao@example.com' });
repositorio.salvar({ nome: 'Maria', email: 'maria@example.com' });
console.log(repositorio.obterTodos());

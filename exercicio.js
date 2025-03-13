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
    return arr.reverse();
}
// Testando a função
var numeros = [1, 2, 3, 4, 5];
var numerosInvertidos = inverterArray(numeros);
console.log(numerosInvertidos);
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
function processarResposta(resposta) {
    if (typeof resposta === 'string') {
        console.log("Resposta recebida como string: ".concat(resposta));
    }
    else if (typeof resposta === 'boolean') {
        if (resposta) {
            console.log('Resposta recebida como booleano: verdadeiro');
        }
        else {
            console.log('Resposta recebida como booleano: falso');
        }
    }
}
// Testa a função com diferentes valores
processarResposta('Operação concluída com sucesso');
processarResposta(true);
processarResposta(false);
var estudanteTrabalhador = {
    nome: 'Lucas Silva',
    curso: 'Engenharia de Software',
    empresa: 'Tech Solutions',
    cargo: 'Desenvolvedor Júnior'
};
console.log(estudanteTrabalhador);

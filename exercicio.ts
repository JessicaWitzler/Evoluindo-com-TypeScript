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

// Exercício 3

// Função genérica 
function inverterArray<T>(arr: T[]): T[] {
    return arr.reverse();
  }
  
  // Testando a função
  const numeros = [1, 2, 3, 4, 5];
  const numerosInvertidos = inverterArray(numeros);
  console.log(numerosInvertidos);
  
  const palavras = ['maça', 'banana', 'pera'];
  const palavrasInvertidas = inverterArray(palavras);
  console.log(palavrasInvertidas);

// Exercício 4

// Definindo a interface 
interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
  }
  

  interface Usuario {
    nome: string;
    email: string;
  }
  

  class RepositorioUsuario implements Repositorio<Usuario> {
    private usuarios: Usuario[] = [];
  
    // Salvar um usuário
    salvar(dado: Usuario): void {
      this.usuarios.push(dado);
    }
  
    obterTodos(): Usuario[] {
      return this.usuarios;
    }
  }
  

const repositorio = new RepositorioUsuario();
  
repositorio.salvar({ nome: 'João', email: 'joao@example.com' });
repositorio.salvar({ nome: 'Maria', email: 'maria@example.com' });
  
console.log(repositorio.obterTodos());


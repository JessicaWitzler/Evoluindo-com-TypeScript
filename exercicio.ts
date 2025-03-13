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

// Exercicio 5

// Criando RespostaServidor
type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor): void {
  if (typeof resposta === 'string') {
    console.log(`Resposta recebida como string: ${resposta}`);
  } else if (typeof resposta === 'boolean') {
    if (resposta) {
      console.log('Resposta recebida como booleano: verdadeiro');
    } else {
      console.log('Resposta recebida como booleano: falso');
    }
  }
}

// Testa a função com diferentes valores
processarResposta('Operação concluída com sucesso');
processarResposta(true); 
processarResposta(false);

// Exercício 6

// Tipo Estudante
interface Estudante {
    nome: string;
    curso: string;
}
  
// Tipo Trabalhador
interface Trabalhador {
    empresa: string;
    cargo: string;
}
  
// Intersection Type 
type EstudanteTrabalhador = Estudante & Trabalhador;
  
const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: 'Lucas Silva',
    curso: 'Engenharia de Software',
    empresa: 'Tech Solutions',
    cargo: 'Desenvolvedor Júnior'
}
  
console.log(estudanteTrabalhador);
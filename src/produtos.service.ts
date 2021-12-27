//Serviço dedicado para cuidar dos dados
import { Injectable } from "@nestjs/common";
import { Produto } from "./produto.model";

// Para definir um provider devemos usar o decorator @Injectable() que deve ser importado do pacote @nestjs/common.

@Injectable() //Tornando essa classe um Provider para injetar o serviço desta classe em outra classe.
export class ProdutosService {

    produtos: Produto[] = [
        new Produto("LIV01", "Livro TDD e BDD na prática", 29.90),
        new Produto("LIV02", "Livro iniciando com Flutter", 39.90),
        new Produto("LIV03", "Inteligência artificial como serviço", 49.90)
    ];

    obterTodos(): Produto[] {
        return this.produtos;
    }

    obterUm(id: number): Produto {
        return this.produtos[`${id}`];
    }

    cadastrar(produto: Produto) {
        this.produtos.push(produto);
        return 'Produto criado!';
    }

    alterarProduto(produto: Produto): Produto{
        return produto;
    }

    apagarProduto(id: number) {
        this.produtos.pop();
    }

}
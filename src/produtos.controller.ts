//Definição das rotas

import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "./produto.model";

@Controller('produtos') // Decorator que indica que esta classe é um controller. Receber a url como parâmetro.
export class ProdutosController {

    produtos: Produto[] = [
        new Produto("LIV01", "Livro TDD e BDD na prática", 29.90),
        new Produto("LIV02", "Livro iniciando com Flutter", 39.90),
        new Produto("LIV03", "Inteligência artificial como serviço", 49.90)
    ];

    @Get()
    obterTodos(): Produto[] {
        return this.produtos;
    }

    @Get(':id') //parâmetro será um ID
    obterUm(@Param() parametros): string {
        return this.produtos[`${parametros.id}`];
    }

    @Post()
    cadastrar(@Body() produto: Produto) {
        produto.id = 100;
        this.produtos.push(produto);
        return 'Produto criado!';
    }

    @Put()
    alterarProduto(@Body() produto: Produto): Produto{
        return produto;
    }

    @Delete(':id')
    apagarProduto(@Param() parametros) {
        this.produtos.pop();
    }

}
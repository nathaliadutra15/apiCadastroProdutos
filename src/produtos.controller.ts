//Definição das rotas

import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('produtos') // Decorator que indica que esta classe é um controller. Receber a url como parâmetro.
export class ProdutosController {
    @Get()
    obterTodos(): string {
        return 'Lista todos os produtos';
    }

    @Get(':id') //parâmetro será um ID
    obterUm(@Param() parametros): string {
        return `Retorna os dados do produto ${parametros.id}`;
    }

    @Post()
    cadastrar(@Body() produto): string {
        console.log(produto);
        return 'Produto criado!';
    }

    @Put()
    alterarProduto(@Body() produto): string {
        console.log(produto);
        return 'Produto atualizado!';
    }

    @Delete(':id')
    apagarProduto(@Param() parametros): string {
        return `Apaga o produto ${parametros.id}`;
    }

}
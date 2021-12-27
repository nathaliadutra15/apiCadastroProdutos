//Definição das rotas

import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "./produto.model";
import { ProdutosService } from "./produtos.service";

@Controller('produtos') // Decorator que indica que esta classe é um controller. Receber a url como parâmetro.
export class ProdutosController {

    constructor(private ProdutosService: ProdutosService) {
    }

    @Get()
    obterTodos(): Produto[] {
        return this.ProdutosService.obterTodos();
    }

    @Get(':id') //parâmetro será um ID
    obterUm(@Param() parametros): Produto {
        return this.ProdutosService.obterUm(parametros.id);
    }

    @Post()
    cadastrar(@Body() produto: Produto) {
        return this.ProdutosService.cadastrar(produto);
    }

    @Put()
    alterarProduto(@Body() produto: Produto): Produto {
        return this.ProdutosService.alterarProduto(produto);
    }

    @Delete(':id')
    apagarProduto(@Param() parametros) {
        return this.ProdutosService.apagarProduto(parametros.id);
    }

}
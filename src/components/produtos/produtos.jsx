import React from "react";
import { CardProdutos } from "../cardProdutos/cardProdutos";
import styled from "styled-components";




const ProdutosContainer = styled.div`
    padding: 20px;
    grid-area: produto;
    display: grid;
    grid-template-columns: repeat(auto-fit , minmax(220px, 280px));
    gap: 10px;
    font-family: 'Roboto', sans-serif;

`
export class Produtos extends React.Component {
    state = {

    }



    render() {


        return (
            <ProdutosContainer>
                {this.props.arrayDeProdutos.map(produto => {
                    return (
                        <CardProdutos
                            foto={produto.foto}
                            nomeDoProduto={produto.nome}
                            preco={produto.preco}
                        />
                    )
                })}
            </ProdutosContainer>
        )

    }
}
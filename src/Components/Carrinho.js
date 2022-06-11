import React from 'react'
import styled from 'styled-components'
import excluir from '../Assets/lixeira.svg'

const CarrinhoStyled = styled.div`
  display: block;
  width: 15rem;
  height: 20rem;
  padding: 1rem;
  margin-top: 200px;
  background-color: #14161a;
  border-radius: 15px;

  input {
    width: 80%;
  }
  h2 {
    padding: 0;
    margin: 5px;
    color: white;
  }
  p {
    display: inline;
    margin: 5px;
    color: gray;
  }
  img{
   cursor:pointer;
   width:1.3vw;
  }
`

class Carrinho extends React.Component {
  render() {
    let valorTotal = 0
    const arrayComprasCarrinho = this.props.carrinho.map((produto, index) => {
      valorTotal += produto.value * produto.quantidade
      return (
        <div key={index}>
          <div>
            <p>{produto.quantidade}</p>
            <p>{produto.name}</p>
            <img src={excluir} onClick={() => this.props.onClick(produto.id)}/>
          </div>
        </div>
      )
    })

    return (
      <CarrinhoStyled>
        <h2>Carrinho:</h2>
        {arrayComprasCarrinho}
        <p>Valor total: R$ {valorTotal}</p>
      </CarrinhoStyled>
    )
  }
}

export default Carrinho

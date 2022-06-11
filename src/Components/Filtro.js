import React from 'react'
import styled from 'styled-components'

const FiltroStyled = styled.div`
  display: block;
  flex-direction: column;
  width: 13rem;
  padding: 1rem;
  margin-top: 200px;
  
  

  input {
    padding: 0px;
     font-size: 17px;
     border-width: 1px;
     border-color: #ffffff;
     background-color: #333b49;
     color: #ffffff;
     border-style: groove;
     border-radius: 15px;
     box-shadow: 0px 0px 12px rgba(160,160,160,.53);
     text-shadow: 0px 0px 7px rgba(66,66,66,.75);
     :focus{
      outline:none;
     }
  
  }
 
  h2 {
    padding: 0;
    margin: 0;
    color: white;
  }
  p {
    color: gray;
  }
`

class Filtro extends React.Component {
  state = {
    valorMaximo: '',
    valorMinimo: '',
    buscarProduto: ''
  }

  onChangeValorMinimo = event => {
    this.setState({ valorMinimo: event.target.value })

    this.props.filtrarProdutos(
      this.state.valorMaximo,
      event.target.value,
      this.state.buscarProduto
    )
  }

  onChangeValorMaximo = event => {
    this.setState({ valorMaximo: event.target.value })

    this.props.filtrarProdutos(
      event.target.value,
      this.state.valorMinimo,
      this.state.buscarProduto
    )
  }

  onChangeBuscarProduto = event => {
    this.setState({ buscarProduto: event.target.value })

    this.props.filtrarProdutos(
      this.state.valorMaximo,
      this.state.valorMinimo,
      event.target.value
    )
  }

  render() {
    return (
      <FiltroStyled>
        <h2>Filtros</h2>
        <p>Valor mínimo:</p>
        <input
          type="number"
          value={this.state.valorMinimo}
          onChange={this.onChangeValorMinimo}
        />
        <p>Valor máximo:</p>
        <input
          type="number"
          value={this.state.valorMaximo}
          onChange={this.onChangeValorMaximo}
        />
        <p>Busca por nome:</p>
        <input
          value={this.state.buscarProduto}
          onChange={this.onChangeBuscarProduto}
        />
      </FiltroStyled>
    )
  }
}

export default Filtro

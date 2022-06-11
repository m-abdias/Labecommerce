import React from 'react'
import styled from 'styled-components'
import Carrinho from './Components/Carrinho'
import Filtro from './Components/Filtro'
import './app.css'

import Camisa1 from './img/camisa1.png'
import Camisa2 from './img/camisa2.png'
import Camisa3 from './img/camisa3.png'
import Camisa4 from './img/camisa4.png'
import Camisa5 from './img/camisa5.png'
import Camisa6 from './img/camisa6.png'
import Camisa7 from './img/camisa7.png'
import Camisa8 from './img/camisa8.png'
import Camisa9 from './img/camisa9.png'
import Camisa10 from './img/camisa10.png'
import Camisa11 from './img/camisa11.png'
import Camisa12 from './img/camisa12.png'
import Logo from './img/logo.png'

const Estilo = styled.div`
  display: flex;
  /* justify-content: left;
  flex-direction: row; */
  /* justify-content: space-between; */
  margin: 1rem;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
  padding: 20px;
  margin: 0;
  height: 100%;
`

const ProdutosStyled = styled.div`
  display: flex;
  padding: 10px;
  button {
    margin-top: 15px;
    box-shadow: inset 0px 1px 0px 0px #ffffff;
    background: linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
    background-color: #f9f9f9;
    border-radius: 6px;
    border: 1px solid #dcdcdc;
    display: inline-block;
    cursor: pointer;
    color: #666666;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 6px 20px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #ffffff;
  }
  button:hover {
    background: linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);
    background-color: #e9e9e9;
  }
  button:active {
    position: relative;
    top: 1px;
  }

  p {
    color: white;
    margin: 0;
  }
`
const Imagem = styled.img`
  height: 15rem;
`
const ImagemLogo = styled.img`
  display: flex;
  height: 10rem;
  margin: auto;
  padding: 0;
`

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  text-align: center;
`
const AreaProduto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: gray;
`
const Texto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h4 {
    padding-left: 3.5rem;
  }
`

const Section = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.1rem;
  height: 1.5rem;
  width: 30%;
  padding: 0px;
  font-size: 15px;
  border-width: 2px;
  border-color: #cccccc;
  color: #000000;
  border-style: solid;

  font-size: 17px;
  border-width: 1px;
  border-color: #ffffff;
  background-color: #333b49;
  color: #ffffff;
  border-style: groove;
  border-radius: 15px;
  box-shadow: 0px 0px 12px rgba(160, 160, 160, 0.53);
  text-shadow: 0px 0px 7px rgba(66, 66, 66, 0.75);
`

const produtos = [
  {
    id: 1,
    name: 'Astronauta com Balões',
    value: 80,
    imageUrl: <Imagem src={Camisa1} alt="Astronauta com Balões" />
  },
  {
    id: 2,
    name: 'Astronauta com Sorvete',
    value: 84,
    imageUrl: <Imagem src={Camisa2} alt="Astronauta com Sorvete" />
  },
  {
    id: 3,
    name: 'Astronauta to Earth',
    value: 95,
    imageUrl: <Imagem src={Camisa3} alt="Astronauta to Earth" />
  },
  {
    id: 4,
    name: 'Baby Astronauta',
    value: 59,
    imageUrl: <Imagem src={Camisa4} alt="Baby Astronauta" />
  },
  {
    id: 5,
    name: 'Nasa',
    value: 90,
    imageUrl: <Imagem src={Camisa5} alt="Nasa" />
  },
  {
    id: 6,
    name: 'Espaço',
    value: 78,
    imageUrl: <Imagem src={Camisa6} alt="Espaço" />
  },
  {
    id: 7,
    name: 'Astronauta Usain Bolt',
    value: 69,
    imageUrl: <Imagem src={Camisa7} alt="Astronauta Usain Bolt" />
  },
  {
    id: 8,
    name: 'Universo',
    value: 75,
    imageUrl: <Imagem src={Camisa8} alt="Universo" />
  },
  {
    id: 9,
    name: 'Astronauta na Bike',
    value: 68,
    imageUrl: <Imagem src={Camisa9} alt="Astronauta na Bike" />
  },
  {
    id: 10,
    name: 'Raio x Astronauta',
    value: 77,
    imageUrl: <Imagem src={Camisa10} alt="Raio x Astronauta" />
  },
  {
    id: 11,
    name: 'Foto Astronauta',
    value: 56,
    imageUrl: <Imagem src={Camisa11} alt="Imagem do usuario" />
  },
  {
    id: 12,
    name: 'Camiseta Astronauta',
    value: 69,
    imageUrl: <Imagem src={Camisa12} alt="Imagem do usuario" />
  }
]

class App extends React.Component {
  state = {
    carrinho: [],
    produtos: [
      {
        id: 1,
        name: 'Astronauta com Balões',
        value: 80,
        imageUrl: <Imagem src={Camisa1} alt="Astronauta com Balões" />
      },
      {
        id: 2,
        name: 'Astronauta com Sorvete',
        value: 84,
        imageUrl: <Imagem src={Camisa2} alt="Astronauta com Sorvete" />
      },
      {
        id: 3,
        name: 'Astronauta to Earth',
        value: 95,
        imageUrl: <Imagem src={Camisa3} alt="Astronauta to Earth" />
      },
      {
        id: 4,
        name: 'Baby Astronauta',
        value: 59,
        imageUrl: <Imagem src={Camisa4} alt="Baby Astronauta" />
      },
      {
        id: 5,
        name: 'Nasa',
        value: 90,
        imageUrl: <Imagem src={Camisa5} alt="Nasa" />
      },
      {
        id: 6,
        name: 'Espaço',
        value: 78,
        imageUrl: <Imagem src={Camisa6} alt="Espaço" />
      },
      {
        id: 7,
        name: 'Astronauta Usain Bolt',
        value: 69,
        imageUrl: <Imagem src={Camisa7} alt="Astronauta Usain Bolt" />
      },
      {
        id: 8,
        name: 'Universo',
        value: 75,
        imageUrl: <Imagem src={Camisa8} alt="Universo" />
      },
      {
        id: 9,
        name: 'Astronauta na Bike',
        value: 68,
        imageUrl: <Imagem src={Camisa9} alt="Astronauta na Bike" />
      },
      {
        id: 10,
        name: 'Raio x Astronauta',
        value: 77,
        imageUrl: <Imagem src={Camisa10} alt="Raio x Astronauta" />
      },
      {
        id: 11,
        name: 'Foto Astronauta',
        value: 56,
        imageUrl: <Imagem src={Camisa11} alt="Imagem do usuario" />
      },
      {
        id: 12,
        name: 'Camiseta Astronauta',
        value: 69,
        imageUrl: <Imagem src={Camisa12} alt="Imagem do usuario" />
      }
    ]
  }

  filtrarProdutos = (valorMaximo, valorMinimo, buscarProduto) => {
    const listaDeProdutosExibidos = produtos.filter(produto => {
      if (
        (produto.value >= Number(valorMinimo) || valorMinimo === '') &&
        (produto.value <= Number(valorMaximo) || valorMaximo === '') &&
        produto.name.toUpperCase().includes(buscarProduto.toUpperCase())
      ) {
        return produto
      }
    })

    console.log(valorMinimo)
    this.setState({
      produtos: listaDeProdutosExibidos
    })
  }

  verificaOrdemDosProdutos = event => {
    if (event.target.value === 'crescente') {
      this.crescente()
    } else if (event.target.value === 'decrescente') {
      this.decrescente()
    }
  }

  crescente = () => {
    const produtosCrescente = this.state.produtos
    produtosCrescente.sort(function (a, b) {
      if (a.value < b.value) {
        return -1
      }
      if (a.value > b.value) {
        return 1
      }
      return 0
    })

    this.setState({
      produtos: produtosCrescente
    })
  }

  decrescente = () => {
    const produtosDecrescente = this.state.produtos
    produtosDecrescente.sort(function (a, b) {
      if (a.value > b.value) {
        return -1
      }
      if (a.value < b.value) {
        return 1
      }
      return 0
    })

    this.setState({
      produtos: produtosDecrescente
    })
  }

  adicionarCarrinho = id => {
    const carrinhoCompras = this.state.carrinho.find(
      produto => id === produto.id
    )
    if (carrinhoCompras) {
      const novoCarrinho = this.state.carrinho.map(produto => {
        if (id === produto.id) {
          return {
            ...produto,
            quantidade: produto.quantidade + 1
          }
        }
        return produto
      })
      this.setState({ carrinho: novoCarrinho })
    } else {
      const novoProduto = this.state.produtos.find(produto => id === produto.id)
      const novoCarrinho = [
        ...this.state.carrinho,
        { ...novoProduto, quantidade: 1 }
      ]
      this.setState({ carrinho: novoCarrinho })
    }
  }

  removerProduto = id => {
    const deletaProduto = this.state.carrinho
      .map(produto => {
        if (produto.id === id) {
          return {
            ...produto,
            quantidade: produto.quantidade - 1
          }
        }
        return produto
      })
      .filter(produto => produto.quantidade > 0)
    this.setState({ carrinho: deletaProduto })
  }

  render() {
    const listaDeProdutos = this.state.produtos.map((produto, index) => {
      return (
        <ProdutosStyled key={index}>
          <div>
            <div>{produto.imageUrl}</div>
            <p>{produto.name}</p>
            <p>Valor: R$ {produto.value}</p>
            <button
              onClick={() => {
                this.adicionarCarrinho(produto.id)
              }}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </ProdutosStyled>
      )
    })

    return (
      <Estilo>
        <div>
          <Filtro filtrarProdutos={this.filtrarProdutos} />
        </div>

        <AreaProduto>
          <div>
            <ImagemLogo src={Logo} />
            <p>Camisa AstroLab feitas especialmente para você.</p>
          </div>
          <Texto>
            <h4>Quantidade de produtos: {this.state.produtos.length}</h4>
            <h4>Ordenação:</h4>
            <Section onChange={this.verificaOrdemDosProdutos}>
              <option value="crescente">Crescente</option>
              <option value="decrescente">Decrescente</option>
            </Section>
          </Texto>
          <Card>{listaDeProdutos}</Card>
        </AreaProduto>

        <div>
          <Carrinho
            carrinho={this.state.carrinho}
            onClick={this.removerProduto}
          ></Carrinho>
        </div>
      </Estilo>
    )
  }
}

export default App

'use strict'

import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <div className='search'>
          <input
            type='search'
            placeholder='Digite o nome do usuário'
          />
        </div>
        <div className='user-info'>
          <img src='https://avatars3.githubusercontent.com/u/3951564?v=4' />
          <h1>
            <a href='https://github.com/rafaellbarros'> Rafael Barros</a>
          </h1>

          <ul className='repos-info'>
            <li>Repositórios: 64</li>
            <li>Seguidores: 8</li>
            <li>Seguindo: 13</li>
          </ul>

          <div className='actions'>
            <button>Ver repositórios</button>
            <button>Ver favoritos</button>
          </div>

          <div className='repos'>
            <h2>Repositórios:</h2>
            <ul>
              <li><a href='#'>Nome do repositório</a></li>
            </ul>
          </div>

          <div className='starred'>
            <h2>Favoritos:</h2>
            <ul>
              <li><a href='#'>Nome do repositório</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App

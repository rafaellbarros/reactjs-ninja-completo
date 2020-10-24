'use strict'

import React, { Component } from 'react'
import Actions from './components/actions'
import Repos from './components/repos'
import Search from './components/search'
import UserInfo from './components/user-info'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Search />
        <UserInfo />
        <Actions />
        <Repos
          className='repos'
          title='Repositórios:'
          repos={[{
            name: 'Nome do repositório',
            link: '#'
          }]}
        />
        <Repos
          className='starred'
          title='Favoritos:'
          repos={[{
            name: 'Nome do repositório',
            link: '#'
          }]}
        />
      </div>
    )
  }
}

export default App

'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: ''
    }
  }

  render () {
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            console.log('event ', e)
          }}

          onChange={(e) => {
            console.log('name', e.target.name)
            console.log('value', e.target.value)
          }}
        >
          <input type='text' name='name' />
          <input type='email' name='email' />

          <input type='checkbox' onClick={(e) => console.log('click')} />
          <button type='submit'>Enviar</button>
        </form>
      </div>
    )
  }
}

export default App

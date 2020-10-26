'use strict'

import ajax from '@fdaciuk/ajax'
import React from 'react'

const Search = () => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do usuário'
      onKeyUp={(e) => {
        const value = e.target.value
        const keyCode = e.which || e.keyCode
        const ENTER = 13
        if (keyCode === ENTER) {
          ajax().get(`https://api.github.com/users/${value}`)
            .then((result) => {
              console.log(result)
            })
        }
        console.log(keyCode)
      }}
    />
  </div>
)

export default Search

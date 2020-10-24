'use strict'

import React from 'react'

const UserInfo = () => (
  <div className='user-info'>
    <img src='https://avatars3.githubusercontent.com/u/3951564?v=4' />
    <h1 className='username'>
      <a href='https://github.com/rafaellbarros'> Rafael Barros</a>
    </h1>

    <ul className='repos-info'>
      <li>Repositórios: 64</li>
      <li>Seguidores: 8</li>
      <li>Seguindo: 13</li>
    </ul>
  </div>
)

export default UserInfo

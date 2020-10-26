'use strict'

import ajax from '@fdaciuk/ajax'
import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: []
    }
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    if (keyCode === ENTER) {
      ajax().get(`https://api.github.com/users/${value}`)
        .then((result) => {
          const {
            name,
            login,
            followers,
            following
          } = result

          this.setState({
            userinfo: {
              username: name,
              photo: result.avatar_url,
              login,
              repos: result.public_repos,
              followers,
              following
            }
          })
        })
    }
  }

  getRepos (type) {
    return (e) => {
      ajax().get(`https://api.github.com/users/${this.state.userinfo.login}/${type}`)
        .then((result) => {
          console.log('result ', result)
          this.setState({
            [type]: result.map((repo) => ({
              name: repo.name,
              link: repo.html_url
            }))
          })
        })
    }
  }

  render () {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
      />
    )
  }
}

export default App

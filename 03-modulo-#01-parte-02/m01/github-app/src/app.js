'use strict'

import ajax from '@fdaciuk/ajax'
import React, { Component } from 'react'
import AppContent from './components/app-content'

/*
const App = React.createClass({
  handleSearch: function (e) {
    this.setState({})
  },

  render () {
    return <button  onClick={this.handleSearch}>Clique</button>
  }
})
*/

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }
    this.onHandleSearch = this.handleSearch.bind(this)
  }

  getGitHubApiUrl (username, type) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}`
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      this.setState({ isFetching: true })
      ajax().get(this.getGitHubApiUrl(value))
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
            },
            repos: [],
            starred: []
          })
        })
        .always(() => this.setState({ isFetching: false }))
    }
  }

  getRepos (type) {
    return (e) => {
      const username = this.state.userinfo.login
      ajax().get(this.getGitHubApiUrl(username, type))
        .then((result) => {
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
        {...this.state}
        isFetching={this.state.isFetching}
        handleSearch={this.onHandleSearch}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
      />
    )
  }
}

export default App

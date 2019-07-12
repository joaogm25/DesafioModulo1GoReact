import React, { Fragment, Component } from 'react'
import Dados from './Data'
import Header from './Header'
import Post from './Post'

export default class App extends Component {
  state = {
    Dados
  }

  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <div className="post-list">
            {this.state.Dados.map(post => (
              <Post key={post.name} data={post} />
            ))}
          </div>
        </main>
      </Fragment>
    )
  }
}

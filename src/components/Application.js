import React, { Component } from 'react'
import { firestore, auth } from '../firebase'

import { collectIdsAndDocs } from '../utils'
import Posts from './Posts'
import Authentication from './Authentication'

class Application extends Component {
  state = {
    posts: [],
    user: null
  }

  unsubscribeFromFirestore = null
  unsubscribeFromAuth = null

  componentDidMount = async () => {
    this.unsubscribeFromFirestore = firestore
      .collection('posts')
      .onSnapshot(snapshot => {
        const posts = snapshot.docs.map(collectIdsAndDocs)
        this.setState({ posts })
      })

    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ user })
    })
  }

  componentWillUnmount = () => {
    this.unsubscribeFromFirestore()
    this.unsubscribeFromAuth()
  }

  render() {
    const { posts, user } = this.state

    return (
      <main className="Application">
        <Authentication user={user} />
        <h1>Socialeyes</h1>
        <Posts posts={posts} user={user} />
      </main>
    )
  }
}

export default Application

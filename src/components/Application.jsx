import React, { Component } from 'react'
import { firestore } from '../firebase'

import { collectIdsAndDocs } from '../utils'
import Posts from './Posts'

class Application extends Component {
  state = {
    posts: []
  }

  componentDidMount = async () => {
    const snapshot = await firestore.collection('posts').get()
    const posts = snapshot.docs.map(collectIdsAndDocs)
    console.log('posts', posts)
    this.setState({ posts })
  }

  handleCreate = async post => {
    const { posts } = this.state

    const docRef = await firestore.collection('posts').add(post)

    const doc = await docRef.get()

    const newPost = collectIdsAndDocs(doc)

    this.setState({ posts: [newPost, ...posts] })
  }

  handleDelete = async id => {
    const allPosts = this.state.posts

    await firestore.doc(`posts/${id}`).delete()

    const posts = allPosts.filter(post => post.id !== id)
    this.setState({ posts })
  }

  render() {
    const { posts } = this.state

    return (
      <main className="Application">
        <h1>Socialeyes</h1>
        <Posts
          posts={posts}
          onCreate={this.handleCreate}
          onDelete={this.handleDelete}
        />
      </main>
    )
  }
}

export default Application

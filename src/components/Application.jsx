import React, { useContext } from 'react'
import Posts from './Posts'
import PostsContext from '../context/postsContext'

const Application = () => {
  const { state, dispatch } = useContext(PostsContext)
  const { posts } = state

  const handleCreate = post => {
    dispatch({ type: 'CREATE_POST', post })
  }

  return (
    <main className="Application">
      <h1>Think Piece</h1>
      <Posts posts={posts} onCreate={handleCreate} />
    </main>
  )
}

export default Application

import React, { useReducer, useContext } from 'react'
import { render } from 'react-dom'
import PostsContext from './context/postsContext'
import postsReducer from './reducers/postsReducer'

import './index.scss'

import Application from './components/Application'

const Store = () => {
  const initialState = useContext(PostsContext)
  const [state, dispatch] = useReducer(postsReducer, initialState)
  return (
    <PostsContext.Provider value={{ state, dispatch }}>
      <Application />
    </PostsContext.Provider>
  )
}

render(<Store />, document.getElementById('root'))

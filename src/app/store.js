import { configureStore } from '@reduxjs/toolkit'
import postReducer from '../features/posts/postSlice'

const reducer = {
  posts: postReducer,
}

export default configureStore({
  reducer,
})

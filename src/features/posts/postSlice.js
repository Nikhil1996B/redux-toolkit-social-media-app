import { createSlice, nanoid } from '@reduxjs/toolkit'
// import { sub } from 'date-fns'

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
}

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          id: nanoid(),
          date: new Date().toISOString(),
          title,
          content,
          user: userId,
          reactions: {
            thumbsUp: 0,
            hooray: 0,
            heartClassic: 0,
            rocket: 0,
            eyes: 0,
          },
        }
      },
    },
    postUpdated: (state, action) => {
      const { id, title, content } = action.payload
      const existingPost = state.posts.find((post) => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    },
    reactionAdded: (state, action) => {
      const { postId, reaction } = action.payload
      const existingPost = state.posts.find((post) => post.id === postId)
      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    },
  },
})

export default postSlice.reducer
export const selectAllPosts = (state) => state.posts.posts
export const selectPostsById = (state, postId) =>
  state.posts.posts.find((post) => post.id === postId)
export const { postAdded, postUpdated, reactionAdded } = postSlice.actions

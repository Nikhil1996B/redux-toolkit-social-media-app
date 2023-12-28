import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, title: 'First post', content: 'Bitcoin to the moon' },
  { id: 2, title: 'Second post', content: 'New things' },
]

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: (state, action) => {
      state.push(action.payload)
    },
    postUpdated: (state, action) => {
      const { id, title, content } = action.payload
      const existingPost = state.find((post) => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    },
  },
})

export default postSlice.reducer

export const { postAdded, postUpdated } = postSlice.actions
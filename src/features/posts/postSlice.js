import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
  {
    id: 1,
    title: 'First post',
    content: 'Bitcoin to the moon',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: 2,
    title: 'Second post',
    content: 'New things',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
]

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          id: nanoid(),
          date: new Date().toISOString(),
          title,
          content,
          user: userId,
        }
      },
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

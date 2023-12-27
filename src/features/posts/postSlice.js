import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, title: 'First post', content: 'Bitcoin to the moon' },
  { id: 2, title: 'Second post', content: 'New things' },
]

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
})

export default postSlice.reducer

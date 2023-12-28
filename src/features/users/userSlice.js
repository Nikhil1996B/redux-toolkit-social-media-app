import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', name: 'Jenkins' },
  { id: '2', name: 'Github' },
  { id: '3', name: 'Netlify' },
]

const usersSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {},
})

export default usersSlice.reducer

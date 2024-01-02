import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { cleint } from '../../api/client'

const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async (_, { getState }) => {
    const allNotifications = selectAllNotifications(getState())
    const [latestNotifications] = allNotifications
    const latestTimestamp = latestNotifications ? latestNotifications.date : ''
    const response = await client.get(
      `/fakeApi/notifications=${latestTimestamp}`
    )
    return response.data
  }
)

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.push(action.payload)
      state.sort((a, b) => b.date.localeCompare(a.date))
    })
  },
})

export default notificationsSlice.reducer
export const selectAllNotifications = (state) => state.notifications

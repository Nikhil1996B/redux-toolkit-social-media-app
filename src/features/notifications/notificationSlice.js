import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'

export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async (_, { getState }) => {
    const allNotifications = selectAllNotifications(getState())
    const [latestNotification] = allNotifications
    const latestTimestamp = latestNotification ? latestNotification.date : ''
    const response = await client.get(
      `/fakeApi/notifications?since=${latestTimestamp}`
    )
    return response.data
  }
)

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: [],
  reducers: {
    allNotificationsRead(state, action) {
      state.forEatch((notification) => {
        notification.read = true
      })
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.push(action.payload)
      state.sort((a, b) => b.date.localeCompare(a.date))
      state.forEatch((notification) => {
        notification.isNew = !notification.read
      })
    })
  },
})

export default notificationsSlice.reducer
export const { allNotificationsRead } = notificationsSlice.actions
export const selectAllNotifications = (state) => state.notifications

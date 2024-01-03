import { configureStore } from '@reduxjs/toolkit'
import postReducer from '../features/posts/postSlice'
import userReducer from '../features/users/userSlice'
import notificationsReducer from '../features/notifications/notificationSlice'

const reducer = {
  posts: postReducer,
  users: userReducer,
  notifications: notificationsReducer,
}

export default configureStore({
  reducer,
})

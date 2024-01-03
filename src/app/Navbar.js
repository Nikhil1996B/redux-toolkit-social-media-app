import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  fetchNotifications,
  selectAllNotifications,
} from '../features/notifications/notificationSlice'

export const Navbar = () => {
  const dispatch = useDispatch()
  let unreadNotificationsBadge

  const fetchNewNotifications = () => {
    dispatch(fetchNotifications())
    const notifications = useSelector(selectAllNotifications)
    const numUnreadNotifications = notifications.filter(
      (notification) => !notification.read
    ).length

    if (numUnreadNotifications > 0) {
      unreadNotificationsBadge = (
        <span className="badge">{numUnreadNotifications}</span>
      )
    }
  }

  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Post</Link>
            <Link to="/users">Users</Link>
            <Link to="/notifications">
              Notifications {unreadNotificationsBadge}
            </Link>
          </div>
        </div>
        <button className="button" onClick={fetchNewNotifications}>
          Refresh Notifications
        </button>
      </section>
    </nav>
  )
}

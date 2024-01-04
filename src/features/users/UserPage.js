import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userById } from './userSlice'
import { selectPostsByUser } from '../posts/postSlice'

export const UserPage = ({ match }) => {
  const { userId } = match.params
  const user = useSelector((state) => userById(state, userId))
  const posts = useSelector((state) => selectPostsByUser(state, userId))

  const postTitles = posts.map((post) => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ))
  return (
    <section>
      <h2>{user.name}</h2>
      <ul>{postTitles}</ul>
    </section>
  )
}

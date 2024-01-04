import React from 'react'
import { useSelector } from 'react-redux'
import { userById } from '../users/userSlice'

export const PostAuthor = ({ userId }) => {
  const author = useSelector((state) => userById(state, userId))

  return <span> by {author ? author?.name : 'Unkown author'}</span>
}

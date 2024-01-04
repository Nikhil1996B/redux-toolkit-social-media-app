import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAdded, addNewPost } from './postSlice'
import { selectAllUsers } from '../users/userSlice'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const dispatch = useDispatch()

  const users = useSelector(selectAllUsers)

  const onTitleChanged = (event) => setTitle(event.target.value)
  const onContentChanged = (event) => setContent(event.target.value)
  const onAuthorChanged = (event) => setUserId(event.target.value)
  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === 'idle'

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending')
        console.log(title, content, userId)
        await dispatch(addNewPost({ title, content, user: userId })).unwrap()
        setTitle('')
        setContent('')
        setUserId('')
      } catch (err) {
        console.error('failed to save post', err)
      } finally {
        setAddRequestStatus('idle')
      }
    }
    if ((title, content)) {
      dispatch(postAdded(title, content, userId))
      // reset after dispatch
      setTitle('')
      setContent('')
    }
  }

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <section>
      <h2>Add post</h2>
      <form>
        <label htmlFor="post-title">Post title:</label>
        <input
          type="text"
          id="post-title"
          name="post-title"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="post-content">Post Content:</label>
        <textarea
          type="text"
          id="post-content"
          name="post-content"
          value={content}
          onChange={onContentChanged}
        />
        <label htmlFor="author">Author</label>
        <select id="author" value={userId} onChange={onAuthorChanged}>
          <option value={''}></option>
          {userOptions}
        </select>
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  )
}

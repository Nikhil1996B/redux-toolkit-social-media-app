import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onTitleChanged = (event) => setTitle(event.target.value)
  const onContentChanged = (event) => setContent(event.target.value)

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
        <button type="button">Save Post</button>
      </form>
    </section>
  )
}

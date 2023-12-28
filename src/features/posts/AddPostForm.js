import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postAdded } from './postSlice'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  const onTitleChanged = (event) => setTitle(event.target.value)
  const onContentChanged = (event) => setContent(event.target.value)

  /*
  write a function onSavePostClicked that checks whether the
  title and content are both true and if so dispatches new post 
  with a random unique id and resets the state of title and content
  */
  const onSavePostClicked = () => {
    if ((title, content)) {
      dispatch(postAdded(title, content))
      // reset after dispatch
      setTitle('')
      setContent('')
    }
  }
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
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  )
}

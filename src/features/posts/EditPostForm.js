import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { postUpdated } from './postSlice'

export const EditPostForm = ({ match }) => {
  const { postId } = match.params
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === Number(postId))
  )
  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)
  const dispatch = useDispatch()
  const history = useHistory()
  const onTitleChanged = (event) => setTitle(event.target.value)
  const onContentChanged = (event) => setContent(event.target.value)

  const onEditPostClicked = () => {
    if ((title, content)) {
      const updatedPost = { id: post.id, title, content }
      dispatch(postUpdated(updatedPost))
      history.push(`/posts/${post.id}`)
      setTitle('')
      setContent('')
    }
  }

  return (
    <section>
      <h2>Edit post</h2>
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
        <button type="button" onClick={onEditPostClicked}>
          Edit Post
        </button>
      </form>
    </section>
  )
}

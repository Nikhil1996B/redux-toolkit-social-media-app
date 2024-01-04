import React, { useEffect } from 'react'
import { Spinner } from '../../components/Spinner'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButton } from './ReactionsButton'
import {
  selectAllPosts,
  fetchPosts,
  selectPostsById,
  selectPostByIds,
} from './postSlice'

let PostExcerpts = ({ postId }) => {
  const post = useSelector((state) => selectPostsById(state, postId))
  return (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
      <PostAuthor userId={post.user} />
      <TimeAgo timeStamp={post.date} />
      <ReactionButton post={post} />
    </article>
  )
}

PostExcerpts = React.memo(PostExcerpts)

export const PostsList = () => {
  const posts = useSelector(selectAllPosts)
  const dispatch = useDispatch()
  const orderedPostsIds = useSelector(selectPostByIds)
  const postStatus = useSelector((state) => state.posts.status)
  const error = useSelector((state) => state.posts.error)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [dispatch, postStatus])

  let content
  if (postStatus === 'loading') {
    content = <Spinner text="loading..." />
  } else if (postStatus === 'succeeded') {
    content = orderedPostsIds.map((postId) => (
      <PostExcerpts key={postId} postId={postId} />
    ))
  } else if (postStatus === 'error') {
    content = <div>{error}</div>
  }

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  )
}

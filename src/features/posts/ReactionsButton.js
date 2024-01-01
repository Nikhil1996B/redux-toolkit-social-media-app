import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './postSlice'

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🙌',
  heartClassic: '❤️',
  rocket: '🚀',
  eyes: '👀',
}

export const ReactionButton = ({ post }) => {
  const dispatch = useDispatch()

  const reactionButton = Object.entries(reactionEmoji).map(([name, emoji]) => (
    <button
      key={name}
      className="muted-button reaction-button"
      type="button"
      onClick={() =>
        dispatch(reactionAdded({ postId: post.id, reaction: name }))
      }
    >
      {emoji} {post.reactions[name]}
    </button>
  ))

  return <div>{reactionButton}</div>
}

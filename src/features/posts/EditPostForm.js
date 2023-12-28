import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { postUpdated } from './postSlice'

export const EditPostForm = ({match}) => {
    const {postId} = match.params;
    const post = useSelector(state => state.posts.find(post => post.id === postId))
    return (
        <section></section>
    )
}

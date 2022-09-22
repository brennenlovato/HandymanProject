import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'; 
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const Comments = () => {
  const [comments, setComments] = useState([])

  // useparams allow you to grab the ListId from the url
  const { listId } = useParams()
  // the list id should match with the what we have as a placeholder in the app

  // useLocation grab stuff we pass through state
  const location = useLocation()
  const { ListTitle } = location.state

  useEffect( () => {
    axios.get(`/api/services/${serviceId}/comments`)
      .then( res => setComments(res.data) )
      .catch( err => console.log(err))
  }, [])

  const addComment = (comment) => {
    axios.post(`/api/services/${serviceId}/comments`, { comment })
      .then( res => setComments([ ...comments, res.data ]))
      .catch( err => console.log(err))
  }

  const updateComment = (id, comment) => {
    axios.put(`/api/services/${serviceId}/comments/${id}`, { comment })
      .then( res => {
        const newUpdatedComments = comments.map( t => {
          if (t.id === id) {
            return res.data
          }
          return t
        })
        setComments(newUpdatedComments)
      })
      .catch( err => console.log(err))
  }

  const deleteComment = (id) => {
    axios.delete(`/api/services/${serviceId}/comments/${id}`)
      .then( res => {
        setComments(comments.filter( t => t.id !== id ))
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <CommentForm addComment={addComment} />
      <h1>{ServiceTitle} Comments</h1>
      <CommentList
        comments={comments}
        updateComment={updateComment} 
        deleteComment={deleteComment}
      />
    </>
  )
}

export default Comments;
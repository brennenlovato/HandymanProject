import { useState, useEffect } from 'react';

const CommentForm = ({ addComment, id, title, complete, rating, updateComment, setEdit }) => {
  const [comment, setComment] = useState({ title: '', complete: false, rating: 0 })
  
  useEffect( () => {
    if (id) {
      setComment({ title, complete, rating })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const { rating } = comment 
    if ( rating <= 0 || rating > 5) {
      alert('Hey rating has to be within 1-5')
    } else {
      if (id) {
        updateComment(id, comment)
        setEdit(false)
      } else {
        addComment(comment)
      }
      setComment({ title: '', complete: false, rating: 0 })
    }
  }

  return(
    <>
      <h1>{ id ? 'Edit' : 'Create' } Comment</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          name='title'
          value={comment.title}
          onChange={(e) => setComment({ ...todo, title: e.target.value })}
          required
        />
        <label>Completed?</label>
        <input
          type='checkbox'
          name='complete'
          checked={comment.complete}
          onChange={(e) => setComment({ ...comment, complete: e.target.checked })}
        />
        <label>Rating</label>
        <input
          type='number'
          name='rating'
          value={comment.rating}
          onChange={(e) => setComment({ ...comment, rating: parseInt(e.target.value) })}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default CommentForm;
import Moment from 'react-moment';
import { useState } from 'react';
import CommentForm from './CommentForm';
import { Link } from 'react-router-dom';

const CommentShow = ({ id, title, complete, rating, created_at, updateComment, deleteComment }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      { editing ?
        <>
          <CommentForm
            id={id}
            title={title}
            complete={complete}
            rating={rating}
            updateComment={updateComment}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>
            Cancel
          </button>
        </>
        :
        <>
          <h1>Comment# {id} {title}</h1>
          <p>{ complete ? "Completed" : "Not Completed" }</p>
          <p>{rating}/5</p>
          <p>
            Created At: 
            <Moment format='MM-DD-YYYY'>
              {created_at}
            </Moment>
          </p>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteComment(id)}>
            Delete
          </button>
          <Link to={`/${id}/services`}>
            <button>Services</button>
          </Link>
        </>
      } 
    </>
  )
}

export default CommentShow;
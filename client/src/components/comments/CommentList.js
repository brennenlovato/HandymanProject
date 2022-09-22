import CommentShow from './CommentShow';

const CommentList = ({ comments, updateComment, deleteComment }) => (
  <>
    { comments.map( t => 
      <CommentShow 
        key={t.id}
        {...t}
        // id={t.id} title={t.title} complete={t.complete} rating={t.rating} price={t.price} completed_at={t.completed_at}
        updateComment={updateComment}
        deleteComment={deleteComment}
      />
    )}
  </>
)

export default CommentList;
import { useState } from 'react';
import WorkerForm from './WorkerForm';
import { Link } from 'react-router-dom';

const WorkerShow = ({ id, title, desc, updateWorker, deleteWorker }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      { editing ?
        <>
          <WorkerForm 
            updateWorker={updateWorker}
            id={id}
            title={title}
            desc={desc}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>
            Cancel
          </button>
        </>
        :
        <div>
          <h1> {title} {desc}</h1>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteWorker(id)}>
            Delete
          </button>
          <Link
            to={`/${id}/todos`} //path of where its going to 
            // id the list id
            state={{ WorkerTitle: title }}
            // state only read only value to pass to the page
          >
            <button>Todos</button>
          </Link>
        </div>
      }
      <hr />
    </>
  )
}

export default WorkerShow;
import { useState } from 'react';
import ServiceForm from './ServiceForm';

const ServiceShow = ({ id, subject, body, updateService, deleteService }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      { editing ? 
        <>
          <ServiceForm
            id={id}
            subject={subject}
            body={body}
            updateService={updateService}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>
            Cancel
          </button>
        </>  
      : 
        <>
          <h1>Service #{id} {subject}</h1>
          <p>{body}</p>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteService(id)}>
            Delete
          </button>
        </>
      } 
    </>
  )
}

export default ServiceShow;
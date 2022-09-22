import { useState, useEffect } from 'react';
import axios from 'axios';
import WorkerForm from './WorkerForm';
import WorkerList from './WorkerList';
import WorkerShow from './WorkerShow';

const Workers = () => {
  const [workers, setWorkers] = useState([])

  useEffect( () => {
    axios.get('/api/workers')
      .then( res => setWorkers(res.data))
      .catch( err => console.log(err))
  }, [])

  const addWorkers = (workers) => {
    axios.post('/api/workers', { workers })
      .then( res => setWorkers([...workers, res.data]))
      .catch( err => console.log(err))
  }

  const updateWorkers = (id, worker) => {
    axios.put(`/api/workers/${id}`, { workers })
      .then( res => {
        const newUpdatedWorkers = workers.map( l => {
          if (l.id == id) {
            return res.data
          }
          return l
        })
        setWorkers(newUpdatedWorkers)
      })
      .catch( err => console.log(err))
  }

  const deleteWorkers = (id) => {
    axios.delete(`/api/workers/${id}`)
      .then( res => {
        setWorkers(workers.filter( l => l.id !== id))
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <WorkerForm addWorker={addWorker} />
      <h1>All Workers Show</h1>
      <WorkerList 
        workers={workers}
        updateWorkers={updateWorkers}
        deleteWorkers={deleteWorkers}
      />
    </>
  )
}

export default Workers;
import { useState } from 'react';

const WorkerForm = ({ addWorker }) => {
  const [worker, setWorker] = useState({ title: '', desc: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addWorker(worker)
    setWorker({ title: '', desc: '' })
  }

  return (
    <>
      <h1>Add Worker</h1>
      <form onSubmit={handleSubmit}>
        <input 
          name='title'
          value={worker.title}
          onChange={(e) => setWorker({ ...worker, title: e.target.value })}
          required
          placeholder='Worker name'
        />
        <textarea
          name='desc'
          value={list.desc}
          onChange={(e) => setWorker({ ...worker, desc: e.target.value })}
          required
          placeholder='description'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default WorkerForm;
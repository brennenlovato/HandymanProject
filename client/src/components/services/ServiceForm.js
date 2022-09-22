import { useState, useEffect } from 'react';

const ServiceForm = ({ addService, id, subject, body, updateService, setEdit }) => {
  const [service, setService] = useState({ subject: '', body: '' })

  useEffect( () => {
    if (id) {
      setService({ subject, body })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateService(id, service)
      setEdit(false)
    } else {
      addService(service)
    }
    setService({ subject: '', body: '' })
  }

  return (
    <>
      <h1>{ id ? 'Update' : 'Create' } Service</h1>
      <form onSubmit={handleSubmit}>
        <input 
          name='subject'
          value={service.subject} 
          onChange={(e) => setService({ ...service, subject: e.target.value })}
          required
          placeholder='Subject'
        />
        <textarea
          name='body'
          value={service.body} 
          onChange={(e) => setService({ ...service, body: e.target.value })}
          required
          placeholder='Body'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default ServiceForm;
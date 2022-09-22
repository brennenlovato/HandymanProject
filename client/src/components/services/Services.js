import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import ServiceList from './ServiceList';
import ServiceForm from './ServiceForm';

const Services = () => {
  const { commentId } = useParams();
  const [services, setServices] = useState([])

  useEffect( () => {
    axios.get(`/api/comments/${commentId}/services`)
      .then( res => setServices(res.data) )
      .catch( err => console.log(err) )
  }, [])

  const addService = (service) => {
    axios.post(`/api/comments/${commentId}/services`, { service })
      .then( res => setServices([...services, res.data]))
      .catch( err => console.log(err) )
  }

  const updateService = (id, service) => {
    axios.put(`/api/comments/${commentId}/services/${id}`, { service })
      .then( res => {
        const newUpdatedServices  = services.map(n => {
          if (n.id === id) {
            return res.data
          }
          return n
        })
        setServices(newUpdatedServices)
      })
      .catch( err => console.log(err) )
  }

  const deleteService = (id) => {
    axios.delete(`/api/comments/${commentId}/services/${id}`)
      .then( res => {
        setServices(notes.filter( n => n.id !== id ))
      })
      .catch( err => console.log(err) )
  }

  return (
    <>
      <ServiceForm addService={addService} />
      <h1>All Services for the Worker #{commentId}</h1>
      <ServiceList 
        services={services}
        updateService={updateService}
        deleteService={deleteService}
      />
    </>
  )
}

export default Services;
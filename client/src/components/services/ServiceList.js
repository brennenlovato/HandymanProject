import ServiceShow from './ServiceShow';

const ServiceList = ({ services, updateService, deleteService }) => (
  <>
    { services.map( n => 
      <ServiceShow
        key={n.id}
        {...n}
        updateService={updateService}
        deleteService={deleteService}
      />
    )}
  </>
)

export default ServiceList;
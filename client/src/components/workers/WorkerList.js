import WorkerShow from './WorkerShow';

const WorkerList = ({ workers, updateWorker, deleteWorker }) => (
  <>
    {
      workers.map( l => 
        <WorkerShow
          key={l.id}
          // id={l.id} title={l.title} desc={l.desc}
          {...l}
          updateWorker={updateWorker}
          deleteWorker={deleteWorker}
        />
      )
    }
  </>
)

export default WorkerList;
export default function TaskList({tasks, removeTask, editTask}) {
    if (tasks.length === 0){
        return <></>
    }
    return <>
    <div className="p-4 bg-light mb-5 border rounded">
    <h4 className="">Tasks</h4>
      <ul className="list-group">
        {tasks.map((item) => 
        <li className="list-group-item" key={item.uuid}>
            {item.priority && <span className="badge text-bg-secondary me-3">High Priority</span>}
            {item.task}

        <div className="btn-group float-end" role="group">
        <button className="btn btn-danger" onClick={() => removeTask(item.uuid)}>Delete</button>
        <button className="btn btn-info" onClick={() => editTask(item.uuid)}>Edit</button>

        </div>

        </li>)}
     </ul>
    </div>

    
    </>
}
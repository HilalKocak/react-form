export default function TaskList({tasks, removeTask}) {
    if (tasks.length === 0){
        return <></>
    }
    return <>
    <p className="lead">Tasks</p>
      <ul className="list-group my-5">
        {tasks.map((item, index) => <li className="list-group-item" key={index}>{item.task}
        <span className="btn btn-sm btn-danger float-end" onClick={() => removeTask(index)}>Delete</span>
        
        </li>)}
     </ul>
    
    </>
}
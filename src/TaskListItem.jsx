import TaskListItemIcon from "./TaskListItemIcon"

function TaskListItem({task, editTask, removeTask, doneTask}) {
    return (
    <li className={`list-group-item ${task.isDone && 'bg-success bg-gradient'}`}>

    {task.priority && 
    <span className="badge text-bg-secondary me-3">
    <TaskListItemIcon />
        High Priority
        </span>}
    {task.task}

        <div className="btn-group float-end" role="group">
        <button className="btn btn-sm btn-success" onClick={() => doneTask(task.uuid)}>Done</button>
        <button className="btn btn-sm btn-danger" onClick={() => removeTask(task.uuid)}>Delete</button>
        <button className="btn btn-sm btn-info" onClick={() => editTask(task.uuid)}>Edit</button>

        </div>

    </li>
    )
}

export default TaskListItem


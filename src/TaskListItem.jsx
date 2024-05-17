import TaskListItemIcon from "./TaskListItemIcon"

function TaskListtask({task}) {
    return (
    <li className="list-group-task">
    {task.priority && <span className="badge text-bg-secondary me-3">
    <TaskListItemIcon />
        High Priority</span>}
    {task.task}

<div className="btn-group float-end" role="group">
<button className="btn btn-danger" onClick={() => removeTask(task.uuid)}>Delete</button>
<button className="btn btn-info" onClick={() => editTask(task.uuid)}>Edit</button>

</div>

    </li>
    )
}

export default TaskListItem
import { useEffect } from "react"
import { useState } from "react"
import TaskListItem from "./TaskListItem"

export default function TaskList({tasks, removeTask, editTask, doneTask}) {
    const [priority, setPriority] = useState(false)
    const [filteredTasks, setFilteredTask] = useState(tasks)

    function handlePriorityFilter() {
        const newPriority = !priority
        newPriority ? setFilteredTask(tasks.filter(item => item.priority === true)) : setFilteredTask(tasks)
        setPriority(newPriority)
    }
    
    useEffect(() => {
        setFilteredTask(tasks)
    }, [tasks])
    
    useEffect(() => {
       
    }, [priority])
    
    if (tasks.length === 0){
        return <></>
    }
    return <>
    <div className="p-4 bg-light mb-5 border rounded">
    <h4 className="">Tasks
    <span onClick={handlePriorityFilter}
    className={`btn btn-sm ${!priority ? "btn-warning" : "btn-primary"} float-end`}>
        {priority ? "Show All" : "Priority tasks"}
    </span>
    </h4>
      <ul className="list-group">
        {filteredTasks.map((task) => 
            <TaskListItem 
            key={task.uuid} 
            task={task} 
            editTask={editTask} 
            removeTask={removeTask} 
            doneTask={doneTask}/>
    )}
     </ul>
    </div>

    
    </>
}
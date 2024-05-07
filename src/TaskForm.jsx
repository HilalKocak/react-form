import { useState } from "react"
import TaskList from "./TaskList"
import { v4 as uuidv4 } from 'uuid';

export default function TaskForm() {
    const emptyForm = {
        task: "",
        priority: false
    }
    const [formData, setFormData] = useState(emptyForm)
    const [tasks, setTasks]  = useState([])

    function removeTask(uuid){
        
        setTasks(prev => 
            prev.filter(item => item.uuid !== uuid)
        )
    }
    function editTask(uuid) {
        console.log("edit", uuid)
        const task = tasks.find(item => item.uuid === uuid)
        console.log(task)
        setFormData(task)
    }
    function handleInputChange(event) {
        

        setFormData(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
            }
        })

        
    }
    function handleFormSubmit(event) {
        
        event.preventDefault()
        // console.log("form data", formData)
        if(formData.task.length > 3){
            formData.uuid = uuidv4()
            setTasks(
                prev => [formData, ...prev ]
            )
            setFormData(emptyForm)
            event.target.reset()
        }
    }

    return <>
        <TaskList tasks={tasks} removeTask={removeTask} editTask={editTask}/>
        <form onSubmit={handleFormSubmit}>
        <div className="row mb-3">
            <label htmlFor="task" className="col-sm-2 col-form-label">Task</label>
            <div className="col-sm-10">
            <input type="text" className="form-control"
            value={formData.task}
            id="task" name="task" onChange={handleInputChange}/>
            </div>
        </div>


        <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="priority" name= "priority" 
                checked={formData.priority}
                onChange={handleInputChange}/>
                <label className="form-check-label" htmlFor="priority">
                High Priority
                </label>
            </div>
            </div>
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
        </form>
            
    </>   
}
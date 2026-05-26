import { useState } from 'react'

function Study() {

  const [tasks, setTasks] = useState([
    'Complete React Project',
    'Study Networking',
    'Prepare Presentation'
  ])

  const [newTask, setNewTask] = useState('')

  const addTask = () => {

    if(newTask.trim() === ''){
      return
    }

    setTasks([...tasks, newTask])

    setNewTask('')
  }

  return (

    <div className="container main-section">

      <h1 className="section-title">
        Study Planner
      </h1>

      {/* ADD TASK CARD */}

      <div className="feature-card">

        <h2 className="mb-4">
          📚 Add New Study Task
        </h2>

        <input
          type="text"
          placeholder="Enter study task"
          className="form-control mb-3"

          value={newTask}

          onChange={(e)=>
            setNewTask(e.target.value)
          }
        />

        <button
          className="btn btn-primary"
          onClick={addTask}
        >
          Add Task
        </button>

      </div>

      {/* TASKS CARD */}

      <div className="feature-card">

        <h2 className="mb-4">
          ✅ Study Tasks
        </h2>

        {tasks.map((task,index)=>(

          <div
            className="event-card"
            key={index}
          >

            <p className="task-text">
              📘 {task}
            </p>

          </div>

        ))}

      </div>

    </div>

  )
}

export default Study
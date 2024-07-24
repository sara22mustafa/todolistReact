import React,{ useState } from 'react';

function ToDoList(){
    // Whenever you need to change the list of tasks (like adding a new task, deleting a task, or moving a task up or down),
    //  you use setTasks to update the state
    const [tasks, setTasks]= useState(["eat breakfast", "take a shawer", "walk the dog"]);
    const [newTask, setnewTask]= useState(""); //This is particularly useful for handling the input field where users type a new task. 
  
    function handleInputChange(event) {
      setnewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(tasks => [...tasks, newTask]);  // This line adds a new task to the existing list of tasks.
            setnewTask("");
        }
    }
    function deleteTask(indexToRemove) {
        const updatedTasks = tasks.filter((element,index)=> index !== indexToRemove);
        setTasks(updatedTasks); 
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            // This line creates a shallow copy of the tasks array using the spread operator. The original tasks array remains unchanged.

            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];//  destructuring
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }


    return(<div className='to-do-list'> 
            <h1>To-Do-List</h1>
            <div>
                <input type="text" value={newTask} onChange={handleInputChange} placeholder='📝 Add item...'/>
                <button className='add-button'
                onClick={addTask}>Add</button>
            </div>

            <ol>
                {
                    tasks.map((task,index)=>
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button
                            className='delete-button'
                            onClick={()=>deleteTask(index)}>
                            Delete 🗑️
                        </button>

                        <button
                            className='move-button'
                            onClick={()=>moveTaskUp(index)}>Move up ☝🏻

                        </button>

                        <button
                            className='move-button'
                            onClick={()=>moveTaskDown(index)}>Move Down 👇🏻

                        </button>

                        
                    </li>)
                }
            </ol>
    </div>);
}

export default ToDoList;
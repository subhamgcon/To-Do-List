import React, {useState} from "react"

function ToDoList(){
  const [tasks,setTasks] = useState(["Eat Breakfast", "Have a Cold Shower", "Go to Gym"]);
  const [newTask, setNewTask] = useState("");
document.title = `To-Do-List`;
  function handleInputChange(event){
    setNewTask(event.target.value);
  }

  function addTask(){
    if(newTask.trim() !==""){
    setTasks(t => [...t,newTask]);
    setNewTask("");
    }
}
  function removeTask(index){
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);

  }
  function moveTaskUp(index){
    if(index > 0){
        const updatedTasks =[...tasks];
        [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index - 1],updatedTasks[index]];
        setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index){
    if(index < tasks.length){
    const updatedTasks =[...tasks];
    [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index + 1],updatedTasks[index]];
    setTasks(updatedTasks);
    }

  }

  return(
    <div className="to-do-list">
        <h2>Donarama</h2>
        <input type="text" placeholder="Enter your task..." onChange={handleInputChange}/>
        <button className="add-button" onClick={addTask}>Add</button>
        <ol>
            {tasks.map((tasks,index) => 
              <li key={index}>
                <span className="text">{tasks}</span>
                <button className="delete-button" onClick={() => removeTask(index)}> Delete </button> 
                <button className="move-button" onClick={() => moveTaskUp(index)}> Up </button> 
                <button className="move-button" onClick={() => moveTaskDown(index)}> Down </button> 
                

                 </li>
            )}
        </ol>
     

        
    </div>
  );
}

export default ToDoList

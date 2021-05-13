import './index.css'
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import {useState, useEffect} from 'react'
import AddTask from './Components/AddTask'


function App() {
  const [open, setOpen] = useState(false);

  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    const getTask = async () => {
      const Alltask = await fetchTask();

      setTasks(Alltask);
    }
    
  
    getTask();
  }, [])

  // Asynchronous function enables to work with promises, they handle the responsibility of promises here.
  const fetchTask = async () => {
      const res = await fetch('http://localhost:5000/tasks');
      const data = await res.json();
      //This is returning data to getTask function inside useEffecct.
      return data;

    }


//YES, id is is passed from Task component from an arrow function i.e. 
//When you click on the cross button, you get an id and that id comes here.
const DeleteTask = (id) => {
  // The filter() method creates a new array with all elements that pass the test implemented by the provided function.
  setTasks(tasks.filter((task) => (
    task.id !== id
  )
  )
  )
}

const addTask = async (task) => {
  // //Generating a random id for the newly added task
  // const id = Math.floor(Math.random() * 1000 +1);

  // const newTask = {id, ...task}

  // //Why did we use [] instead of {}
  // setTasks([...tasks, newTask])
   
  const res = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers : {
          "Content-Type": "application/json"
        },
        //if there is no body, only id gets stored in the fake database
        body: JSON.stringify(task)



  })
  const data = await res.json();

  setTasks([...tasks, data]);

}



const ToggleReminder = (id) => {
  //At beggining every task is true, meaning every task gets border left as green.
  //if task.id=== id then it is going to return the copy of all the task again and set reminder to opposte of what it was.
  setTasks(tasks.map((task) => 
   task.id === id ? {...task, reminder: !task.reminder} : task
  
  ))

};

  

 

  
  return (
    <div className='container'>
    <Header title ='Task Tracker' toggleAdd={() =>  setOpen(!open)}/>
    {/* open && Addtask component is like a if statement. So at first the Addtask functionality is not being shown */}
    {open && <AddTask onAdd = {addTask} />}
    {tasks.length>0 
    ?
    <Tasks tasks={tasks} onDelete={DeleteTask} onToggle={ToggleReminder} onAdd />
    :
    'No Task to show'

    }
     
      
    </div>
  );
}

export default App;

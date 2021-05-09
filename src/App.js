import './index.css'
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import {useState} from 'react'
import AddTask from './Components/AddTask'


function App() {
  const [tasks, setTasks] = useState(
    [
    
{
    id:1,
    text: 'Doctors Appointment',
    day: 'May 03 at 2:30',
    reminder: true,

},
{
    id:2,
    text: 'Attend Classes',
    day: 'May 06 at 9:00',
    reminder: true,

},
{
    id:3,
    text: 'Go to the gym',
    day: 'May 07 at 5:30',
    reminder: true,

}, 
{
    id:4,
    text: 'Guitar class',
    day: 'May 08 at 3:30',
    reminder: true,

},
]
)
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

const addTask = (task) => {
  //Generating a random id for the newly added task
  const id = Math.floor(Math.random() * 1000 +1);

  const newTask = {id, ...task}

  //Why did we use [] instead of {}
  setTasks([...tasks, newTask])
}



const ToggleReminder = (id) => {
  //At beggining every task is true, meaning every task gets border left as green.
  setTasks(tasks.map((task) => 
   task.id === id ? {...task, reminder: !task.reminder} : task
  
  ))

};

  

 

  
  return (
    <div className='container'>
    <Header title ='Task Tracker'/>
    <AddTask onAdd = {addTask} />
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

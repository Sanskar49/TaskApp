import './index.css'
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import {useState} from 'react'


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
//YES, this is is passed from Task component from an arrow function i.e. 
//When you click on the cross button, you get an id and that id comes here.
const DeleteTask = (id) => {
  // The filter() method creates a new array with all elements that pass the test implemented by the provided function.
  setTasks(tasks.filter((task) => (
    task.id !== id
  )
  )
  )
}
  
  return (
    <div className='container'>
    <Header title ='Task Tracker'/>
    <Tasks tasks={tasks} onDelete={DeleteTask} />
     
      
    </div>
  );
}

export default App;

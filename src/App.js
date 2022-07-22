import {useState} from 'react'
import AddTask from './components/AddTask';
import Header from "./components/Header";
import Tasks from './components/Tasks';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(false)
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Grocery Shopping',
      date: 'August 3 at 9:00 am',
      reminder: true
    },
    {
      id: 2,
      text: 'Laundry',
      date: 'August 3 at 2:00 pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Study',
      date: 'August 3 at 4:00 pm',
      reminder: false
    },
    {
      id: 4,
      text: 'Exercise',
      date: 'August 4 at 8:00 am',
      reminder: true
    } 

  ])

  //add task
  const addTask = (task) =>{
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //delete task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id))

  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  //toggle theme
 const onToggleTheme = () =>{
  setTheme((theme) => theme = !theme)
 }
  return (
    <div className={theme? 'bg-img' : 'bg-dark'}>
    <div className={theme? 'container' : 'container-dark'}>
     <Header title='To-do List' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} onToggleTheme={onToggleTheme} theme={theme}/>

     {showAddTask && <AddTask onAdd={addTask} theme={theme}/>}
     
     {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : (<p className={theme? 'noTask' : 'noTask-dark'}>No task to show</p>)}
   
     <Footer footerText='&copy;Kent Fortich 2022' theme={theme}/>
    
    </div>
    </div>
  );
}

export default App;

import { useState } from 'react'

const AddTask = ({onAdd, theme}) => {
  
  const [text, setText] = useState('')
  const [date, setDate] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) =>{
    e.preventDefault()
  

  if(!text){
    alert('Please add task')
    return
  }

  onAdd({text, date, reminder})

  setText('')
  setDate('')
  setReminder(false)
  }

  return (

    <form className='add-form' onSubmit={onSubmit}>
        <div className={theme? 'form-control' : 'form-control-dark'}>
            <label>Add Task</label>
            <input type='text' placeholder='add to-do here' value={text} onChange={(e) => setText(e.target.value)}/>
        </div>

        <div className={theme? 'form-control' : 'form-control-dark'}>
            <label>Date and Time</label>
            <input type='text' placeholder='Set date and time' value={date} onChange={(e) => setDate(e.target.value)}/>
        </div>

        <div className='reminder-div'>
            <label className={theme? 'dark-label' : 'white-label' }>Set Reminder</label>
            <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>

        <input type='submit' value='Save Task' className='btn btn-block'></input>

    </form>
  )
}

export default AddTask
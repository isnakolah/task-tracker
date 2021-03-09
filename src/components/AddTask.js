import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a task');
      return;
    }

    // Create an object to
    onAdd({ text, day, reminder });

    // Clear the form
    setText('');
    setDay('');
    setReminder('');
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label htmlFor='task'>Task</label>
        <input
          type='text'
          name='task'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='day-and-time'>Day & Time</label>
        <input
          type='text'
          name='day-and-time'
          placeholder='Add Day & Time'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label htmlFor='setreminder'>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          name='setreminder'
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input className='btn btn-block' type='submit' value='Save Task' />
    </form>
  );
};

export default AddTask;

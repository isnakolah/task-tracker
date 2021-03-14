import { FaTimes } from 'react-icons/fa';
import { AiTwotoneEdit } from 'react-icons/ai';

const Task = ({ task, onUpdate, onDelete, onToggle }) => {
  const updateTask = () => {
    onUpdate();
  };

  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}>
      <h3>
        <div className='column-left'>{task.text}</div>
        <div className='column-right'>
          <AiTwotoneEdit style={{ color: 'green' }} onClick={updateTask} />
          <FaTimes
            style={{ color: 'red', float: 'right' }}
            onClick={() => onDelete(task.id)}
          />
        </div>
      </h3>
      <p>{task.date}</p>
    </div>
  );
};

export default Task;

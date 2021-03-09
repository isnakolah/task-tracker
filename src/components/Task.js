import { FaTimes } from 'react-icons/fa';
import { AiTwotoneEdit } from 'react-icons/ai';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}>
      <h3>
        <div className='column-left'>{task.text}</div>
        <div className='column-right'>
          <AiTwotoneEdit />
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

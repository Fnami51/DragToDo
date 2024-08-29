import { useState } from 'react';
import { useItems } from '../hooks/useItems';
import styles from './AddTask.module.css';
import { ItemType } from '../interface/ItemType';

interface AddTaskProps {
    id: number;
}

function AddTask({ id }: AddTaskProps) {
  const [taskTitle, setTaskTitle] = useState('');
  const { items, setItem } = useItems();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && taskTitle.trim() !== '') {
      setItem(items.map(item =>
        item.id === id
          ? {
              ...item,
              tasks: [
                ...item.tasks,
                {
                  task_id: Number(Date.now()),
                  title: taskTitle,
                  isComplete: false
                }
              ]
            }
          : item
      ));

      setItem((prevItems: ItemType[]) =>
        prevItems.map(item =>
          item.id === id
            ? { ...item, isChange: false }
            : item
        )
      );

      setTaskTitle('');
    }
  };

  return (
    <input
      className={styles.input}
      value={taskTitle}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      placeholder="Add a new task"
    />
  );
}

export default AddTask;

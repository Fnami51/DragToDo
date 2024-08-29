import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import Task from './Task';
import styles from './Item.module.css'
import { useItems } from '../hooks/useItems';
import { ItemType } from '../interface/ItemType';
import AddTask from './AddTask';
import classNames from 'classnames';

function Item({id, tasks, position, isChange}: ItemType) {
  const { setItem } = useItems();

  function handleDrag(_event: DraggableEvent, data: DraggableData) {
    setItem((prevItems: ItemType[]) =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, position: { x: data.x, y: data.y } }
          : item
      )
    );
  }

  function handleDelete() {
    setItem((prevItems: ItemType[]) =>
      prevItems.filter(item => item.id !== id)
    );
  }

  function handleChange() {  
    setItem((prevItems: ItemType[]) =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, isChange: true }
          : item
      )
    );
  }

  return (
    <Draggable key={id} bounds="parent" position={position} onDrag={handleDrag}>
      <section className={styles.background}>
        <div className={styles.button_box}>
          <button className={classNames(styles.button, styles.btn_change)} onClick={handleChange}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <path d="M32 12C33.1046 12 34 12.8954 34 14V30H50C51.1046 30 52 30.8954 52 32C52 33.1046 51.1046 34 50 34H34V50C34 51.1046 33.1046 52 32 52C30.8954 52 30 51.1046 30 50V34H14C12.8954 34 12 33.1046 12 32C12 30.8954 12.8954 30 14 30H30V14C30 12.8954 30.8954 12 32 12Z" fill="black"/>
            </svg>
          </button>
          <button className={classNames(styles.button, styles.btn_delete)} onClick={handleDelete}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path d="M 24 4 C 20.491685 4 17.570396 6.6214322 17.080078 10 L 10.238281 10 A 1.50015 1.50015 0 0 0 9.9804688 9.9785156 A 1.50015 1.50015 0 0 0 9.7578125 10 L 6.5 10 A 1.50015 1.50015 0 1 0 6.5 13 L 8.6386719 13 L 11.15625 39.029297 C 11.427329 41.835926 13.811782 44 16.630859 44 L 31.367188 44 C 34.186411 44 36.570826 41.836168 36.841797 39.029297 L 39.361328 13 L 41.5 13 A 1.50015 1.50015 0 1 0 41.5 10 L 38.244141 10 A 1.50015 1.50015 0 0 0 37.763672 10 L 30.919922 10 C 30.429604 6.6214322 27.508315 4 24 4 z M 24 7 C 25.879156 7 27.420767 8.2681608 27.861328 10 L 20.138672 10 C 20.579233 8.2681608 22.120844 7 24 7 z M 11.650391 13 L 36.347656 13 L 33.855469 38.740234 C 33.730439 40.035363 32.667963 41 31.367188 41 L 16.630859 41 C 15.331937 41 14.267499 40.033606 14.142578 38.740234 L 11.650391 13 z M 20.476562 17.978516 A 1.50015 1.50015 0 0 0 19 19.5 L 19 34.5 A 1.50015 1.50015 0 1 0 22 34.5 L 22 19.5 A 1.50015 1.50015 0 0 0 20.476562 17.978516 z M 27.476562 17.978516 A 1.50015 1.50015 0 0 0 26 19.5 L 26 34.5 A 1.50015 1.50015 0 1 0 29 34.5 L 29 19.5 A 1.50015 1.50015 0 0 0 27.476562 17.978516 z"></path>
            </svg>
          </button>
        </div>
        
        <div className={styles.list}>
          {tasks.length > 1 ? (<h1 className={styles.topic}>To Do list</h1>) : null }
          {tasks.map(task => <Task id={id} task_id={task.task_id} title={task.title} isComplete={task.isComplete}/>)}
          {isChange? <AddTask id={id}/> : null}
        </div>
      </section>
    </Draggable>
  );
}

export default Item;
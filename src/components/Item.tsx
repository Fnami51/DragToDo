import Draggable, { DraggableData } from 'react-draggable';
import styles from './Item.module.css'
import { ItemType } from '../interface/ItemType';

function Item(item: ItemType) {
  const handleDrag = (data: DraggableData) => {
    setPosition({ x: data.x, y: data.y });
  };

  return (
    <Draggable key={item.id} bounds="parent" position={item.position} onDrag={handleDrag}>
      <section className={styles.background}>
        
      </section>
    </Draggable>
  )
}

export default Item
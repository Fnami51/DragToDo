import { useItems } from '../hooks/useItems';
import { ItemType } from '../interface/ItemType';
import styles from './Area.module.css';
import Item from './Item';

function Area() {
  const {items} = useItems()

  return (
    <article className={styles.background}>
      <div className={styles.bounds}>
        {items.map((item: ItemType) => <Item id={item.id} tasks={item.tasks} position={item.position}/>)}
      </div>
    </article>
  );
}

export default Area;

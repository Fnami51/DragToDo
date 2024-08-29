import { TaskType } from '../interface/TaskType';
import { useItems } from '../hooks/useItems';
import { ItemType } from '../interface/ItemType';
import styles from './Task.module.css'

interface TaskProps {
    id: number;
    task_id: number;
    title: string;
    isComplete: boolean;
}

function Task({ id, task_id, title, isComplete }: TaskProps) {
    const { items, setItem } = useItems();

    function toggleComplete(itemId: number, taskId: number) {
        setItem(items.map((item: ItemType) =>
            item.id === itemId
                ? {
                    ...item,
                    tasks: item.tasks.map((task: TaskType) =>
                        task.task_id === taskId ? { ...task, isComplete: !task.isComplete } : task
                    )
                }
                : item
        ));
    }

    return (
        <div>
            <div key={task_id} className={styles.box}>
                <input
                    type="checkbox"
                    checked={isComplete}
                    onChange={() => toggleComplete(id, task_id)}
                    className={styles.cheakbox}
                />
                <span style={{ textDecoration: isComplete ? 'line-through' : 'none' }}>
                    {title}
                </span>
            </div>
        </div>
    );
}

export default Task;

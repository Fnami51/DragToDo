import { TaskType } from '../interface/TaskType';
// import { useItems } from '../hooks/useItems';
// import { ItemType } from '../interface/ItemType';

function Task({_id, title, isComplete} : TaskType) {
    //const { items, setItem } = useItems();

    function toggleComplete(id: number) {
        return id
    };

    return (
        <div>
            <div key={_id}>
                    <input
                        type="checkbox"
                        checked={isComplete}
                        onChange={() => toggleComplete(_id)}
                    />
                    <span style={{ textDecoration: isComplete ? 'line-through' : 'none' }}>
                        {title}
                    </span>
                </div>
            
        </div>
    );
};

export default Task;

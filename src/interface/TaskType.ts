export interface TaskType{
    id: number;
    title: string;
    isComplate: boolean;
}

export interface TaskListType{
    id: number;
    tasks: TaskType[]
}
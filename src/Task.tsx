import {TaskType} from "./App.tsx";

type TaskProps = {
    task: TaskType,
    onTaskStatusChange: (taskId: TaskType['id'], status: boolean) => void
}

export function Task(props: TaskProps) {
    return <li>
        <input type="checkbox" checked={props.task.isDone}
               onChange={(event) => {
                   props.onTaskStatusChange(
                       props.task.id,
                       event.currentTarget.checked
                   )
               }}/> <span>{props.task.title}</span>
    </li>
}

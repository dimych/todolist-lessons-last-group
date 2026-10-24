import {TaskType} from "./App.tsx";

type TaskProps = {
    task: TaskType
}
export function Task(props: TaskProps) {
    return <li>
        <input type="checkbox" checked={props.task.isDone} /> <span>{props.task.title}</span>
    </li>
}

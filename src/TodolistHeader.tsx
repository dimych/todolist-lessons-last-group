// contract, interface, сигнатура
// We don't transfer the entire to-do list to the to-do list header on purpose, but we do some mapping of the data on the border with this component so that the component gets only what it needs and does not depend on what it uses.
type TodolistHeaderProps = {
    headerTitle: string
    tasksCount: number
}
export function TodolistHeader(props: TodolistHeaderProps) {
    return <><h3>{props.headerTitle} ( {props.tasksCount} tasks )</h3>
        <div>
            <input value={'js'}/>
            <button>+</button>
        </div>
    </>
}

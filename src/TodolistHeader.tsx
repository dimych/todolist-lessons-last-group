// contract, interface, сигнатура
type TodolistHeaderProps = {
    headerTitle: string
}
export function TodolistHeader(props: TodolistHeaderProps) {
    return <><h3>{props.headerTitle}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
    </>
}

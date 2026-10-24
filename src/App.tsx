import './App.css'

function App() {
    return <>
        <Todolist/>
        <Todolist/>
        <Todolist/>
        <Todolist/>
        <Todolist/>
    </>
}

export default App

// atomic design : atom (ui kit); molecul -> organisms
// vocabulary - словарь, tesaurus, ubiquitous language
// SLA - SINGLE LAYER ABSTRACTION
// pure fabraction (GRASP)

function Task() {
    return <li>
        <input type="checkbox" checked={true}/> <span>HTML&CSS</span>
    </li>
}

function TodolistHeader() {
    return <><h3>What to learn</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
    </>
}

function TodolistFilter() {
    return  <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
    </div>
}

function Todolist() {
    return <div>
        <TodolistHeader />
        <ul>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
        </ul>
        <TodolistFilter />
    </div>
}
import './App.css'
import {Todolist} from './Todolist'
import {useEffect, useState} from "react";

const todolistsFromServer = [
    {
        id: 1, title: 'что купить', tasks: [
            {id: 1, title: 'молоко', isDone: false},
            {id: 2, title: 'хлеб', isDone: false},
            {id: 3, title: 'яйца', isDone: false},
        ]
    },
    {
        id: 2, title: 'выучить', tasks: [
            {id: 4, title: 'HTML&CSS', isDone: true},
            {id: 5, title: 'JS', isDone: true},
            {id: 6, title: 'React', isDone: false},
        ]
    },
    {
        id: 3, title: 'тренировка', tasks: [
            {id: 7, title: 'разминка', isDone: true},
            {id: 8, title: 'отжимания', isDone: false},
        ]
    },
]

// class Car {
// }
//
// const c1 = new Car()
// const c2 = new Car()

export type TodolistType = typeof todolistsFromServer[number];
export type TaskType = typeof todolistsFromServer[number]['tasks'][number];

// fibers tree: { type: App, state, props, children: [{type: Totolist, state, props},{}, {}] }


// const array: Array<number> = [12,23,34]
// console.log(array)
// useState<number | string>(true)

function App() {
    // application logic: data/state <----- mutation function

    // const stateWrapper = useState(null) // [ ourState, function(newState){} ]
    // const todolists = stateWrapper[0] // actualValue from memory
    // const setTodolists = stateWrapper[1] //

    const [todolists, setTodolists] = useState<null | TodolistType[]>(null)
    // const [tasks, setTasks] = useState<null | TodolistType[]>(null)
    // const [status, setStatus] = useState<null | TodolistType[]>(null)
    // const [theme, setTheme] = useState<null | TodolistType[]>(null)

    useEffect(() => {
        // как будто делаем запрос на апишку на бекенд за тудулистами
        setTimeout(() => {
            setTodolists(todolistsFromServer)
        }, 1000)
    }, [])

    const handleDeleteTodolist = (todolistIdToDelete: number) => {
        if (!todolists) return;

        const newTotodlistsArray = todolists
            .filter((tl) => tl.id !== todolistIdToDelete)

        setTodolists(newTotodlistsArray)
    }

    const handleRefreshClick = () => {
        setTodolists(null)
        setTimeout(() => {
            setTodolists(todolistsFromServer)
        }, 1000)
    }

    // ========== render algorithm
    return <>
        <h1>Todolists:</h1>
        <button onClick={handleRefreshClick}>Refresh</button>
        <hr/>
        {false}{true}{null}{undefined}

        {!todolists && <span>Loading....</span>}

        { todolists && todolists.length === 0 && <span>No todolists</span> }
        {
            todolists && todolists.map(tl => <div key={tl.id} style={{border: '1px solid black', padding: '5px', margin: '3px'}}>
                {/*<button onClick={() => handleDeleteTodolistClick(tl.id) }>delete</button>*/}
                <Todolist todolist={tl} onDelete={handleDeleteTodolist} />
            </div>)
        }
    </>
}

export default App


// atomic design : atom (ui kit); molecul -> organisms
// vocabulary - словарь, tesaurus, ubiquitous language
// SLA - SINGLE LAYER ABSTRACTION
// pure fabraction (GRASP)
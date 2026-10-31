import './App.css'
import {Todolist} from './Todolist'

const todolists = [
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

class Car{}
const c1 = new Car()
const c2 = new Car()

export type TodolistType = typeof todolists[number];
export type TaskType = typeof todolists[number]['tasks'][number];

// fibers tree: { app: {state, props}, children: [{state, props},{}, {},{}] }

function App() {

    return <>
        {
            todolists
            .map(t => <div key={t.id}> <Todolist todolist={t} /></div>)
        }
    </>
}

export default App

// atomic design : atom (ui kit); molecul -> organisms
// vocabulary - словарь, tesaurus, ubiquitous language
// SLA - SINGLE LAYER ABSTRACTION
// pure fabraction (GRASP)
import './App.css'
import {Todolist} from './Todolist'

import { jsx as _jsx } from "react/jsx-runtime";

function App() {
    return <>
        <Todolist title={'что купить'} />
        <Todolist title={'выучить'} />
        <Todolist title={'тренировка'} />
    </>
}

export default App

// atomic design : atom (ui kit); molecul -> organisms
// vocabulary - словарь, tesaurus, ubiquitous language
// SLA - SINGLE LAYER ABSTRACTION
// pure fabraction (GRASP)

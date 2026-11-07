import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App'
import * as React from "react";




createRoot(document.getElementById('root')!)
    .render(<App />)
    //.render(element)


// REACT_ROOT_APP: {  fiber: { type: ExampleArray, states: [{value: [1,2,3,4] }]  }

// function setTasks(newArray) {
//    const prevArr = getCurrentState()
//    if (newArray === prevArr) return;
//    saveState(newArray)
//    const actualJsx = ExampleArray()
// }


//newCounter
function ExampleArray() {
    const [tasks, setTasks] = React.useState([1,2,3])
//-----------

    console.log('ExampleCounter rendering')

    return <div>
        {
            tasks.map( (task, index) => <h3 key={index}>{task}</h3>)
        }
        <button onClick={() => {
            setTasks( [...tasks, Math.random()] )
        }}>inc
        </button>
    </div>
}



// REACT_ROOT_APP: {  fiber: { type: ExampleCounter, states: [{value: {v: 14} }]  }
                                                                        //newCounter
function ExampleCounter() {
    const [counter, setCounter] = React.useState({v: 0 })


//-----------

    console.log('ExampleCounter rendering')

    return <div>{counter.v}
        <button onClick={() => {
            console.log(counter.v)
            setCounter({
                ...counter,
                v: counter.v + 1 } )
        }}>inc
        </button>
    </div>
}


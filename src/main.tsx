import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App'
import {useState} from "react";
import * as React from "react";


const element = <ExampleCounter/>;

createRoot(document.getElementById('root')!)
    //.render(<App />)
    .render(element)

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
                v: counter.v + 1
            })
        }}>inc
        </button>
    </div>
}


import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App'
import {useState} from "react";
import * as React from "react";


const element = <ExampleCounter/>;

createRoot(document.getElementById('root')!)
    //.render(<App />)
    .render(element)

// REACT_ROOT_APP: {  fiber: { type: ExampleCounter, states: [{value: 4}]  }

function ExampleCounter() {
    const [counter, setCounter] = React.useState(0)


//-----------

    console.log('ExampleCounter rendering')

    return <div>{counter}
        <button onClick={() => {
            setCounter(counter+1)
        }}>inc
        </button>
    </div>
}


import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App'
import {useState} from "react";
import * as React from "react";


const element = <ExampleCounter/>;

createRoot(document.getElementById('root')!)
    //.render(<App />)
    .render(element)

// REACT_ROOT_APP: {  fiber: { type: ExampleCounter, states: [{value: 0}, {value: 2}]  }

function ExampleCounter() {
    const state1 = React.useState(0)
    if (xxx) {
        const state2 = React.useState(2)
    }
//-----------

    console.log('ExampleCounter rendering')

    return <div>{2}
        <button onClick={() => {

        }}>inc
        </button>
    </div>
}


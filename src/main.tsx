import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App'
import * as React from "react";
import {useRef, useState} from "react";




createRoot(document.getElementById('root')!)
    .render(<><App /></>)


//let intervalId: number | undefined;

// fiber {state,state,state,state,ref,ref,ref={current: XXX }}
function ControllUncontrollExample() {
    console.log('ControllUncontrollExample rendering')
    const [inputValue, setInputValue] = useState('')

    return <div>
        <input value={inputValue} onChange={(e) => {
            setInputValue(e.currentTarget.value)
        }} />
        <hr/>
        <input />
    </div>
}

// fiber {state,state,state,state,ref,ref,ref={current: XXX }}
function RefExample() {
    const ref = useRef<number | undefined>(undefined)
    const [seconds, setSeconds] = useState(1)

    const handleStart = () => {
        if (ref.current) return;

        const intervalId = setInterval(() => {
            setSeconds(prev => prev + 1)
        }, 3000)
        ref.current = intervalId
    }
    const handleStop = () => {
        clearInterval(ref.current)
        ref.current = undefined
    }

    return <div>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
        <hr/>
        {seconds}
    </div>
}


// ✅
function RefVsUseStateExample() {
    const setIntervalIdRef = useRef<number | undefined>(undefined)
    const [isTimerStarted, setIsTimerStarted] = useState<boolean>(false)
    const [seconds, setSeconds] = useState(1)

    const handleStart = () => {
        if (isTimerStarted) return;

        setIntervalIdRef.current = setInterval(() => {
            setSeconds(prev => prev + 1)
        }, 1000)
        setIsTimerStarted(true)
    }
    const handleStop = () => {
        clearInterval(setIntervalIdRef.current)
        setIsTimerStarted(false)
    }


    return <div>
        <button onClick={handleStart} disabled={ isTimerStarted }>start</button>
        <button onClick={handleStop}>stop</button>
        <hr/>
        {seconds}
    </div>
}

// let stateCell = 1
// const setSeconds = (valueOrFunction) => {
//     if (typeof valueOrFunction === 'function') {
//         const newValue = valueOrFunction(stateCell)
//         stateCell = newValue
//         // render()
//     } else {
//         stateCell = valueOrFunction;
//         // render()
//     }
// }
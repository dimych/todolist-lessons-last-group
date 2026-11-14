import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App'
import * as React from "react";
import {ChangeEvent, useRef, useState} from "react";


//const reactElement = <Update /> // React.createElement()
//reactElement = { type: Update, props: {}, childrens: []}

createRoot(document.getElementById('root')!)
    .render(<><App /></>)


function Click() {
    /// BLL

    const [count, setCount] = useState(0)

    const changeCountValue = (incValue: number) => {
        if (count < 40) {
            setCount(count + incValue);
        }
    }


    /// UI

    const handlePlus1Click = () => {
        changeCountValue(1)
    }
    const handlePlus10Click = () => {
        changeCountValue(10)
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
       changeCountValue( Number(e.currentTarget.value) )
    }

    return <>
        <button onClick={ handlePlus1Click }> + 1</button>
        <hr/>
        <button onClick={ handlePlus10Click }> + 10</button>
        <hr/>
        <input type='number' defaultValue={1} onChange={ handleInputChange }/>
        <hr/>
        {count}
    </>
}


// function a(){
//         debugger;
//         b()
//         console.log('a finished')
// }
// function b(){c()}
// function c(){d()}
// function d(){}
//
// a();

function Update() {
    const [users, setUsers] = useState([
        {id: 1, name: 'John', address: {city: 'New York'}},
        {id: 2, name: 'Dimych', address: {city: 'Batumi'}},
    ])
    const handleAddSignClick = () => {
        //const newUsers2 = [...users]
        const newUsers = users
            .map(u => u.id !== 2
                ? u
                : {
                    ...u,
                    name: u.name + "!"
                }
            )
        setUsers(newUsers)
    }
    const handleChangeAddressClick = () => {
        const newUsers = users
            .map(u => u.id !== 2
                ? u
                : {
                    ...u,
                    address: {
                        ...u.address,
                        city: 'Minsk'
                    },
                }
            )
        setUsers(newUsers)
    }

    return <div>
        <button onClick={handleAddSignClick}>add !</button>
        <button onClick={handleChangeAddressClick}>change address</button>
        {users.map(u => <li key={u.id}>{u.name}, {u.address?.city}</li>)}
    </div>
}

// 1{ 100, 'dimych', addres:l2 },  3{ 100, 'dimcyh, address: l4}
// 2{ 'batumi'} ,                      4{ 'batumi'} ,

const a = {
    id: 100,
    name: 'Dimych',
    address: {city: 'Batumi'}
}
const b = {
    ...a,
    // address: {...a.address}
}
a.address.city = 'Minsk'




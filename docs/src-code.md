# Исходный код папки src

Все файлы из `src/` в одном документе, собраны 2026-10-24.

## Содержание

- [`src/App.css`](#srcappcss)
- [`src/App.tsx`](#srcapptsx)
- [`src/App_.tsx`](#srcapp_tsx)
- [`src/Task.tsx`](#srctasktsx)
- [`src/Todolist.tsx`](#srctodolisttsx)
- [`src/TodolistFilter.tsx`](#srctodolistfiltertsx)
- [`src/TodolistHeader.tsx`](#srctodolistheadertsx)
- [`src/index.css`](#srcindexcss)
- [`src/main.tsx`](#srcmaintsx)
- [`src/vite-env.d.ts`](#srcvite-envdts)

## `src/App.css`

```css
.app {
  padding: 30px;
  display: flex;
}

.app > div {
  margin-right: 50px;
}
```

## `src/App.tsx`

```tsx
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
```

## `src/App_.tsx`

```tsx
import './App.css'

function App() {
  return (
      <div className="app">
        <div>
          <h3>What to learn</h3>
          <div>
            <input/>
            <button>+</button>
          </div>
          <ul>
            <li>
              <input type="checkbox" checked={true}/> <span>HTML&CSS</span>
            </li>
            <li>
              <input type="checkbox" checked={true}/> <span>JS</span>
            </li>
            <li>
              <input type="checkbox" checked={false}/> <span>React</span>
            </li>
          </ul>
          <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
        </div>
      </div>
  )
}

export default App
```

## `src/Task.tsx`

```tsx
export function Task() {
    return <li>
        <input type="checkbox"/> <span>HTML&CSS</span>
    </li>
}
```

## `src/Todolist.tsx`

```tsx
import {TodolistHeader} from './TodolistHeader'
import {Task} from './Task'
import {TodolistFilter} from './TodolistFilter'

// clousure, замыкание
// react
export function Todolist(props: number) {
    console.log(props.title)
    return <div>
        <TodolistHeader headerTitle={props.title} />
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
```

## `src/TodolistFilter.tsx`

```tsx
export function TodolistFilter() {
    return  <div>
        <input placeholder="Search by title"/>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
    </div>
}
```

## `src/TodolistHeader.tsx`

```tsx
// contract, interface, сигнатура
export function TodolistHeader(props) {
    return <><h3>{props.headerTitle}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
    </>
}
```

## `src/index.css`

```css
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  display: flex;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}
```

## `src/main.tsx`

```tsx
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!)
    .render(<App />)
```

## `src/vite-env.d.ts`

```ts
/// <reference types="vite/client" />
```

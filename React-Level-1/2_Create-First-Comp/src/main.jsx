import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {MyButton} from './Button.jsx'
import Comp from './Reuse.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App></App>
    <MyButton></MyButton>
    <Comp></Comp>
    <Comp></Comp>
    <Comp></Comp>
  </React.StrictMode>,
)

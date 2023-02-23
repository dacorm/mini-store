import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Context} from "./providers/AppProvider";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Context>
            <App/>
        </Context>
    </React.StrictMode>,
)

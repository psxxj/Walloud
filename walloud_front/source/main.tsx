import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter  } from 'react-router-dom'
import './index.css'
import MainRouter from './router/mainRouter'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <MainRouter />
  </BrowserRouter>
)

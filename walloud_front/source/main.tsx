import React from 'react'
import ReactDOM from 'react-dom/client'
import {RecoilRoot, atom, useRecoilState, useRecoilValue} from 'recoil';
import { BrowserRouter  } from 'react-router-dom'
import './index.css'
import MainRouter from './router/mainRouter'

ReactDOM.createRoot(document.getElementById('source') as HTMLElement).render(
  <BrowserRouter>
    <RecoilRoot>
      <MainRouter />
    </RecoilRoot>
  </BrowserRouter>
)

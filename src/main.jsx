import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import UserReducer from './redux/UserReducer.jsx'
import { configureStore } from '@reduxjs/toolkit';



const store = configureStore ({
  reducer: {
    users: UserReducer
  }
})
//menambahkan reducer

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>

  </React.StrictMode>,
)

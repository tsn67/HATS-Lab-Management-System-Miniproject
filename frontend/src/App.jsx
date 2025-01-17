import React from 'react'
import './styles/index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const App = () => {
    return (
        <Provider store={store}>
            
        </Provider>
    )
}

export default App;

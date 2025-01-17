import React from 'react'
import './styles/index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <h1 className='text-dar text-slate-600 font-inter'>Testing</h1>
                
            </div>
        </Provider>
    )
}

export default App;

import React from 'react'
import './styles/index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <h1 className='text-slate-800 font-extrabold m-10 text-[3rem]'>Test</h1> 
            </div>
        </Provider>
    )
}

export default App;

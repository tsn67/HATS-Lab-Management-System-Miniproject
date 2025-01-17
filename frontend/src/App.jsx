import React from 'react'
import './styles/index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Button from './components/Button'
import { Camera } from 'lucide-react'

const App = () => {
    return (
        <Provider store={store}>
            <div>
                
            </div>
        </Provider>
    )
}

export default App;

import React from 'react'
import './styles/index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Dropdown from './components/Dropdown'


const App = () => {

    var tempArr = ['java', 'c++', 'javascript', 'python'];
    var tempArr1 = ['question-1', 'question-2', 'question-3'];

    return (
        <Provider store={store}>
            <div className='grid h-screen place-content-center bg-slate-800 gap-3'>
                
                <Dropdown  items={tempArr} selected={'java'} disabled={false}/>
                <Dropdown  items={tempArr} selected={'java'} disabled={true}/>
                <Dropdown  items={tempArr1} selected={'question-1'} disabled={false}/>
            </div>
        </Provider>
    )
}

export default App;

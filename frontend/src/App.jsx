import React from 'react'
import './styles/index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import QuestionBar from './components/QuestionBar'



const App = () => {
    const questionDetails = {
        title : 'Bubble sort',

        problemStatement : 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.You may assume the two numbers do not contain any leading zero, except the number 0 itself.',

        assumption : 'you may take assumptions for granted',

        firstExample : '1 3 4 5 6 0',
        firstExampleAns : '0 1 3 4 5 6',

        secondExample : '1 3 4 5 6 0',
        secondExampleAns : '0 1 3 4 5 6',

        constraint1 : ' -100 <= num <= 100',
        constraint2 : ' -100 <= num <= 100'

    }

    return (
        <Provider store={store}>
            <div>
                <QuestionBar questionDetails={questionDetails}/>
            </div>
        </Provider>
    )
}

export default App;

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import Root from './components/Root'
import Provider from 'react-redux'
import rootReducer from './reducers/rootReducer'


const store = createStore(rootReducer)

render(<Provider store ={store}><Root/></Provider>, document.getElementById('root'))



import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import Root from './Root'
import Provider from 'react-redux'
import Reducer from './reducers/Reducer'


const store = createStore(Reducer)

render(<Provider store ={store}><Root/></Provider>, document.getElementById('root'))



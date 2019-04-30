import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import Root from './Root'
import { Provider } from 'react-redux'
import reducers from './reducers/index.js'
import App from './components/App.js'


const store = createStore(reducers)


render(<Provider store ={store}><Root/></Provider>, document.getElementById('app'))



import { SeriesReducer } from '../Series/SeriesReducer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const AppStore = createStore (
    SeriesReducer,
    applyMiddleware(thunk)
)

export default AppStore

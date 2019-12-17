import { SeriesReducer, store as SeriesReducerStore } from '../Series/SeriesReducer'
import { FilmsReducer, store as FilmsReducerStore } from '../Films/FilmsReducer'
import { ActeursReducer, store as ActeursReducerStore } from '../Acteurs/ActeursReducer'
import { createStore, combineReducers } from 'redux'

const rootReducer = combineReducers({
    SeriesReducer,
    FilmsReducer,
    ActeursReducer
})

const AppStore = createStore (rootReducer, {
    SeriesReducer : SeriesReducerStore,
    FilmsReducer : FilmsReducerStore,
    ActeursReducer : ActeursReducerStore,
    }
)

export default AppStore

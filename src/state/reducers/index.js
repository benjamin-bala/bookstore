import { combineReducers } from 'redux'
import accountReducer from './accountReducers'

const reducers = combineReducers({
    addToCart: accountReducer,
    deleteItem: accountReducer
})

export default reducers
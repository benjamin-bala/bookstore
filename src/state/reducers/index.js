import { combineReducers } from 'redux'
import accountReducer from './accountReducers'

const reducers = combineReducers({
    addToCart: accountReducer
})

export default reducers
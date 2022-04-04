import {combineReducers} from "redux"
import newsReducer from "./NewsReducers"

//alle reducers combineren in 1 object

const rootReducer = combineReducers({
    news: newsReducer,
    // user: userReducer,
    // todos: todosReducers
})

export default rootReducer
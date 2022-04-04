import {combineReducers} from "redux"
import newsReducer from "./NewsReducers"

//alle reducers combineren in 1 object

const rootReducer = combineReducers({
    news: newsReducer,
    // user: userReducer,
    // todos: todosReducer
})

export default rootReducer
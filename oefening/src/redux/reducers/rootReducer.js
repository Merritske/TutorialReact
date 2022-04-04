import {combineReducers} from "redux"
import blogReducer from "./BlogReducers"
import usersReducer from "./UsersReducers"

const rootReducer = combineReducers({
    blog: blogReducer,
    users: usersReducer
})
export default rootReducer
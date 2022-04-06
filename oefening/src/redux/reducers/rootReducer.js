import {combineReducers} from "redux"
import blogReducer from "./BlogReducers"
import userReducer from "./UsersReducers"

const rootReducer = combineReducers({
    blog: blogReducer,
    users: userReducer,
})
export default rootReducer
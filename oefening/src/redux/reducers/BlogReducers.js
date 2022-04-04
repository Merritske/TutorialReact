const initialState = {
    blog: [],
    singleBlog: [],
    errorMessage: ""
}

const blogReducer = (state = initialState, action)=>{

    switch(action.type){
        case "GET_ALL_BLOG_SUCCES":
            return {
                ...state,
                blog: action.payload
            }
            case "GET_ALL_BLOG_FAIL":
                return{
                    ...state,
                    blog:[],
                    errorMessage:action.payload
                }
                case "GET_SINGLE_BLOG_SUCCES":
                    return {
                        ...state,
                        singleBlog: action.payload
                    }
                    case "GET_SINGLE_BLOG_FAIL":
                        return {
                            ...state,
                            singleBlog : [],
                            errorMessage : action.payload
                        }
                        default:
                            return {
                                ...state
                            }
    }
}
export default blogReducer
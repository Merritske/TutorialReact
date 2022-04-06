const initialState = {
    username: "",
    password: "",
    loggedin: false,
    errorMessage: ""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USERNAME_CORRECT':
            return {
                ...state,
                username: action.payload
            }

        case 'PASSWORD_CORRECT':
            return {
                ...state,
                password: action.payload
            }
        case 'USERNAME_INCORRECT':
            return {
                ...state,
                username: "",
                errorMessage: action.payload
            }
        case 'PASSWORD_INCORRECT':
            return {
                ...state,
                password: "",
                errorMessage: action.payload
            }
        default:
            return { ...state }
    }
}
export default userReducer
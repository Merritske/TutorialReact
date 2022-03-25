import { Navigate } from "react-router-dom"

const ProtectedRoute = ({user, redirect="/", children})=>{
    if(user.username != "admin" || user.password != "1234"){
        return <Navigate to={redirect} />
       
    }
    
    
    console.log(user)
    return children
}
export default ProtectedRoute;
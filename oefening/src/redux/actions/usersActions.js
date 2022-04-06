import { useEffect } from "react"
import {useSelector, useDispatch} from "react-redux"

export const getUser = ()=> async(dispatch)=>{
    let res = await fetch(process.env.REACT_APP_API_URL)
 let data = await res.json()
    console.log(data)
    try{
        dispatch(getUserName(data))
    }
    catch(error){
        dispatch(noUserName(data))
    }
    console.log(data)
    }

 export const getUserName = (data)=>{
  
             return{
            type : 'USERNAME_CORRECT',
            payload : data
        }
    }
            export const noUserName = (message)=>{
                 return{
            type : 'USERNAME_INCORRECT',
            payload: message
        }
            }
 



 export function Loggingin({state}){
    fetch(process.env.REACT_APP_API_URL)
    .then(res=> res.json())
    .then((data)=>{
        data.map((user)=>{
            if(user.username === state.usernameI && user.name === state.password){
                console.log('hoera')
            }
        })
    })

    return   console.log("piep")


 }
    
      
        

  
     
   function logout(){
       return console.log("signedout")
   }

      

import React from 'react'
import "../styles/login.css"

export default function Login() {
  return (
    <div>
      <div className='headLogin'>
           <h1 className='title'> LOGIN    </h1> 
     <i class='fas fa-user-alt-slash' ></i>
      </div>
   
        <form>
            <fieldset>
                <legend>Login om alle details te zien</legend>
             
                 <input
                 name = "username"
                 placeholder='username' />
        <input placeholder='wachtwoord' />
        <button className='loginBtn' type='submit'>Login</button>
            </fieldset>
            
        </form>
       
    </div>
  )
}

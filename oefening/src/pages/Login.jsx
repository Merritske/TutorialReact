import {getUser, getUserName} from "../redux/actions/usersActions"
import { useState } from "react"
import "../styles/login.css"
import {Loggingin} from "../redux/actions/usersActions"


export default function Login() {
  const [isLoggedin, setIsLoggedIn] = useState("false")
  const [usernameInput, setUsernameInput] = useState("")
 const [password, setPassword] = useState("")
 const [state, setState] = useState({
   usernameI:"",
   password: "",
  
 })

 function handleSubmit(e){
     e.preventDefault()
setState({
  usernameI : usernameInput,
  password: password,
})

 }
Loggingin({state})


  return (<>
    <div className='headLogin'>
      <h1 className='title'> LOGIN    </h1>
      <i className='fas fa-user-alt-slash' style={{ color: "red", fontSize: 30 }} ></i>
    </div>

    <form onSubmit={handleSubmit} >
      <fieldset>
        <legend>Login om alle details te zien</legend>

        <input
          name="username"
          placeholder='username'
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
        />

        <input
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='wachtwoord' />


        <button className='loginBtn' type='submit' >Login </button>

      </fieldset>

    </form>



    <div className='headLoggedIn'>
      <h1 className='title'>Je bent ingelogd.
        <br /> Welkom !   </h1>
      <div className='tooltip'>  <i className='fas fa-user-alt' style={{ fontSize: 30 }} ></i><span className='tooltipcontent'>Wil je ons echt verlaten?

      </span> </div>

    </div>

  </>)
}

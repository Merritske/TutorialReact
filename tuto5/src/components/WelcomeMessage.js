import React from 'react'
import { useContext } from 'react'
import {Database} from "./../context/index"
//Zelfde opzet voor de tekst maar in verschillende componenten andere message

export default function WelcomeMessage({message}) {

const [stateObj, MyFunction, StringData] = useContext(Database) 

  return (
    <> 
     <h1 className='message'>{message}</h1>

     {console.log(stateObj, StringData)}
    </>
  
  )
}

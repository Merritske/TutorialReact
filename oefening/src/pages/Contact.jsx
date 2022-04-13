import React from 'react'
import persoon from '../component/contact.json'
import '../styles/contact.css'

export default function Contact() {
console.log(persoon.persona.naam)

  return (
    <div >
      <h1 className='title'>CONTACT </h1>
      <div className='contact'>
            <h2 className='adres'>{persoon.persona.naam} </h2>
      <h3 className='adres' >{persoon.persona.adres} </h3>
      <h3 className='adres'>{persoon.persona.telefoon} </h3>
      <a href="mailto:merritske@gmail.com" > <h3 className='adres'>{persoon.persona.email} </h3></a>
      </div>
  
      </div>
  )
}

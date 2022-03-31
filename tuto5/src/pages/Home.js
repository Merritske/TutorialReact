import {React} from 'react'
import WelcomeMessage from '../components/WelcomeMessage'
import { useContext } from 'react'
import {Database} from "./../context/index"

export default function Home() {
const myDB = useContext(Database)[3]


  return (
    <div>
{console.log(myDB)}
<WelcomeMessage message="Blueberry | Welcome"  />

{myDB.map((item)=>(

    <div className='data'>
       <h1>{item.title}</h1>
  <p>{item.body} </p>
    </div>

 
))

}


    </div>
  )
}

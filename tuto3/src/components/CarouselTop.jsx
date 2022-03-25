import React, { useEffect, useState } from 'react'
import { CarouselItem, Carousel } from 'react-bootstrap'

export default function CarouselTop() {
  const [index, setIndex] = useState(0)
  const [alles, setAlles] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        setAlles(data)
        console.log(data[0])
      })
  }, [])

  const handleSelect = (e) => {
    e.preventDefault()
    setIndex(index + 1)
  }
  console.log(alles)




  return (


    <Carousel activeIndex={index} onClick={handleSelect} >



      {alles.map((post, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src="https://www.easytutoriel.com/wp-content/uploads/2021/09/fond-d-ecran-anime-windows-11-10-tutoriel-facile.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{post.title} </h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))
      }



    </Carousel>



  )



}

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
  return (
<Container className='bg-dark ' fluid={true}>
<Row className='justify-content-center text-light '>
    <Col className='md-2'>
        <h1>footer</h1>
    </Col>
</Row>

</Container>
  )
}

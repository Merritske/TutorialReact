
    import { Card, Col } from "react-bootstrap";
export default function CardC({post}) {

  return (


  
   
            <Col>
            <Card>
                {console.log(post)}
                <Card.Img variant="top" src="/images/hond.jpg" />
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                        {post.body}
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        )
    }
 

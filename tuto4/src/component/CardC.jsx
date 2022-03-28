
    import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function CardC({post}) {

  return (


  
   
            <Col>
            <Card>
                {console.log(post)}
              <Link to={`/Blog/${post.id}`}>  <Card.Img variant="top" src="/images/hond.jpg" /> </Link>
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
 

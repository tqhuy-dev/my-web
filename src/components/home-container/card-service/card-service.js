import Card from 'react-bootstrap/Card';
import './card-service.css'
import { FaServer } from 'react-icons/fa'
import { Col, Container, Row } from 'react-bootstrap';
function CardService() {
    return (
        <div style={{ boxShadow: '0px 4px 4px rgba(234.11, 8.15, 8.15, 0.25)', border: '5px #5158F7 solid' }}>
            <Card style={{ backgroundColor: "transparent" }}>
                <Card.Body >
                    <Card.Title className='card-title'>
                        <Container style={{ textAlign: "start",padding:"20px" }}>
                            <Row>
                                <Col lg="2"><FaServer color='white' size={40} /></Col>
                                <Col style={{color:"white",textAlign:"start"}}>Card Title</Col>
                            </Row>
                        </Container>
                    </Card.Title>
                    <Card.Text className='card-content'>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardService;
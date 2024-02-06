import Card from 'react-bootstrap/Card';
import './card-service.css'
import { FaServer, FaDocker } from 'react-icons/fa'
import { LuBrainCircuit } from "react-icons/lu";
import { MdAnalytics } from "react-icons/md";
import { Col, Container, Row } from 'react-bootstrap';
function CardService(props) {
    const getIcon = (icon) => {
        switch (icon) {
            case "server":
                return <FaServer color='white' size={40} />
            case "devops":
                return <FaDocker color='white' size={40} />
            case "ai":
                return <LuBrainCircuit color='white' size={40} />
            case "data":
                return <MdAnalytics color='white' size={40} />
            default:
                return <FaServer color='white' size={40} />
        }
    }
    const icon = getIcon(props.icon)
    return (
        <div style={{ boxShadow: '0px 4px 4px rgba(234.11, 8.15, 8.15, 0.25)', border: '5px #5158F7 solid' , height:"100%" }}>
            <Card style={{ backgroundColor: "transparent" }}>
                <Card.Body >
                    <Card.Title className='card-title'>
                        <Container style={{ textAlign: "start", padding: "20px" }}>
                            <Row>
                                <Col lg="2">{icon}</Col>
                                <Col style={{ color: "white", textAlign: "start" }}>{props.title}</Col>
                            </Row>
                        </Container>
                    </Card.Title>
                    <Card.Text className='card-content'>
                        {props.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardService;
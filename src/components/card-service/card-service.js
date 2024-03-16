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
                return <FaServer  size={40} color='white' />
            case "devops":
                return <FaDocker  size={40} color='white' />
            case "ai":
                return <LuBrainCircuit size={40} color='white' />
            case "data":
                return <MdAnalytics size={40} color='white' />
            default:
                return <FaServer size={40} color='white' />
        }
    }
    const icon = getIcon(props.icon)
    return (
        <div className='card-div'>
            <Card style={{ backgroundColor: "transparent" }}>
                <Card.Body >
                    <Card.Title>
                        <Container style={{ textAlign: "start", padding: "20px" }}>
                            <Row>
                                <Col lg="2" style={{alignSelf:"center"}}>{icon}</Col>
                                <Col ><h1 className='card-title'>{props.title}</h1></Col>
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
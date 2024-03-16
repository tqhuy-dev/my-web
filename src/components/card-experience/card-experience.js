import { Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
function CardExperience(props) {
    return (
        <div>
            <Container>
                <Row><Image src={props.src} rounded alt='none'/></Row>
                <Row><div style={{textAlign:"center",color:"white",marginTop:10,fontWeight:'bold',fontSize:20}}>{props.name}</div></Row>
            </Container>
        </div>
    )
}

export default CardExperience;
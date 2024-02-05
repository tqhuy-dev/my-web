import { Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
function CardExperience() {
    return (
        <div>
            <Container>
                <Row><Image width={400} src='/aws.png' rounded alt='none'/></Row>
                <Row><div style={{textAlign:"center",color:"white",marginTop:10,fontWeight:'bold',fontSize:20}}>AWS</div></Row>
            </Container>
        </div>
    )
}

export default CardExperience;
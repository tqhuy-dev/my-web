import CardService from '../card-service/card-service';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function ServiceContainer(){
    return (
        <Container style={{ marginTop: "100px", textAlign: "center", marginBottom: "100px" }}>
                <div style={{ textAlign: 'center', color: 'white', fontSize: 48, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', marginBottom: 20 }}>Services</div>
                <Container>
                    <Row style={{ marginBottom: 20 }}>
                        <Col lg="1"></Col>
                        <Col>
                            <CardService />
                        </Col>
                        <Col>
                            <CardService />
                        </Col>
                        <Col lg="1"></Col>
                    </Row>
                    <Row>
                        <Col lg="1"></Col>
                        <Col>
                            <CardService />
                        </Col>
                        <Col>
                            <CardService />
                        </Col>
                        <Col lg="1"></Col>
                    </Row>
                </Container>
            </Container>
    )
}

export default ServiceContainer;
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardExperience from '../card-experience/card-experience';
function ExperienceContainer(){
    return (
        <Container >
                <div style={{ textAlign: 'center', color: 'white', fontSize: 48, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', marginBottom: 20 }}>Experience</div>

                <Row>
                    <Col style={{ padding: 50 }}><CardExperience /></Col>
                    <Col style={{ padding: 50 }}><CardExperience /></Col>
                    <Col style={{ padding: 50 }}><CardExperience /></Col>
                    <Col style={{ padding: 50 }}><CardExperience /></Col>
                </Row>
                <Row>
                    <Col style={{ padding: 50 }}><CardExperience /></Col>
                    <Col style={{ padding: 50 }}><CardExperience /></Col>
                    <Col style={{ padding: 50 }}><CardExperience /></Col>
                    <Col style={{ padding: 50 }}><CardExperience /></Col>
                </Row>
            </Container>
    )
}

export default ExperienceContainer;
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardExperience from '../card-experience/card-experience';
function ExperienceContainer(){
    return (
        <Container >
                <div style={{ textAlign: 'center', color: 'white', fontSize: 48, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', marginBottom: 20 }}>Experience</div>

                <Row>
                    <Col style={{ padding: 50 }}><CardExperience src="/aws.png" name="aws"/></Col>
                    <Col style={{ padding: 50 }}><CardExperience src="/gcp.png" name="gcp"/></Col>
                    <Col style={{ padding: 50 }}><CardExperience src="/golang.png" name="golang"/></Col>
                    <Col style={{ padding: 50 }}><CardExperience src="/python.png" name="python"/></Col>
                </Row>
                <Row>
                    <Col style={{ padding: 50 }}><CardExperience src="/tensorflow.png" name="tensorflow"/></Col>
                    <Col style={{ padding: 50 }}><CardExperience src = "/nodejs.png" name="nodejs"/></Col>
                    <Col style={{ padding: 50 }}><CardExperience src="/k8s.png" name="kubernetes"/></Col>
                    <Col style={{ padding: 50 }}><CardExperience src="/kafka.png" name="kafka"/></Col>
                </Row>
            </Container>
    )
}

export default ExperienceContainer;
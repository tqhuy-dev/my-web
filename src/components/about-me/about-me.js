import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
function AboutMe(){
    return (
        <Container style={{ marginTop: "200px" }}>
                <Row>
                    <Col lg="1"></Col>
                    <Col lg="4"><Image width={400} src='/image_me.png' rounded /></Col>
                    <Col lg="6"><div style={{ width: 577, height: 142, color: 'white', fontSize: 48, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>Senior Back-end   Developer</div>
                        <div style={{ width: 624, height: 314, textAlign: 'justify', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    </Col>
                    <Col lg="1"></Col>
                </Row>
            </Container>
    )
}

export default AboutMe;
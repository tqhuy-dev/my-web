import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './portfolio.css'
function Portfolio() {
    return (
        <div>
            <Container style={{ marginTop: "150px", textAlign: "center" }}>
                <div className='portfolio-title'>Portfolio</div>
                <Container>
                    <Row>
                        <Col lg="1"></Col>
                        <Col>
                            <div style={{ textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>Web App</div>
                        </Col>
                        <Col>
                            <div style={{ textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>AI</div>
                        </Col>
                        <Col>
                            <div style={{ textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>Devops</div>
                        </Col>
                        <Col>
                            <div style={{ textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>Data Science</div>
                        </Col>
                        <Col lg="1"></Col>
                    </Row>
                </Container>
            </Container>
            <Container style={{ marginTop: "100px" }}>
                <Row style={{ marginBottom: "100px" }}>
                    <Col lg="1"></Col>
                    <Col>
                        <div style={{ color: '#02D7E5', fontSize: 48, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>Demo App</div>
                        <div style={{ color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsus of Lorem Ipsum</div>
                        <div style={{ color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}> Show more</div>
                    </Col>
                    <Col style={{ textAlign: "end" }}>
                        <img alt='none' src="https://via.placeholder.com/436x407" />
                    </Col>
                    <Col lg="1"></Col>
                </Row>
                <Row>
                    <Col lg="1"></Col>
                    <Col style={{ textAlign: "start" }}>
                        <img alt='none' src="https://via.placeholder.com/436x407" />
                    </Col>
                    <Col>
                        <div style={{ color: '#02D7E5', fontSize: 48, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>Demo App</div>
                        <div style={{ color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsus of Lorem Ipsum</div>
                        <div style={{ color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}> Show more</div>
                    </Col>
                    <Col lg="1"></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio;
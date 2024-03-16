import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Constant from '../../constant/constant'
import './about-me.css'
function AboutMe() {
    return (
        <div className="big-image">
            <div className="overlay">
                <Container>
                    <Row>
                        <Col lg="1"></Col>
                        <Col lg="4"><Image width={400} src={Constant.ImageUrl} rounded /></Col>
                        <Col lg="6">
                            <div className='about-title'>Tran Quoc Huy </div>
                            <div className='about-subtitle'>{Constant.Title}</div>
                        </Col>
                        <Col lg="1"></Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default AboutMe;
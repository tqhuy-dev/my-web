import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Constant from '../../constant/constant'
import './about-me.css'
function AboutMe() {
    return (
        <Container style={{ marginTop: "200px" }}>
            <Row>
                <Col lg="1"></Col>
                <Col lg="4"><Image width={400} src={Constant.ImageUrl} rounded /></Col>
                <Col lg="6">
                    <div className='about-title'>Tran Quoc Huy </div>
                    <div className='about-subtitle'>{Constant.Title}</div>
                    <div className='about-description'>
                        <ul>
                            {Constant.Description.map((e,index) => {
                                return <li key={index}>{e}</li>
                            })}
                        </ul>
                    </div>
                </Col>
                <Col lg="1"></Col>
            </Row>
        </Container>
    )
}

export default AboutMe;
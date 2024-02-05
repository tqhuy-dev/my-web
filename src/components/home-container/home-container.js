import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import CardService from './card-service/card-service';
import CardExperience from './card-experience/card-experience';
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookSquare ,FaLinkedin,FaGithubSquare} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
function HomeContainer() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: '#000A24' }}>
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
            <Container style={{ marginTop: "150px", textAlign: "center" }}>
                <div style={{ textAlign: 'center', color: 'white', fontSize: 48, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', marginBottom: "20px" }}>Portfolio</div>
                <Container>
                    <Row>
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
                        <img alt='none'  src="https://via.placeholder.com/436x407" />
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
            <div style={{ background: "linear-gradient(180deg, #5158F7 0%, #3CB1F3 100%)", textAlign: "center",paddingTop:100,paddingBottom:50 }} >
                <div style={{ textAlign: 'center', color: 'white', fontSize: 36, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', marginBottom: "20px" }}>CONTACT</div>
                <Container>
                    <Row>
                        <Col style={{ textAlign: "start" }}>
                            <div style={{ color: 'white', fontSize: 28, fontWeight: 'bold',marginBottom:20 }}>Drop Me a Message</div>
                            <div style={{marginBottom:20}}>
                                <span style={{padding:10,backgroundColor:"#02D7E5",borderRadius:10,marginRight:20}}>
                                    <FaPhoneAlt color='white' fontSize={20} />
                                </span>
                                <span style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>0946515847</span>
                            </div>
                            <div style={{marginBottom:20}}>
                                <span style={{padding:10,backgroundColor:"#02D7E5",borderRadius:10,marginRight:20}}>
                                    <FaLocationDot color='white' fontSize={20} />
                                </span>
                                <span style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>Phu Nhuan,Ho Chi Minh City, Vietnam</span>
                            </div>
                            <div style={{marginBottom:20}}>
                                <span style={{padding:10,backgroundColor:"#02D7E5",borderRadius:10,marginRight:20}}>
                                    <MdEmail color='white' fontSize={20} />
                                </span>
                                <span style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>tqhuy1996.developer@gmail.com</span>
                            </div>
                        </Col>
                        <Col></Col>
                    </Row>
                    <div style={{marginTop:50}}>
                        <a href="https://www.facebook.com/huy1996.tran" target='_blank' rel="noreferrer" ><FaFacebookSquare color='white' fontSize={40} style={{marginRight:10}}/></a>
                        <a href="https://www.linkedin.com/in/huy-tran-777551178" target='_blank' rel="noreferrer"><FaLinkedin color='white' fontSize={40} style={{marginRight:10}}/></a> 
                        <a href="https://github.com/smart-think-app" target='_blank' rel="noreferrer"><FaGithubSquare color='white' fontSize={40} style={{marginRight:10}}/></a>
                        </div>
                </Container>
            </div>
        </div>
    )
}

export default HomeContainer;
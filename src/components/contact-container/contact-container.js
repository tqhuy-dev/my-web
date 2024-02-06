import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookSquare ,FaLinkedin,FaGithubSquare} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Constant from '../../constant/constant';
function ContactContainer(){
    return (
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
                        <span style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>{Constant.Phone}</span>
                    </div>
                    <div style={{marginBottom:20}}>
                        <span style={{padding:10,backgroundColor:"#02D7E5",borderRadius:10,marginRight:20}}>
                            <FaLocationDot color='white' fontSize={20} />
                        </span>
                        <span style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>{Constant.Location}</span>
                    </div>
                    <div style={{marginBottom:20}}>
                        <span style={{padding:10,backgroundColor:"#02D7E5",borderRadius:10,marginRight:20}}>
                            <MdEmail color='white' fontSize={20} />
                        </span>
                        <span style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>{Constant.Email}</span>
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
    )
}

export default ContactContainer;
import CardService from '../card-service/card-service';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Constant from '../../constant/constant'
function ServiceContainer(){
    return (
        <Container style={{ marginTop: "100px", textAlign: "center", marginBottom: "100px" }}>
                <div style={{ textAlign: 'center', color: 'white', fontSize: 48, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', marginBottom: 20 }}>Services</div>
                <Container>
                    <Row style={{ marginBottom: 20 }}>
                        <Col lg="1"></Col>
                        <Col>
                            <CardService icon="server" title={Constant.Services.WebServer.Title} 
                            description={Constant.Services.WebServer.Description}/>
                        </Col>
                        <Col>
                            <CardService icon="ai" title={Constant.Services.AI.Title} 
                            description={Constant.Services.AI.Description}/>
                        </Col>
                        <Col lg="1" ></Col>
                    </Row>
                    <Row>
                        <Col lg="1"></Col>
                        <Col>
                            <CardService icon="devops" title={Constant.Services.Devops.Title} 
                            description={Constant.Services.Devops.Description}/>
                        </Col>
                        <Col>
                            <CardService icon="data" title={Constant.Services.Data.Title} 
                            description={Constant.Services.Data.Description}/>
                        </Col>
                        <Col lg="1"></Col>
                    </Row>
                </Container>
            </Container>
    )
}

export default ServiceContainer;
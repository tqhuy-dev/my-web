import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './portfolio.css'
import CardPortfolio from '../card-portfolio/card-portfolio';
import Constants from '../../constant/constant'
import React from 'react';
function Portfolio() {

    let [listPortfolioCards, setStateList] = React.useState(Constants.Portfolio.WebApp.map((e, index) => {
        return <CardPortfolio title={e.title} description={e.description} direction={index % 2 === 0 ? "right" : "left"} />
    }));
    const updateCategory = (index) => {
        let listCate = Constants.Portfolio.WebApp
        switch (index) {
            case 0:
                listCate = Constants.Portfolio.WebApp;
                break
            case 1:
                listCate = Constants.Portfolio.AI;
                break
            case 2:
                listCate = Constants.Portfolio.Devops;
                break
            case 3:
                listCate = Constants.Portfolio.DataScience;
                break
            default:
                listCate = Constants.Portfolio.WebApp;
        }
        setStateList(listCate.map((e, index) => {
            return <CardPortfolio title={e.title} description={e.description} direction={index % 2 === 0 ? "right" : "left"} />
        }))
    }
    return (
        <div>
            <Container style={{ marginTop: "150px", textAlign: "center" }}>
                <div className='portfolio-title'>Portfolio</div>
                <Container>
                    <Row>
                        <Col lg="1"></Col>
                        <Col>
                            <div className='portfolio-category' onClick={() => updateCategory(0)}>Web App</div>
                        </Col>
                        <Col>
                            <div className='portfolio-category' onClick={() => updateCategory(1)}>AI</div>
                        </Col>
                        <Col>
                            <div className='portfolio-category' onClick={() => updateCategory(2)}>Devops</div>
                        </Col>
                        <Col>
                            <div className='portfolio-category' onClick={() => updateCategory()}>Data Science</div>
                        </Col>
                        <Col lg="1"></Col>
                    </Row>
                </Container>
            </Container>
            <Container style={{ marginTop: "100px" }}>
                {listPortfolioCards}
            </Container>
            <div className='portfolio-view-all'>
                <div className='portfolio-button-view-all'>View All</div>
            </div>
        </div>
    )
}

export default Portfolio;
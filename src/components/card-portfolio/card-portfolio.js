import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function CardPortfolio(props) {
    let direction = "right"
    if (props.direction) {
        direction = props.direction
    }
    return (
        <div>
            {direction === "right" ? <CardPortfolioRight title={props.title} description={props.description} /> :
                <CardPortfolioLeft title={props.title} description={props.description} />}
        </div>

    )
}

function CardPortfolioRight(props) {
    return (
        <Row style={{ marginBottom: "100px" }}>
            <Col lg="1"></Col>
            <Col style={{ textAlign: "start" }}>
                <ImagePortfolio />
            </Col>
            <Col>
                <Detail title={props.title} description={props.description} />
            </Col>
            <Col lg="1"></Col>
        </Row>
    )
}

function CardPortfolioLeft(props) {
    return (
        <Row style={{ marginBottom: "100px" }}>
            <Col lg="1"></Col>
            <Col>
                <Detail title={props.title} description={props.description} />
            </Col>
            <Col style={{ textAlign: "start" }}>
                <ImagePortfolio />
            </Col>
            <Col lg="1"></Col>
        </Row>
    )
}

function Detail(props) {
    return (
        <span>
            <span>
                <div style={{ color: '#02D7E5', fontSize: 48, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>{props.title}</div>
                <div style={{ color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>{props.description}</div>
            </span>
            <div style={{ color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}> Show more</div>
        </span>
    )
}

function ImagePortfolio() {
    return (
        <img alt='none' src="https://via.placeholder.com/436x407" />
    )
}


export default CardPortfolio;
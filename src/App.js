import './App.css';
import Nav from 'react-bootstrap/Nav';
import HomeContainer from './components/home-container/home-container';
function App() {
  return (
    <div className="App">
      <div className="common-container"></div>
      <Nav className='menu-parent'>
        <Nav.Item>
          <Nav.Link className='menu-item' href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='menu-item' eventKey="link-1">Services</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='menu-item' eventKey="link-2">Topics</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='menu-item' eventKey="link-2">Experience</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='menu-item' eventKey="link-2">Portfolio</Nav.Link>
        </Nav.Item>
      </Nav>
      <HomeContainer/>
    </div>
  );
}

export default App;

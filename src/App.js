
import './App.css';
import {Nav,Container ,Navbar} from 'react-bootstrap';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
function App() {
  return (
  <>
  <BrowserRouter>
    <Navbar  className="nav">
    <Container>
    <Navbar.Brand  className="logo">Capature the moment</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/About">About</Nav.Link>
    
    </Nav>

    </Container>
  </Navbar>
  <Switch>
    <Route path="/" exact component={Home}></Route>
    <Route path="/About" exact component={About}></Route>
  </Switch>

  </BrowserRouter>
  </>
   
  );
}

export default App;

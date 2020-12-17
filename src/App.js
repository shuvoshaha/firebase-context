import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Contact from './Components/Contact';
import Nav from './Components/Nav';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Container>
      <Router>
        <Nav />
        <Contact />
      </Router>
    </Container>
  );
}

export default App;

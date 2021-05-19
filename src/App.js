import './App.css';
import ProfilePhoto from './component/profile/ProfilePhoto'
import FullName from './component/profile/FullName'
import Adresse from './component/profile/Adresse'
import {Form,Nav,Navbar,FormControl,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    
    <div className="App">
      <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
     <ProfilePhoto></ProfilePhoto>
     <br/>
     <FullName></FullName>
     <br/>
     <Adresse></Adresse>
    </div>
  );
}

export default App;

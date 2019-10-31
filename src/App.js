import React from 'react';
import Card from './components/Card.js';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'

function App() {
  return (
  <div className="App">
    <header className="App-header">
    <div class="row justify-content-md-center navStyle">
      <nav class="col-md-9 col-xs-9">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">SuperFilm</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Films</Nav.Link>
              <Nav.Link href="#link">Series</Nav.Link>
              <Nav.Link href="#link">Acteurs</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Navbar bg="light" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Action</Nav.Link>
            <Nav.Link href="#link">Science-fiction</Nav.Link>
            <Nav.Link href="#link">Romance</Nav.Link>
            <Nav.Link href="#link">Policier</Nav.Link>
            <Nav.Link href="#link">Comedie</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
        </nav>
      </div>
    </header>
    <Card/>
    <Card/>
    <Card/>
  </div>
  );
}

export default App;

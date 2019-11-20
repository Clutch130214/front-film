import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import Card from '../../components/Card.js';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap'

class Dashboard extends Component {
  render() {
    return (
    <div>
      <header className="App-header">
        <div className="row justify-content-md-center navStyle">
          <nav className="col-md-9 col-xs-9">
            <Navbar bg="light" expand="lg" className="fixed-top">
              <Navbar.Brand href="#home">SuperFilm</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Films</Nav.Link>
                  <Nav.Link href="#series">Series</Nav.Link>
                  <Nav.Link href="#actors">Acteurs</Nav.Link>
                </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
            <Navbar bg="light" expand="lg" className="fixed-top top2">
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#action">Action</Nav.Link>
                  <Nav.Link href="#sciencefiction">Science-fiction</Nav.Link>
                  <Nav.Link href="#romantic">Romance</Nav.Link>
                  <Nav.Link href="#crime">Policier</Nav.Link>
                  <Nav.Link href="#comedies">Comedie</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </nav>
        </div>
      </header>
      <div className="margin-card-top">
        <Card
        title={'Titre'}
        description={'La description'}
        img={'https://pourlamourdesmotsdotcom.files.wordpress.com/2019/07/capture-de28099c3a9cran-2019-07-12-c3a0-18.15.34.png'}/>
        <Card
        title={'Titre'}
        description={'La description'}
        img={'https://pourlamourdesmotsdotcom.files.wordpress.com/2019/07/capture-de28099c3a9cran-2019-07-12-c3a0-18.15.34.png'}/>
        <Card
        title={'Titre'}
        description={'La description'}
        img={'https://pourlamourdesmotsdotcom.files.wordpress.com/2019/07/capture-de28099c3a9cran-2019-07-12-c3a0-18.15.34.png'}/>
      </div>
    </div>
    )
  }
}

export default Dashboard

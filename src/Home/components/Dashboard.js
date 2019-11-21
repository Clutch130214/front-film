import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import Card from '../../components/Card.js';
import { Button, Navbar, Nav, Form, FormControl, ListGroup } from 'react-bootstrap'
import AppStore from '../../store/AppStore'
import SeriesAction from '../../Series/SeriesAction.js'
// import SeriesDto from '../../Series/SeriesDto.js'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
        series: [],
        films: []
    }
}

  componentWillMount(){
    SeriesAction.fetchSeries().then(series => { this.setState({ series }) })
    SeriesAction.fetchFilms().then(films => { this.setState({ films }) })
    // AppStore.dispatch(SeriesAction.fetchSeries())
  }

  getSide(i){
    if(i%2 === 0){
      return 'right'
    } else {
      return 'left'
    }
  }

  getSeriesList(){
    return this.state.films.map(( s, i) => {
      return (
        <Card
        title={s.nom}
        description={s.description}
        img={s.url}
        side={this.getSide(i+1)}/>
      )
    })
  }

  render() {
    console.log(this.state.films)
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
                <Button href="/" variant="outline-info">Se déconnecter</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
            <Navbar bg="light" expand="lg" className="fixed-top top2">
            <Navbar.Brand>Catégories</Navbar.Brand>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#action">Action</Nav.Link>
                  <Nav.Link href="#sciencefiction">Science-fiction</Nav.Link>
                  <Nav.Link href="#romantic">Romance</Nav.Link>
                  <Nav.Link href="#crime">Policier</Nav.Link>
                  <Nav.Link href="#comedies">Comedie</Nav.Link>
                </Nav>

                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
          </nav>
        </div>
      </header>
      <div className="margin-card-top">
          {this.getSeriesList()}
      </div>
    </div>
    )
  }
}

// Dashboard.propTypes = {
//   series: PropTypes.instanceOf(SeriesDto),
// }
// const mapStateToProps = store => ({
//   series: store.SeriesReducer.series,
// })

export default Dashboard

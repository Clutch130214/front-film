import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import Card from '../../components/Card.js';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import Action from '../../Series/Action.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc, faFilm } from '@fortawesome/free-solid-svg-icons'
// import SeriesDto from '../../Series/SeriesDto.js'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
        series: [],
        films: [],
        acteurs: [],
        data: [],
        noneTitle: 'Aucun Films',
        noneIcon: faFilm
    }
}

  componentWillMount(){
    Action.fetchSeries().then(series => { this.setState({ series }) })
    Action.fetchFilms().then(films => { this.setState({ films: films, data: films })})
    // Action.fetchActeurs().then(acteurs => { this.setState({ acteurs }) })
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
    if(this.state.data.length){
      return this.state.data.map(( s, i) => {
        return (
          <Card
          title={s.nom}
          description={s.description}
          img={s.url}
          side={this.getSide(i+1)}/>
        )
      })
    }
    else {
      console.log(this.state.data)
      return (
        <div style={{ textAlign: 'center', paddingTop: '100px'}}>
            <FontAwesomeIcon icon={this.state.noneIcon} size="4x" />
            <h1>{this.state.noneTitle}</h1>
        </div>
      )
    }
  }

  switchData(data, title, icon, selected){
    this.setState({
      data: data,  
      noneTitle: title, 
      noneIcon: icon,
      selected: selected
    })
  }

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
                  <Nav.Link onClick={() => this.switchData(this.state.films,'Aucun Films', faFilm)}>Films</Nav.Link>
                  <Nav.Link onClick={() => this.switchData(this.state.series, 'Aucune Series', faCompactDisc)}>Series</Nav.Link>
                  {/* <Nav.Link onClick={() => this.setState({ data: this.state.acteurs })}href="#actors">Acteurs</Nav.Link> */}
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
                  <Nav.Link href="#tous">Tous</Nav.Link>
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

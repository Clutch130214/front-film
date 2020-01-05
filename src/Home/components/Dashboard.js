import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import Card from '../../components/Card.js';
import ActeurCard from '../../components/ActeurCard.js';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Dropdown, DropdownButton, Spinner } from 'react-bootstrap'
import SeriesAction from '../../Series/SeriesAction.js'
import { faCompactDisc, faFilm, faUserTie} from '@fortawesome/free-solid-svg-icons'
import AppStore from '../../store/AppStore.js'
import FilmsAction from '../../Films/FilmsAction.js'
import ActeursAction from '../../Acteurs/ActeursAction.js'
import {
  FILM, SERIE, ACTEUR
} from '../constant/HomeConstant'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      noneTitle: 'Aucun Films',
      noneIcon: faFilm,
      show: false,
      dataLoaded: false,
      selected: 'film'
    }
  }

  componentWillMount(){
    FilmsAction.fetchFilms(() => {this.setState({  data: AppStore.getState().FilmsReducer.films, dataLoaded: true })})
  }

  getSide(i){
    if(i%2 === 0){
      return 'right'
    } else {
      return 'left'
    }
  }

  getDataList(){
    if(this.state.data.length){
      return this.state.data.map((d, i) => {
        return (
          <div>
            {
              this.state.selected != ACTEUR ?
              <Card obj={d} side={this.getSide(i+1)}/>
              :
              <ActeurCard obj={d} side={this.getSide(i+1)}/>
            }
          </div>
        )
      })
    }
    else {
      return (
        <div style={{ textAlign: 'center', paddingTop: '100px'}}>
          <div>
            <div class="spinner-border m-5" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      )
    }
  }

  getFilms(title, icon, selected){
    FilmsAction.fetchFilms(() => {this.setState({
      data: AppStore.getState().FilmsReducer.films,
      noneTitle: title,
      noneIcon: icon,
      selected: selected
    })})
  }

  getSeries(title, icon, selected){
    SeriesAction.fetchSeries(() => {this.setState({
      data: AppStore.getState().SeriesReducer.series,
      noneTitle: title,
      noneIcon: icon,
      selected: selected
    })})
  }

  getActeurs(title, icon, selected){
    ActeursAction.fetchActeurs(() => {this.setState({
      data: AppStore.getState().ActeursReducer.acteurs,
      noneTitle: title,
      noneIcon: icon,
      selected: selected
    })})
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <div className="row justify-content-md-center navStyle">
            <nav className="col-md-9 col-xs-9">
              <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand href="#home">SuperFilm</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav defaultActiveKey="#first">
                      <Nav.Item>
                        <Nav.Link onClick={() => this.getFilms('Aucun Films', faFilm, FILM)} href="#films">Films</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link onClick={() => this.getSeries('Aucune Series', faCompactDisc, SERIE)} href="#series">Series</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link onClick={() => this.getActeurs('Aucun Acteurs', faUserTie, ACTEUR)} href="#acteurs">Acteurs</Nav.Link>
                      </Nav.Item>
                      <NavDropdown title="Catégories" id="basic-nav-dropdown">
                        <NavDropdown.Item eventKey="1">Tous</NavDropdown.Item>
                        <NavDropdown.Item eventKey="2">Action</NavDropdown.Item>
                        <NavDropdown.Item eventKey="3">Science-fiction</NavDropdown.Item>
                        <NavDropdown.Item eventKey="3">Policier</NavDropdown.Item>
                        <NavDropdown.Item eventKey="3">Comédie</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Nav>
                  <Form inline>
                    <FormControl type="text" placeholder="Recherche" className="mr-sm-2" />
                    <Button href="/" variant="outline-danger">Se déconnecter</Button>
                  </Form>
                </Navbar.Collapse>
              </Navbar>
            </nav>
          </div>
        </header>
        <div className="margin-card-top">
          {this.getDataList()}
        </div>
      </div>
    )
  }
}

export default Dashboard

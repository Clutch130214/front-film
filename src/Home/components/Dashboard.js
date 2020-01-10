import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import Card from '../../components/Card.js';
import ActeurCard from '../../components/ActeurCard.js';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import { faCompactDisc, faFilm, faUserTie} from '@fortawesome/free-solid-svg-icons'
import SeriesAction from '../../Series/SeriesAction.js'

import AppStore from '../../store/AppStore.js'
import FilmsAction from '../../Films/FilmsAction.js'
import ActeursAction from '../../Acteurs/ActeursAction.js'
import {
  FILM, SERIE, ACTEUR
} from '../constant/HomeConstant'

import AuthService from '../../components/AuthService';
import WithAuth from '../../components/WithAuth';
const Auth = new AuthService();


class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
        data: [],
        noneTitle: 'Aucun Films',
        noneIcon: faFilm,
        show: false,
        dataLoaded: false,
        selected: 'film',
        search: '',
    }
    this.onChangeSearch = this.onChangeSearch.bind(this)
}

  componentWillMount(){
    FilmsAction.fetchFilms(() => {this.setState({  data: AppStore.getState().FilmsReducer.films, dataLoaded: true })})
  }

  onChangeSearch(value) {
    this.setState({ search: value })
  }

  getSide(i){
    if(i%2 === 0){
      return 'right'
    } else {
      return 'left'
    }
  }

  getDataList(){
    const data = this.state.data.filter( d => d.nom.toLowerCase().trim().includes(this.state.search.trim().toLowerCase()))
    if(data.length){
      return data.map((d, i) => {
        return (
          <div>
            {
              this.state.selected !== ACTEUR ?
              <Card obj={d} side={this.getSide(i+1)} key={i}/>
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
            <div className="spinner-border m-5" role="status">
              <span className="sr-only">Loading...</span>
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
      search: '',
      selected: selected
    })})
  }

  getSeries(title, icon, selected){
    SeriesAction.fetchSeries(() => {this.setState({
      data: AppStore.getState().SeriesReducer.series,
      noneTitle: title,
      noneIcon: icon,
      search: '',
      selected: selected
    })})
  }

  getActeurs(title, icon, selected){
    ActeursAction.fetchActeurs(() => {this.setState({
      data: AppStore.getState().ActeursReducer.acteurs,
      noneTitle: title,
      noneIcon: icon,
      search: '',
      selected: selected
    })})
  }

  handleLogout(){
    Auth.logout()
    this.props.history.replace('/login');
 }

  render() {
    return (
      <div>
        <header className="App-header">
          <div className="row justify-content-md-center navStyle">
            <nav className="col-md-9 col-xs-9">
              <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand href="#home">SuperFilm</Navbar.Brand>
                <Navbar.Brand>Bienvenue {this.props.user.username} !</Navbar.Brand>
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
                        <NavDropdown.Item eventKey="4">Policier</NavDropdown.Item>
                        <NavDropdown.Item eventKey="5">Comédie</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Nav>
                  <Form inline>
                    <FormControl type="text" onChange={ (e) => this.onChangeSearch((e.target.value)) } placeholder="Recherche" className="mr-sm-2"/>
                    <Button variant="outline-danger" onClick={this.handleLogout.bind(this)}>Se déconnecter</Button>
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

export default WithAuth(Dashboard)

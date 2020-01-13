import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component, Fragment } from 'react'
import Card from '../../components/Card.js';
import ActeurCard from '../../components/ActeurCard.js';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import { faCompactDisc, faFilm, faUserTie} from '@fortawesome/free-solid-svg-icons'
import SeriesAction from '../../Series/SeriesAction.js'

import AppStore from '../../store/AppStore.js'
import FilmsAction from '../../Films/FilmsAction.js'
import ActeursAction from '../../Acteurs/ActeursAction.js'
import {
  FILM, SERIE, ACTEUR, ALL_CATEGORY
} from '../constant/HomeConstant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AuthService from '../../Auth/AuthService';
import WithAuth from '../../Auth/WithAuth';
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
        category: this.findCategory(0)
    }
}

  componentWillMount() {
    FilmsAction.fetchFilms(() => {this.setState({  data: AppStore.getState().FilmsReducer.films, dataLoaded: true })})
  }

  onChangeSearch = (value) => {
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
    const category = this.state.category
    const data = this.state.data.filter( d => d.nom.toLowerCase().trim().includes(this.state.search.trim().toLowerCase()))
    const dataWithCategory = category !== this.findCategory(0) ? data.filter( dc => dc.categorie === this.state.category.name) : data
    if(dataWithCategory.length){
      return dataWithCategory.map((d, i) => {
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
        !this.state.dataLoaded ?
        <div style={{ textAlign: 'center', paddingTop: '100px'}}>
          <div>
            <div class="spinner-border m-5" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
        :
        <div style={{ textAlign: 'center', paddingTop: '100px'}}>
            <FontAwesomeIcon icon={this.state.noneIcon} size="4x" />
            <h1>{this.state.noneTitle}</h1>
        </div>
      )
    }
  }

  findCategory(id) {
    return ALL_CATEGORY.find(c => c.id === id)
  }

  getFilms(title, icon, selected){
    FilmsAction.fetchFilms(() => {this.setState({
      data: AppStore.getState().FilmsReducer.films,
      noneTitle: title,
      noneIcon: icon,
      search: '',
      category: this.findCategory(0),
      selected: selected
    })})
  }

  getSeries(title, icon, selected){
    SeriesAction.fetchSeries(() => {this.setState({
      data: AppStore.getState().SeriesReducer.series,
      noneTitle: title,
      noneIcon: icon,
      search: '',
      category: this.findCategory(0),
      selected: selected
    })})
  }

  getActeurs(title, icon, selected){
    ActeursAction.fetchActeurs(() => {this.setState({
      data: AppStore.getState().ActeursReducer.acteurs,
      noneTitle: title,
      noneIcon: icon,
      search: '',
      category: this.findCategory(0),
      selected: selected
    })})
  }

  handleLogout(){
    Auth.logout()
    this.props.history.replace('/login');
 }

 setCategory = (category) => {
   this.setState({ category : category })
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
                      { this.state.selected !== ACTEUR &&
                      <Fragment>
                        <NavDropdown title={this.state.category.label} id="basic-nav-dropdown">
                          <NavDropdown.Item onClick={() => this.setCategory(this.findCategory(0))} eventKey="0">Tous</NavDropdown.Item>
                          <NavDropdown.Item onClick={() => this.setCategory(this.findCategory(1))} eventKey="1">Action</NavDropdown.Item>
                          <NavDropdown.Item onClick={() => this.setCategory(this.findCategory(2))} eventKey="2">Science-fiction</NavDropdown.Item>
                          <NavDropdown.Item onClick={() => this.setCategory(this.findCategory(3))} eventKey="3">Romance</NavDropdown.Item>
                          <NavDropdown.Item onClick={() => this.setCategory(this.findCategory(4))} eventKey="4">Policier</NavDropdown.Item>
                          <NavDropdown.Item onClick={() => this.setCategory(this.findCategory(5))} eventKey="5">Comédie</NavDropdown.Item>
                        </NavDropdown>
                      </Fragment>}
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

export default Dashboard
// export default WithAuth(Dashboard)

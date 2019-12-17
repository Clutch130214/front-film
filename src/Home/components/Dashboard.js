import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import Card from '../../components/Card.js';
import ActeurCard from '../../components/ActeurCard.js';
import { Button, Navbar, Nav, Form, FormControl, Dropdown, DropdownButton, Spinner } from 'react-bootstrap'
import SeriesAction from '../../Series/SeriesAction.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
          {this.state.dataLoaded ?
            <div>
              <FontAwesomeIcon icon={this.state.noneIcon} size="4x" />
              <h1>{this.state.noneTitle}</h1>
            </div>
          :
          <div>
            <div>
              <img src='https://gifimage.net/wp-content/uploads/2018/11/gif-clap-cin%C3%A9ma-7.gif' className='card-img img-responsive' alt='...' style={{ width: '10%'}}/>
            </div>
            <div>
              <Spinner animation="grow" variant="dark" />
            </div>
          </div>}
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
            <Navbar bg="light" expand="lg" className="fixed-top">
              <Navbar.Brand href="#home">SuperFilm</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav variant="pills" defaultActiveKey="#first">
                    <Nav.Item>
                      <Nav.Link onClick={() => this.getFilms('Aucun Films', faFilm, FILM)} href="#films">Films</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link onClick={() => this.getSeries('Aucune Series', faCompactDisc, SERIE)} href="#series">Series</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link onClick={() => this.getActeurs('Aucun Acteurs', faUserTie, ACTEUR)} href="#acteurs">Acteurs</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  {/* <Nav.Link onClick={() => this.getFilms('Aucun Films', faFilm, FILM)}>Films</Nav.Link>
                  <Nav.Link onClick={() => this.getSeries('Aucune Series', faCompactDisc, SERIE)}>Series</Nav.Link>
                  <Nav.Link onClick={() => this.getActeurs('Aucun Acteurs', faUserTie, ACTEUR)}>Acteurs</Nav.Link> */}
                </Nav>
                <Form inline>
                <Button href="/" variant="outline-info">Se déconnecter</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
            <Navbar bg="light" expand="lg" className="fixed-top top2">
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <DropdownButton
                      drop={'right'}
                      variant="success"
                      title={'Catégories'}
                      id={'dropdown-button-drop-right'}
                      key={'right'}>
                    <Dropdown.Item eventKey="1">Tous</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Science-fiction</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Romance</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Policier</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Comedie</Dropdown.Item>
                  </DropdownButton>
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
          {this.getDataList()}
      </div>
    </div>
    )
  }
}

export default Dashboard

import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Navbar, ButtonToolbar, Popover, Nav } from 'react-bootstrap'
import AuthService from '../../Auth/AuthService';
import FilmsAction from '../../Films/FilmsAction';
import AppStore from '../../store/AppStore';
import ActeursAction from '../../Acteurs/ActeursAction';
import ActeurCardDashboard from '../../components/ActeurCardDashboard';
import { OverlayTrigger } from 'react-bootstrap';
const Auth = new AuthService();

class FilmDashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      film: [],
      acteurs: []
  }
}

handleLogout(){
  Auth.logout()
  this.props.history.replace('/login');
}

componentWillMount() {
  FilmsAction.fetchFilm(this.props.match.params.id, () => {
    ActeursAction.fetchActeurs(() => {
      this.setState({ acteurs : AppStore.getState().FilmsReducer.film.acteur_list.map( al => {
        return AppStore.getState().ActeursReducer.acteurs.find( a => a.id === al.id )
        })
      })
    })
    this.setState({  film: AppStore.getState().FilmsReducer.film, dataLoaded: true })}
    )
}

getActeurList() {
  return this.state.acteurs.map( a => {
      return <ActeurCardDashboard obj={a}/>
  })
}

  render() {
    return (
      <div>
        <header className="App-header">
          <div className="row justify-content-md-center navStyle">
            <nav className="col-md-9 col-xs-9">
              <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                  <Navbar.Brand href="/">SuperFilm</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <ButtonToolbar>
                            <OverlayTrigger
                              trigger="click"
                              key={'bottom'}
                              placement={'bottom'}
                              overlay={
                                <Popover id={`popover-positioned-${'bottom'}`}>
                                  <Button variant="outline-danger" onClick={this.handleLogout.bind(this)}>Se déconnecter</Button>
                                </Popover>
                              }
                              >
                              <Button variant="info">Connecté en tant que {localStorage.getItem('login')}</Button>
                            </OverlayTrigger>
                    </ButtonToolbar>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
            </nav>
          </div>
        </header>
        <div className="margin-card-top">
          <div className="row justify-content-md-center">
          <div className="col-md-9 col-xs-9">
            <div className='card mb-3 h-60 border border-primary'>
              <div className='row no-gutters'>
                <div className='col-md-2'>
                  <img src={this.state.film.url} className='card-img img-responsive' alt='...'/>
                </div>
                <div className='col-md-10'>
                  <div className='card-body'>
                    <h5 className='card-title'>{this.state.film.nom}</h5>
                    <p className='card-text'>{this.state.film.description}</p>
                    </div>
                  </div>
                </div>
                <div className="card-group row no-gutters pt-1">
                  {this.getActeurList()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

FilmDashboard.propTypes = {
  params: PropTypes.shape({
      id: PropTypes.number,
  }),
}

export default FilmDashboard

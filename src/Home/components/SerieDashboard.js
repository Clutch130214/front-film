import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import { Navbar, Button, ButtonToolbar, Popover } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types'
import AuthService from '../../Auth/AuthService';
import SeriesAction from '../../Series/SeriesAction';
import ActeursAction from '../../Acteurs/ActeursAction';
import AppStore from '../../store/AppStore';
import ActeurCard from '../../components/ActeurCard';
import { OverlayTrigger } from 'react-bootstrap';
const Auth = new AuthService();


class SerieDashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      serie: [],
      acteurs: []
  }
}

handleLogout(){
  Auth.logout()
  this.props.history.replace('/login');
}

componentWillMount() {
  SeriesAction.fetchSerie(this.props.match.params.id, () => {
    ActeursAction.fetchActeurs(() => {
      this.setState({ acteurs : AppStore.getState().SeriesReducer.serie.acteur_list.map( al => {
        return AppStore.getState().ActeursReducer.acteurs.find( a => a.id === al.id )
        })
      })
    })
    this.setState({  serie: AppStore.getState().SeriesReducer.serie, dataLoaded: true })}
    )
}

getActeurList() {
  return this.state.acteurs.map( a => {
      return <ActeurCard obj={a} side={'left'}/>
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
                  </Navbar.Collapse>
                </Navbar>
            </nav>
          </div>
        </header>
        <div className="margin-card-top">
          <div className="row justify-content-md-center">
          <div className="col-md-9 col-xs-9">
            <div className='card mb-3 h-60'>
              <div className='row no-gutters'>
                <div className='col-md-2'>
                  <img src={this.state.serie.url} className='card-img img-responsive' alt='...'/>
                </div>
                <div className='col-md-10'>
                  <div className='card-body'>
                    <h5 className='card-title'>{this.state.serie.nom}</h5>
                    <p className='card-text'>{this.state.serie.description}</p>
                  </div>
                </div>
              </div>
              {this.getActeurList()}
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

SerieDashboard.propTypes = {
  params: PropTypes.shape({
      id: PropTypes.number,
  }),
}

export default SerieDashboard

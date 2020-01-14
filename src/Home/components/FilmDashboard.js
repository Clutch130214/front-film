import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Form, Navbar } from 'react-bootstrap'
import AuthService from '../../Auth/AuthService';
import FilmsAction from '../../Films/FilmsAction';
import AppStore from '../../store/AppStore';
import ActeursAction from '../../Acteurs/ActeursAction';
import ActeurCard from '../../components/ActeurCard';
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
                    <Form inline>
                      <Button variant="outline-danger" onClick={this.handleLogout.bind(this)}>Se déconnecter</Button>
                    </Form>
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
                  <img src={this.state.film.url} className='card-img img-responsive' alt='...'/>
                </div>
                <div className='col-md-10'>
                  <div className='card-body'>
                    <h5 className='card-title'>{this.state.film.nom}</h5>
                    <p className='card-text'>{this.state.film.description}</p>
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

FilmDashboard.propTypes = {
  params: PropTypes.shape({
      id: PropTypes.number,
  }),
}

export default FilmDashboard

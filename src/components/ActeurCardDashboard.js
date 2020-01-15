import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/ActeurCardDashboard.css';

class ActeurCard extends Component {

  getActorImage() {
    return (
      <div>
        <img src={ this.props.obj.url } className='card-img-actor rounded-0' alt='...' />
        <h6 className='card-text text-center text-light bg-primary'>{ this.props.obj.prenom } { this.props.obj.nom }</h6>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.getActorImage()}
      </div>
    )
  }
}

ActeurCard.propTypes = {
  obj: PropTypes.object
}

export default ActeurCard

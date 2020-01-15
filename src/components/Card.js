import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'

class Card extends Component {

  getLeftCard(){
    return (
      <div className="row justify-content-md-center">
        <div className="col-md-9 col-xs-9">
          <div className='card mb-3 h-60 border border-info'>
            <div className='row no-gutters shadow'>
              <div className='col-md-2'>
                <img src={this.props.obj.url} className='card-img img-responsive' alt='...'/>
              </div>
              <div className='col-md-10'>
                <div className='card-body'>
                  <h5 className='card-title'>{this.props.obj.nom}</h5>
                  <p className='card-text'>{this.props.obj.description}</p>
                  <div style={{ position: 'absolute', right: '5px', bottom: '5px' }}>
                    <Button href={this.props.url} variant="info"><FontAwesomeIcon icon={faInfo} size="2x" /></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  getRightCard(){
    return (
      <div className="row justify-content-md-center">
        <div className="col-md-9 col-xs-9">
          <div className='card mb-3 h-60 border border-info'>
            <div className='row no-gutters shadow'>
              <div className='col-md-10'>
                <div className='card-body'>
                  <h5 className='card-title'>{this.props.obj.nom}</h5>
                  <p className='card-text'>{this.props.obj.description}</p>
                  <div style={{ position: 'absolute', left: '5px', bottom: '5px' }}>
                    <Button href={this.props.url} variant="info"><FontAwesomeIcon icon={faInfo} size="2x" /></Button>
                  </div>
                </div>
              </div>
              <div className='col-md-2'>
                <img src={this.props.obj.url} className='card-img img-responsive' alt='...'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  getContent(){
    switch(this.props.side){
      case 'left': return this.getLeftCard()
      case 'right': return this.getRightCard()
      default: return this.getLeftCard()
    }
  }
  render() {
    return (
      <div className="Card">
        {this.getContent()}
      </div>
    )
  }
}

Card.propTypes = {
  obj: PropTypes.object,
  side: PropTypes.string,
  url: PropTypes.string,
}

export default Card

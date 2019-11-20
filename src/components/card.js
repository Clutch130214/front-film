import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Card extends Component {
  render() {
    return (
    <div className="Card">
      <div class="row justify-content-md-center">
        <div class="col-md-9 col-xs-9">
          <div className='card mb-3 h-60'>
            <div className='row no-gutters'>
              <div className='col-md-2'>
                <img src={this.props.img} className='card-img img-responsive' alt='...'/>
              </div>
              <div className='col-md-10'>
                <div className='card-body'>
                  <h5 className='card-title'>{this.props.title}</h5>
                  <p className='card-text'>{this.props.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div class="col-md-9 col-xs-9">
          <div className='card mb-3 h-60'>
            <div className='row no-gutters'>
              <div className='col-md-10'>
                <div className='card-body'>
                    <h5 className='card-title'>{this.props.title}</h5>
                  <p className='card-text'>{this.props.description}</p>
                </div>
              </div>
              <div className='col-md-2'>
                <img src={this.props.img} className='card-img img-responsive' alt='...'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
}

export default Card

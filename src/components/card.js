import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'

class Card extends Component {
  render() {
    return (
    <div className="Card">
      <div class="row justify-content-md-center">
        <div class="col-md-9 col-xs-9">
          <div className='card mb-3 h-60'>
            <div className='row no-gutters'>
              <div className='col-md-2'>
                <img src='https://pourlamourdesmotsdotcom.files.wordpress.com/2019/07/capture-de28099c3a9cran-2019-07-12-c3a0-18.15.34.png' className='card-img img-responsive' alt='...'/>
              </div>
              <div className='col-md-10'>
                <div className='card-body'>
                  <h5 className='card-title'>Card title</h5>
                  <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
                  <h5 className='card-title'>Card title</h5>
                  <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
              <div className='col-md-2'>
                <img src='https://pourlamourdesmotsdotcom.files.wordpress.com/2019/07/capture-de28099c3a9cran-2019-07-12-c3a0-18.15.34.png' className='card-img img-responsive' alt='...'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Card

import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'

class Card extends Component {
    render() {
        return (
            <div>
               <div className='card mb-3' style={{maxWidth: '540px'}}>
                <div className='row no-gutters'>
                    <div className='col-md-4'>
                    <img src='https://pourlamourdesmotsdotcom.files.wordpress.com/2019/07/capture-de28099c3a9cran-2019-07-12-c3a0-18.15.34.png' className='card-img' alt='...'/>
                    </div>
                    <div className='col-md-8'>
                    <div className='card-body'>
                        <h5 className='card-title'>Card title</h5>
                        <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Card
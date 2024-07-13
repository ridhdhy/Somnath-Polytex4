import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


function Carousels() {
  return (
    <div>
       <Carousel>
      <Carousel.Item>
        <img style={{height:'80vh'}}
        className='d-block w-100'
        src='./images/4.jpg'
        alt='first slide'
        
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'80vh'}}
        className='d-block w-100'
        src='./images/5.jpg'
        alt='second slide'
        
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'80vh'}}
        className='d-block w-100'
        src='./images/6.jpg'
        alt='third slide'
        
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carousels

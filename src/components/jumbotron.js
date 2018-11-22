import React from 'react'
import PropTypes from 'prop-types'
import { Jumbotron, Button } from 'reactstrap'
import styled from 'styled-components'

const Background = styled(Jumbotron)`
  background: linear-gradient(
    rgba(0, 0, 0, 0.52),
    rgba(0, 0, 0, 0.56)), 
    url(${props => props.image}
  );
  background-size: cover;
  background-position: 0 20%;
`


export default function Hero(props) {
  const { image } = props
  return (
    <Background image={image} className="text-white mb-4">
      <h1 className="display-3 text-white">Hello, world!</h1>
      <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr className="my-2 border-white" />
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p className="lead">
        <Button color="primary">Learn More</Button>
      </p>
    </Background>
  )
}

Hero.propTypes = {
  image: PropTypes.string.isRequired,
}

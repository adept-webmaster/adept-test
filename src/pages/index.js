import React from 'react'
import {
  Container, Row, Col,
} from 'reactstrap'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Hero from '../components/jumbotron'
import Card from '../components/card'

import bg from '../images/gatsby-astronaut.png'

const IndexPage = ({ data }) => (
  <Layout>
    <Hero image={bg} />
    <Row>
      <Card />
      <Card />
      <Card />
    </Row>
    <Row>
      <Col>
        <Img fluid={data.bottomImg.childImageSharp.fluid} />
      </Col>
    </Row>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    bottomImg: file(relativePath: { eq: "megaphone.jpg" }) {
      ...GetFluidImageFragmentFullWidth
    }
  }
`

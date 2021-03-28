import * as React from "react"
import { graphql, useStaticQuery, useQuery, Link } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components'

const CenterDiv = styled.div`
  text-align: center;
`

export const query = graphql`
  {
    allGraphCmsProject {
      nodes {
        project_title
      }
    }
  }
`

// markup
const IndexPage = ({ data }) => {
  return (
    <main>
      <title>Home Page</title>
      <Container>
        <Row>
          <Col> 
            <CenterDiv>
              1 of 2
            </CenterDiv>
          </Col>
          <Col> 
            <CenterDiv>
              2 of 2
            </CenterDiv>
          </Col>
        </Row>
        <Row>
        <Col> 
            <CenterDiv>
              1 of 3
            </CenterDiv>
          </Col>
          <Col> 
            <CenterDiv>
              2 of 3
            </CenterDiv>
          </Col>
          <Col> 
            <CenterDiv>
              3 of 3
            </CenterDiv>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default IndexPage

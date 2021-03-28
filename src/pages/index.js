import * as React from "react"
import { graphql, useStaticQuery, useQuery, Link } from 'gatsby';
import styled from 'styled-components'
import Footer from '../components/footer'
import Header from '../components/header'
import Dashboard from '../components/Dashboard'

const CenterDiv = styled.div`
  text-align: center;
  background-color: palevioletred;
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
      <Dashboard/>
      <title>Home Page</title>
      <Header/>
      <h1>Hello {data.allGraphCmsProject.nodes[0].project_title} </h1>
      <div>
      <Link to="/404/">404</Link>
      <Link to="/contact/">Contact</Link>

    </div>
      <Footer/>
    </main>
  )
}

export default IndexPage

import * as React from "react"
import { graphql, useStaticQuery, useQuery, Link } from 'gatsby';
import styled from 'styled-components'
import Dashboard from '../components/Dashboard'

const CenterDiv = styled.div`
  text-align: center;
  background-color: palevioletred;
  height: 200px;
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
    </main>
  )
}

export default IndexPage

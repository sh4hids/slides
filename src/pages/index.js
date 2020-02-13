import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Slides" />
    <h2>Hi people</h2>
    <p>
      Welcome to my slides collection. You can find all of my slides listed
      below:
    </p>

    <ul>
      <li>
        <Link to="/desktop-app-with-electron">
          Building A Desktop App Using Electron, Node & React
        </Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage

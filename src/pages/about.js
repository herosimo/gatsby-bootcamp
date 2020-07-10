import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import { Link } from "gatsby"

function AboutPage() {
  return (
    <Layout>
      <Head title="About" />

      <h2>About</h2>
      <p>
        If you wanna take a project with me, just leave your message from{" "}
        <Link to="contact">Contact Page</Link>
      </p>
    </Layout>
  )
}

export default AboutPage

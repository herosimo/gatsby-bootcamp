import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

function IndexPage() {
  return (
    <Layout>
      <Head title="Home" />

      <h2>Welcome!</h2>
      <p>
        This website is built with{" "}
        <a href="https://gatsbyjs.org" target="_blank">
          Gatsby JS
        </a>{" "}
        and{" "}
        <a href="https://contentful.com" target="_blank">
          Contentfull CMS
        </a>
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        quisquam, et facilis consectetur vero ullam rerum alias veritatis,
        accusamus velit eum a aperiam. Deleniti hic delectus commodi, aliquid
        molestiae suscipit?
      </p>
    </Layout>
  )
}

export default IndexPage

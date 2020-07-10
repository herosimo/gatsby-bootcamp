import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

import blogStyles from "./blog.module.scss"

function BlogPage() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges.map(edge => (
    <Link key={edge.node.id} to={`/blog/${edge.node.fields.slug}`}>
      <div className={blogStyles.post}>
        <h2>{edge.node.frontmatter.title}</h2>
        <p>{edge.node.frontmatter.date}</p>
      </div>
    </Link>
  ))

  return (
    <Layout>
      <Head title="Blog" />

      {posts}
    </Layout>
  )
}

export default BlogPage

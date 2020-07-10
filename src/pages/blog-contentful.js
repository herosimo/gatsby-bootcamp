import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

import blogStyles from "./blog.module.scss"

function BlogContentfulPage() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  const posts = data.allContentfulBlogPost.edges.map(edge => (
    <Link key={edge.node.id} to={`/blog/${edge.node.slug}`}>
      <div className={blogStyles.post}>
        <h2>{edge.node.title}</h2>
        <p>{edge.node.publishedDate}</p>
      </div>
    </Link>
  ))

  return (
    <Layout>
      <Head title="Post from Contentful" />

      {posts}
    </Layout>
  )
}

export default BlogContentfulPage

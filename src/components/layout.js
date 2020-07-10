import React from "react"

import Footer from "../components/footer"
import Header from "../components/header"

import "../styles/index.scss"
import LayoutStyles from "./layout.module.scss"

function Layout(props) {
  return (
    <div className={LayoutStyles.container}>
      <div className={LayoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout

import "../styles/main.scss"
import { FilterContextProvider } from "../contexts/FilterContext"
import Footer from "./Footer"
import Navbar from "./Navbar"
import React from "react"

const Layout = props => {
  return (
    <React.Fragment>
      <FilterContextProvider>
        <Navbar />
        {props.children}
        <Footer />
      </FilterContextProvider>
    </React.Fragment>
  )
}

export default Layout

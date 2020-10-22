import "../styles/main.scss"
import { FilterContextProvider } from "../contexts/FilterContext"
import { LayoutContextProvider } from "../contexts/LayoutContext"
import Footer from "./Footer"
import Navbar from "./Navbar"
import React from "react"

const Layout = props => {
  return (
    <React.Fragment>
      <FilterContextProvider>
        <LayoutContextProvider>
          <Navbar />
          {props.children}
          <Footer />
        </LayoutContextProvider>
      </FilterContextProvider>
    </React.Fragment>
  )
}

export default Layout

import React, { useState } from "react"

export const LayoutContext = React.createContext()

export const LayoutContextProvider = props => {
  const [grid, setGrid] = useState(false)

  return (
    <LayoutContext.Provider value={{ grid, setGrid }}>
      {props.children}
    </LayoutContext.Provider>
  )
}

import React, { useState } from "react"

export const FilterContext = React.createContext()

export const FilterContextProvider = props => {
  const [filter, setFilter] = useState("")

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {props.children}
    </FilterContext.Provider>
  )
}

import { Alert } from "react-bootstrap"
import { FilterContext } from "../contexts/FilterContext"
import { useStaticQuery, graphql } from "gatsby"
import classNames from "classnames"
import Preview from "./Preview/Preview"
import React, { useContext, useEffect, useRef, useState } from "react"

const PreviewList = () => {
  const { allDarkJson: darkThemes, allLightJson: lightThemes } = useStaticQuery(
    graphql`
      query {
        allDarkJson {
          edges {
            node {
              parent {
                ... on File {
                  id
                  name
                }
              }
              colors {
                color0
                color1
                color10
                color11
                color12
                color13
                color14
                color15
                color16
                color17
                color2
                color3
                color4
                color5
                color6
                color7
                color8
                color9
              }
              special {
                foreground
                cursor
                background
              }
            }
          }
        }
        allLightJson {
          edges {
            node {
              parent {
                ... on File {
                  id
                  name
                }
              }
              colors {
                color0
                color1
                color10
                color11
                color12
                color13
                color14
                color15
                color16
                color17
                color2
                color3
                color4
                color5
                color6
                color7
                color8
                color9
              }
              special {
                foreground
                cursor
                background
              }
            }
          }
        }
      }
    `
  )

  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const { filter } = useContext(FilterContext)
  const [regex, setRegex] = useState("")

  const filterThemes = (themes, regex) =>
    themes.edges.filter(theme => theme.node.parent.name.match(regex))

  const [filteredThemes, setFilteredThemes] = useState({
    dark: filterThemes(darkThemes),
    light: filterThemes(lightThemes),
  })

  useEffect(() => {
    try {
      setRegex(new RegExp(filter, "i"))
      setError(false)
      setErrorMessage("")
    } catch (e) {
      setError(true)
      setErrorMessage(e.message)
    }
  }, [filter])

  // Don't run this when component mounts (equivalent to componentDidUpdate())
  const mounted = useRef()
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
    } else {
      setFilteredThemes({
        dark: filterThemes(darkThemes, regex),
        light: filterThemes(lightThemes, regex),
      })
    }
  }, [regex])

  return (
    <div>
      <noscript>
        <Alert className={classNames("mb-5")} variant="warning">
          <h2 className={classNames("h4", "mb-1")}>JavaScript not enabled</h2>
          You need to enable JavaScript to use the filter functionality.
        </Alert>
      </noscript>
      {/* Display potential error from regex */}
      {error ? (
        <Alert variant="danger">
          <h2 className={classNames("h4", "mb-1")}>Error</h2>
          {errorMessage}
        </Alert>
      ) : (
        Object.keys(filteredThemes).map(category => (
          <div className={classNames("my-4")} key={category}>
            <h2 className={classNames("h1", "mb-4")} id={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h2>
            <div className={classNames()}>
              {filteredThemes[category].length > 0 ? (
                filteredThemes[category].map(theme => {
                  return (
                    <Preview
                      colors={{ ...theme.node.colors, ...theme.node.special }}
                      key={theme.node.parent.id}
                      name={theme.node.parent.name}
                    />
                  )
                })
              ) : (
                <div className={classNames("mt-n2", "text-muted")}>
                  No {category} themes found matching{" "}
                  <code>{regex.toString()}</code>.
                </div>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default PreviewList

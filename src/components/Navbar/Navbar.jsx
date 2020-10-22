import {
  Button,
  Container,
  Form,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap"
import { FilterContext } from "../../contexts/FilterContext"
import { LayoutContext } from "../../contexts/LayoutContext"
import { Front, Grid, Search, ViewStacked } from "react-bootstrap-icons"
import { useDebounce } from "use-debounce"
import classNames from "classnames"
import React, { useContext, useEffect, useState } from "react"
import styles from "./Navbar.module.scss"

const Navigation = () => {
  /* Performantly set filter value (text input would lag if filter set 
  immediately due to large amount of elements getting redrawn when filter is 
  set. Typing takes longer on mobile so timeout is longer there */
  let debounceTime = 350
  if (
    typeof window !== "undefined" &&
    /Android|iPhone|iPad/i.test(navigator.userAgent)
  ) {
    debounceTime = 500
  }
  const { setFilter } = useContext(FilterContext)
  const [value, setValue] = useState("")
  const [debounceValue] = useDebounce(value, debounceTime)

  useEffect(() => {
    setFilter(debounceValue)
  })

  // Change layout of preview terminals
  const { grid, setGrid } = useContext(LayoutContext)

  // const grid = true

  return (
    <Navbar
      bg="dark"
      className={classNames("px-0")}
      expand="md"
      sticky="top"
      variant="dark"
    >
      <Container
        className={classNames("px-3")}
        style={{ maxWidth: "var(--breakpoint-md)" }}
      >
        <Navbar.Collapse
          className={classNames("mb-3", "mb-md-0")}
          id="basic-navbar-nav"
        >
          <Navbar.Brand href="#">
            <Front />
          </Navbar.Brand>
          <Nav activeKey="" className={classNames("mr-auto")}>
            <Nav.Link className={classNames("text-light")} href="#dark">
              Dark
            </Nav.Link>
            <Nav.Link className={classNames("text-light")} href="#light">
              Light
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div
          className={classNames(
            "align-items-center",
            "d-flex",
            "flex-nowrap",
            "w-100"
          )}
        >
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={classNames("mr-3", "p-0")}
          />

          <InputGroup
            className={classNames("ml-auto")}
            size="sm"
            style={{ maxWidth: "365px" }}
          >
            <InputGroup.Prepend>
              <InputGroup.Text>
                <Search />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="filter"
              onChange={e => setValue(e.target.value)}
              onInput={e => setValue(e.target.value)}
              type="text"
              placeholder="Filter (supports regex)"
            />
          </InputGroup>
          <Button
            className={classNames("ml-3", "text-white", styles.layoutButton)}
            onClick={() => setGrid(!grid)}
            size="sm"
            variant="secondary"
          >
            {grid ? (
              <>
                <ViewStacked
                  className={classNames("mr-1", styles.buttonIcon)}
                />
                Stack
              </>
            ) : (
              <>
                <Grid className={classNames("mr-1", styles.buttonIcon)} />
                Tile
              </>
            )}
          </Button>
        </div>
      </Container>
    </Navbar>
  )
}

export default Navigation

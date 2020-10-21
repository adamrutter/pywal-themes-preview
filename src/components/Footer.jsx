import classNames from "classnames"
import Grid from "./Grid"
import React from "react"

const year = () => {
  return new Date().getFullYear()
}

const Footer = () => {
  return (
    <footer
      className={classNames("bg-dark", "py-3", "text-center", "text-light")}
    >
      <Grid>
        <div>
          © {year()}{" "}
          <a href="https://adamrutter.com" rel="noreferrer" target="_blank">
            Adam Rutter
          </a>
        </div>
        <div>
          <a
            href="https://github.com/adamrutter/pywal-themes-preview"
            rel="noreferrer"
            target="_blank"
          >
            Source
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/adamrutter/pywal-themes-preview/blob/master/LICENSE"
            rel="noreferrer"
            target="_blank"
          >
            License
          </a>
        </div>
      </Grid>
    </footer>
  )
}

export default Footer

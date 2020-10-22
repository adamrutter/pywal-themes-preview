import { ChatSquareTextFill } from "react-bootstrap-icons"
import { Nav } from "react-bootstrap"
import classNames from "classnames"
import GithubIcon from "../../svg/github.inline.svg"
import React from "react"
import styles from "./Hero.module.scss"

const Hero = () => {
  return (
    <header className={classNames("mb-5", styles.hero)}>
      <h1>
        <code className={classNames("text-white")}>
          {"> "}
          <span className={classNames("text-primary")}>pywal</span> --theme
          <span className={classNames("text-muted")}>
            <span className={classNames(styles.cursor)}>s</span>-preview
          </span>
        </code>
      </h1>
      <div className={classNames("mx-auto", "my-5", "text-center")}>
        <p>
          This isn't affiliated with the Pywal project, just a quick site I put
          together to preview the built-in themes.
        </p>
        <p>
          All of Pywal's built-in themes are included below. They are divided
          into dark and light, and you can filter them with regex, using the
          input in the navbar. Enjoy!
        </p>
      </div>

      <Nav className={classNames("justify-content-center")}>
        <Nav.Link
          className={classNames("text-light", "text-nowrap")}
          href="https://github.com/dylanaraps/pywal"
          rel="noreferrer"
          target="_blank"
        >
          <GithubIcon className={classNames(styles.linkIcon, styles.align)} />
          pywal on Github
        </Nav.Link>
        <Nav.Link
          className={classNames("text-light", "text-nowrap")}
          href="https://github.com/adamrutter/pywal-themes-preview"
          rel="noreferrer"
          target="_blank"
        >
          <GithubIcon className={classNames(styles.linkIcon, styles.align)} />
          This site on Github
        </Nav.Link>
        <Nav.Link
          className={classNames("text-light", "text-nowrap")}
          href="https://adamrutter.com"
          rel="noreferrer"
          target="_blank"
        >
          <ChatSquareTextFill className={classNames(styles.linkIcon)} />
          Contact me
        </Nav.Link>
      </Nav>
    </header>
  )
}

export default Hero

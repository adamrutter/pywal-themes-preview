import classNames from "classnames"
import styles from "./Preview.module.scss"
import PropTypes from "prop-types"
import React from "react"

const Line = props => {
  return (
    <>
      {props.children}
      {"\u000A"}
    </>
  )
}

const Prompt = () => {
  return (
    <Line>
      <span className={classNames("term_fg_color1")}>{`😀 adam   📁 ~`}</span>
    </Line>
  )
}

const TerminalText = props => {
  return (
    <>
      <Prompt />
      <Line>
        {"> "}
        <span className={classNames("term_fg_color2")}>wal</span> --theme{" "}
        {props.name} {props.category === "light" && "-l"}
      </Line>
      <Line>
        [
        <span className={classNames("term_fg_color2", "font-weight-bold")}>
          I
        </span>
        ]{" "}
        <span className={classNames("term_fg_color1", "font-weight-bold")}>
          theme
        </span>
        : Set theme to{" "}
        <span className={classNames("font-weight-bold")}>
          {props.name}.json
        </span>
        .
      </Line>
      <Line>
        [
        <span className={classNames("term_fg_color2", "font-weight-bold")}>
          I
        </span>
        ]{" "}
        <span className={classNames("term_fg_color1", "font-weight-bold")}>
          sequences
        </span>
        : Set terminal colors.
      </Line>
      {"\n"}
      <div className={classNames(styles.color_blocks)}></div>
      {"\n"}
      <Line>
        [
        <span className={classNames("term_fg_color2", "font-weight-bold")}>
          I
        </span>
        ]{" "}
        <span className={classNames("term_fg_color1", "font-weight-bold")}>
          export
        </span>
        : Exported all files.
      </Line>
      <Line>
        [
        <span className={classNames("term_fg_color2", "font-weight-bold")}>
          I
        </span>
        ]{" "}
        <span className={classNames("term_fg_color1", "font-weight-bold")}>
          export
        </span>
        : Exported all user files.
      </Line>
      <Line>
        [
        <span className={classNames("term_fg_color2", "font-weight-bold")}>
          I
        </span>
        ]{" "}
        <span className={classNames("term_fg_color1", "font-weight-bold")}>
          reload
        </span>
        : Reloaded environment.
      </Line>
      {"\n"}
      <Prompt />
      <Line>
        {"> "}
        <span className={classNames("term_fg_color2")}>ls</span>
      </Line>
      <Line>
        <div className={classNames(styles.ls)}>
          <div className={classNames("term_fg_color4", "font-weight-bold")}>
            bin
          </div>
          <div className={classNames("term_fg_color4", "font-weight-bold")}>
            documents
          </div>
          <div className={classNames("term_fg_color4", "font-weight-bold")}>
            downloads
          </div>
          <div className={classNames("term_fg_color6", "font-weight-bold")}>
            games
          </div>
          <div className={classNames("term_fg_color4", "font-weight-bold")}>
            pictures
          </div>
          <div className={classNames("term_fg_color4", "font-weight-bold")}>
            videos
          </div>
        </div>
      </Line>
      <Prompt />
      <Line>
        {"> "}
        <span className={classNames("term_fg_color1", "font-weight-bold")}>
          su
        </span>
        <span className={classNames(styles.cursor)}>d</span>
        <span className={classNames("term_fg_color8")}>o pacman -Syu</span>
      </Line>
    </>
  )
}

TerminalText.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default TerminalText

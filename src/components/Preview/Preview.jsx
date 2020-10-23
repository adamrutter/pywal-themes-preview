import classNames from "classnames"
import LazyLoad from "react-lazyload"
import loadable from "@loadable/component"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Preview.module.scss"

const TerminalText = loadable(() => import("./TerminalText"), {
  fallback: <span className={classNames(styles.cursor)}>{` `}</span>,
})

/* Quick and dirty fix to stop huge amount of elements crashing Chrome on 
Android */
const ConditionalLazyLoad = props => {
  if (
    typeof window !== "undefined" &&
    /Chrome/i.test(navigator.userAgent) &&
    /Android/i.test(navigator.userAgent)
  ) {
    return <LazyLoad height={500}>{props.children}</LazyLoad>
  } else {
    return <>{props.children}</>
  }
}

const Preview = props => {
  return (
    <ConditionalLazyLoad>
      <section className={classNames("mb-3", "mt-3", "pb-3", styles.preview)}>
        {" "}
        <h3 className={classNames("border-bottom", "mb-3", "pb-2")}>
          {props.name}
        </h3>
        <pre
          className={classNames(
            "term_bg_background",
            "term_fg_foreground",
            "shadow-sm",
            styles.terminal
          )}
          style={{
            "--background": props.colors.background,
            "--foreground": props.colors.foreground,
            "--cursor": props.colors.cursor,
            "--color0": props.colors.color0,
            "--color1": props.colors.color1,
            "--color10": props.colors.color10,
            "--color11": props.colors.color11,
            "--color12": props.colors.color12,
            "--color13": props.colors.color13,
            "--color14": props.colors.color14,
            "--color15": props.colors.color15,
            "--color16": props.colors.color16,
            "--color17": props.colors.color17,
            "--color2": props.colors.color2,
            "--color3": props.colors.color3,
            "--color4": props.colors.color4,
            "--color5": props.colors.color5,
            "--color6": props.colors.color6,
            "--color7": props.colors.color7,
            "--color8": props.colors.color8,
            "--color9": props.colors.color9,
          }}
        >
          <code>
            <TerminalText name={props.name} />
          </code>
        </pre>
      </section>
    </ConditionalLazyLoad>
  )
}

Preview.propTypes = {
  name: PropTypes.string.isRequired,
  colors: PropTypes.object.isRequired,
}

export default Preview

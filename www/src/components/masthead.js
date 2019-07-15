/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import ArrowForwardIcon from "react-icons/lib/md/arrow-forward"

import { mediaQueries } from "../utils/presets"
import Button from "./button"

const MastheadContent = () => (
  <div
    className="masthead-content"
    sx={{
      margin: `0 auto`,
      px: 8,
      py: 9,
      textAlign: `center`,
      [mediaQueries.md]: { py: 12 },
    }}
  >
    <h1
      sx={{
        fontSize: `calc(12px + 2vh + 2vw)`,
        letterSpacing: `tight`,
        lineHeight: `solid`,
        maxWidth: `15em`,
        mb: 6,
        mt: 0,
        mx: `auto`,
        WebkitFontSmoothing: `antialiased`,
      }}
    >
      Fast in every way that&nbsp;matters
    </h1>
    <p
      sx={{
        color: `grey.70`,
        fontFamily: `header`,
        fontSize: 4,
        lineHeight: `dense`,
        maxWidth: `45rem`,
        mb: 10,
        mt: 0,
        mx: `auto`,
        WebkitFontSmoothing: `antialiased`,
        [mediaQueries.sm]: { fontSize: 5 },
        [mediaQueries.lg]: { fontSize: 6 },
      }}
    >
      Gatsby is a free and open source framework based on React that helps
      developers build blazing fast <strong>websites</strong> and
      {` `}
      <strong>apps</strong>
    </p>
    <Button
      large
      to="/docs/"
      tracking="MasterHead -> Get Started"
      icon={<ArrowForwardIcon />}
    >
      Get Started
    </Button>
  </div>
)

const Masthead = () => <MastheadContent />

export default Masthead

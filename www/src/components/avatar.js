/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Img from "gatsby-image"

const Avatar = ({ image, alt }) => (
  <Img
    alt={alt ? alt : ``}
    fixed={image}
    sx={{
      borderRadius: 6,
      display: `inline-block`,
      // todo remove
      mr: 3,
      mb: 0,
      verticalAlign: `top`,
      // prevents image twitch in Chrome when hovering the card
      transform: `translateZ(0)`,
    }}
  />
)

export default Avatar

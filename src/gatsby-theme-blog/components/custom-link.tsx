/** @jsx jsx */
import React from 'react';
import { Styled, jsx } from "theme-ui"
import { Link } from "gatsby";

export const HoverLink: React.FC<{to: string}> = ({ to, children}) => {
  return (
    <Link
      sx={{
        color: `heading`,
        textDecoration: `none`,
        transition: `transform 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6)`,
        transitionProperty: 'color',
        "&:hover": {
          color: `primary`,
          textDecoration: `none`,
        },
      }}
      to={to}
    >
      {children}
    </Link>
  )
}
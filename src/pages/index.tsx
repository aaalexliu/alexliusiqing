/** @jsx jsx */
import React, { Fragment } from 'react';
import { jsx } from 'theme-ui';
import Hero from '../components/hero';
import { Parallax } from 'react-spring/renderprops-addons';
import { Link } from 'gatsby';

export default function Home() {
  return (
    <Parallax pages={2}>
      <Hero offset={0} factor={1}>
        <h1>
          Hi, I'm Alex Liu
        </h1>
        <p
          sx={{
            textAlign: 'center'
          }}
        >
          I <Link to='/blog/why-i-quit-trading'>quit my job as a trader</Link>, built an app during COVID, and now I'm looking for a job as a software engineer
        </p>
        <p>
          I read, write, code, lift, and invest.
        </p>
      </Hero>
  </Parallax>
  )
}
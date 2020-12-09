/** @jsx jsx */
import React, { Fragment } from 'react';
import { jsx } from 'theme-ui';
import Hero from '../components/hero';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Link } from 'gatsby';
import Content from '../components/content-parallax';

export default function Home() {
  return (
    <Parallax pages={1.25}>
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
          I read, write, code, lift, invest, and dance.
        </p>
      </Hero>
      <Content
        speed={1}
        offset={0.75}
        factor={0.5}
      >
        <h1>
          More
        </h1>
        <ul sx={{paddingInlineStart: 0}}>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </Content>
  </Parallax>
  )
}
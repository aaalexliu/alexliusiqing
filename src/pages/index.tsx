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
        <h4
          sx={{
            textAlign: 'center',
          }}
        >
          I <Link to='/blog/why-i-quit-trading'>quit my job</Link> as a trader, <Link to='/projects/margins'>built an app</Link> during COVID,
          and now I'm looking for a job as a software engineer. Here's <Link to='/blog/why-code-why-me'>why I might be a fit</Link> for your team.
        </h4>
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
        <p>
          - <Link to='/blog'>Blog</Link>
          <br/>
          - <Link to='/about'>About</Link>
          <br/> <br/>
          <b>Projects</b>
          <br/>
          - <Link to='/projects/margins'>Margins</Link>
        </p>
      </Content>
  </Parallax>
  )
}
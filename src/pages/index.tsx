/** @jsx jsx */
import React, { Fragment } from 'react';
import { jsx, Styled } from 'theme-ui';
import Hero from '../components/hero';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Link } from 'gatsby';
import Content from '../components/content-parallax';

const StyledLink: React.FC<{to: string}>= ({ to, children }) => {
  return (
    <Styled.a
      as={Link}
      to={to}
    >
      {children}
    </Styled.a>
  )
}

export default function Home() {
  return (
    <Parallax pages={1.25}>
      <Hero offset={0} factor={1}>
        <Styled.h1>
          Hi, I'm Alex Liu
        </Styled.h1>
        <Styled.h6
          sx={{
            textAlign: 'center',
            paddingX: '20px',
            maxWidth: '800px'
          }}
        >
          I <StyledLink to='/blog/why-i-quit-trading'>quit my job</StyledLink> as a trader, <StyledLink to='/portfolio/margins/overview'>built an app</StyledLink> during COVID,
          and now I'm looking for a job as a software engineer. Here's <StyledLink to='/blog/why-code-why-me'>why I might be a fit</StyledLink> for your team.
        </Styled.h6>
        <Styled.p>
          I read, write, code, lift, invest, and dance.
        </Styled.p>
      </Hero>
      <Content
        speed={1}
        offset={0.8}
        factor={0.5}
      >
        <Styled.h3>
          Links
        </Styled.h3>
        <Styled.p>
          - <StyledLink to='/about'>About</StyledLink>
          <br/>
          - <StyledLink to='/blog'>Blog</StyledLink>
          <br/>
          - <StyledLink to='/portfolio'>Portfolio</StyledLink>
          <br/>
          - <StyledLink to='https://github.com/alexliusq'>Github</StyledLink>
          <br/>
          - <StyledLink to='https://www.linkedin.com/in/alex-siqing-liu/'>LinkedIn</StyledLink>
        </Styled.p>
      </Content>
  </Parallax>
  )
}
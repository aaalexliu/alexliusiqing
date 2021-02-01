/** @jsx jsx */
import React, { Fragment } from 'react';
import { jsx, Styled } from 'theme-ui';
import Hero from '../components/hero';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Link } from 'gatsby';
import Header from '../gatsby-theme-blog/components/header';
import SEO from '../components/seo';

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

export default function About() {
  return (
    
    <Fragment>
    <SEO title='about' />
    <Header/>
    <Parallax pages={1.5}>
      <Hero offset={0} factor={0.7}>
        <Styled.h1>
          Hi, I'm Alex Liu
        </Styled.h1>
        {/* <Styled.h6
          sx={{
            textAlign: 'center',
            paddingX: '20px',
            maxWidth: '800px'
          }}
        >
          I <StyledLink to='/blog/why-i-quit-trading'>quit my job</StyledLink> as a trader, <StyledLink to='/portfolio/margins/overview'>built an app</StyledLink> during COVID,
          and now I'm looking for a job as a software engineer. Here's <StyledLink to='/blog/why-code-why-me'>why I might be a fit</StyledLink> for your team.
        </Styled.h6> */}
        <Styled.p>
          I read, write, code, lift, invest, and dance.
        </Styled.p>
      </Hero>
      <ParallaxLayer
        speed={1}
        offset={0.75}
        factor={1}
      >
        <div
          sx={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <div
            sx={{
              // marginX: '40px',
              // paddingTop: '40px',
              maxWidth: '800px',
              paddingX: [3, 4, 4, 5]
            }}
          >
        <Styled.h2 sx={{textAlign: 'center'}}>A Brief History</Styled.h2>
        <Styled.p>
        My parents each brought 2 suitcases, and 2 years later, me, from China to Silicon Valley,
        where I had my childhood in an Asian Tech Immigrant's version of surburbia. English became my native tongue
        and the local public library became my second home.
        </Styled.p>
        <Styled.p>
        In 2007, when I was old enough to protest but young enough that my opinion didn't matter, my family moved to Shanghai,
        a city at the forefront of a country convulsing through 300 years of economic transformation in 30.
        Looking back, moving to China was one of the best changes my family made. 
        I attended the international division of a local high school,
        which combined an expansive Western curriculum with Chinese discipline
        and cash incentives for high standardized test scores which were given to both students and teachers.
        </Styled.p>
        <Styled.p>
        For college, I traded smelling smog to smelling cows in pastoral New England, where I both enjoyed the luxury of a liberal arts
        education and chafed at some of its anachronisms. After being a hardo by taking an extra course every semester even though Amherst
        doesn't allow students to graduate early, I decided to relax senior year, and ended up getting more out of my classes and college life.
        It's a special place with an especially dedicated alumni fundraising effort.
        </Styled.p>
        {/* <Styled.p>
        The benefit and brutality of an increasingly globalized world have been the most definitive forces shaping my life. I am enormously lucky to have grown up as an 
        unwitting beneficiary of globalization. Now though, I have the full responsibility to make the most of my situation. As one of my favorite writers,
        Mohsin Hamid, notes: 
        <Styled.blockquote>
        “But if globalization is capable of holding out any fundamental promise to us, any temptation to go along with its havoc, then surely that promise ought to be this: we will be more free to invent ourselves.”
        </Styled.blockquote>
        If anything, quitting my job before a global pandemic is an act of self-invention. 
        </Styled.p> */}
        </div>
     </div>
      </ParallaxLayer>
  </Parallax>
  </Fragment>


    
  )
}
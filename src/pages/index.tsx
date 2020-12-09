import React, { Fragment } from 'react';
import Hero from '../components/hero';
import { Parallax } from 'react-spring/renderprops-addons';

export default function Home() {
  return (
    <Parallax pages={2}>
      <Hero offset={0} factor={1}>
     <h1>
       Hi, I'm Alex Liu
     </h1>
     <p>
     I'm creating noice web experiences for the next generation of consumer-facing companies
     </p>
   </Hero>
  </Parallax>
  )
}
/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "./divider-parallax"
// import Inner from "../elements/inner"
import Content from "./content-parallax"
import SVG from "./svg"
import { ParallaxLayer } from "react-spring/renderprops-addons"
// import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
// import Intro from "../sections/intro"

interface HeroProps {
  offset: number,
  factor?: number
}

const Hero: React.FC<HeroProps> = ({ offset, factor = 1, children }) => (
  <div>
    {/* <Divider speed={2} offset={offset} factor={factor}> */}
    <ParallaxLayer
      offset={offset}
      speed={4}
      factor={factor}
    >
      <div
        sx={{
          position: 'absolute',
          left: '10%',
          top: '68%',
          opacity: '50%',
          fontSize: '1.5em'
        }}
      >
        📈🤑📉😭
      </div>
      <div
        sx={{
          position: 'absolute',
          left: '80%',
          top: '70%',
          opacity: '50%',
          fontSize: '2em'
        }}
      >
        🎵🕺
      </div>
    </ParallaxLayer>
    <ParallaxLayer
      offset={offset}
      speed={3}
      factor={factor}
    >
      <div sx={{
        position: 'absolute',
        left: '45%',
        top: '12%',
        opacity: '50%',
        fontSize: '3em'
      }}>
        ✍
      </div>
      <div
        sx={{
          position: 'absolute',
          left: '45%',
          top: '73%',
          opacity: '50%',
          fontSize: '3em'
        }}
      >
        🏋️
      </div>
    </ParallaxLayer>
    <ParallaxLayer
      offset={offset}
      speed={2}
      factor={factor}
    >
      <div sx={{
          position: 'absolute',
          left: '75%',
          top: '14%',
          opacity: '50%',
          fontSize: '5em'
      }}>
          👨‍💻
      </div>
      <div
        sx={{
          position: 'absolute',
          left: '12%',
          top: '14%',
          opacity: '50%',
          fontSize: '4em'
        }}
      >
      📚
      </div>
    </ParallaxLayer>
      
    {/* </Divider> */}
    <Content sx={{ variant: `texts.bigger` }} speed={1} offset={offset} factor={factor}>
      {children}
    </Content>
  </div>
)

export default Hero

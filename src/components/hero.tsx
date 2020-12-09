/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "./divider-parallax"
// import Inner from "../elements/inner"
import Content from "./content-parallax"
import SVG from "./svg"
// import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
// import Intro from "../sections/intro"

interface HeroProps {
  offset: number,
  factor?: number
}

const Hero: React.FC<HeroProps> = ({ offset, factor = 1, children }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <div sx={{
        position: 'absolute',
        left: '45%',
        top: '17%',
        opacity: '50%',
        fontSize: '3em'
      }}>
        ✍
      </div>
      <div sx={{
        position: 'absolute',
        left: '75%',
        top: '18%',
        opacity: '50%',
        fontSize: '5em'
      }}>
        👨‍💻
      </div>
      <div
        sx={{
          position: 'absolute',
          left: '15%',
          top: '20%',
          opacity: '50%',
          fontSize: '4em'
        }}
      >
        📚
      </div>
      <div
        sx={{
          position: 'absolute',
          left: '10%',
          top: '70%',
          opacity: '50%',
          fontSize: '3em'
        }}
      >
        🏋️
      </div>
      <div
        sx={{
          position: 'absolute',
          left: '40%',
          top: '75%',
          opacity: '50%',
          fontSize: '2em'
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
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.6} offset={offset} factor={factor}>
      {children}
    </Content>
  </div>
)

export default Hero

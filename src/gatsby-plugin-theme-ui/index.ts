import { merge } from "theme-ui"
import { tailwind } from "@theme-ui/presets"
import vsDark from '@theme-ui/prism/presets/vs-dark.json';
import { blue } from '@ant-design/colors';


const theme = merge(tailwind, {
  fontSizes: [
    '0.875rem', // '0.875rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '1.875rem',
    '2.25rem',
    '3rem', 
    '4rem',
    '4.5rem',
  ],
  // below copied from cara
  initialColorModeName: `light`,
  useCustomProperties: true,
  colors: {
    // text: tailwind.colors.gray[8],
    // heading: tailwind.colors.black,
    // primary: blue[5],
    // background: tailwind.colors.gray[1],
    // divider: tailwind.colors.gray[2],
    // textMuted: tailwind.colors.gray[6],
    // icon_brightest: tailwind.colors.gray[2],
    // icon_darker: tailwind.colors.gray[4],
    // icon_darkest: tailwind.colors.gray[6],
    secondary: tailwind.colors.indigo[4],
    icon_red: tailwind.colors.red[6],
    icon_blue: tailwind.colors.blue[6],
    icon_orange: tailwind.colors.orange[5],
    icon_yellow: tailwind.colors.yellow[5],
    icon_pink: tailwind.colors.pink[5],
    icon_purple: tailwind.colors.purple[6],
    icon_green: tailwind.colors.green[5],
    modes: {
      light: {
        text: tailwind.colors.gray[9],
        heading: tailwind.colors.black,
        primary: blue[5],
        background: tailwind.colors.gray[1],
        divider: tailwind.colors.gray[2],
        textMuted: tailwind.colors.gray[6],
        icon_brightest: tailwind.colors.gray[2],
        icon_darker: tailwind.colors.gray[4],
        icon_darkest: tailwind.colors.gray[8],
      },
      dark: {
        text: tailwind.colors.gray[3],
        heading: tailwind.colors.white,
        primary: tailwind.colors.orange[4],
        background: `#141821`,
        divider: tailwind.colors.gray[8],
        textMuted: tailwind.colors.gray[5],
        icon_brightest: tailwind.colors.white,
        icon_darker: tailwind.colors.gray[7],
        icon_darkest: tailwind.colors.gray[8],
      }
    },
  },
  breakpoints: ['640px', '768px', '1024px', '1280px'],
  // footer: {
  //   textAlign: `center`,
  //   display: `block`,
  //   position: `absolute`,
  //   bottom: 0,
  //   color: `textMuted`,
  //   px: [2, 3],
  //   py: [3, 4],
  // },
  styles: {
    // header: {
    //   a: {
    //     color: `heading`,
    //     textDecoration: `none`,
    //     transition: `transform 1s cubic-bezier(0.68, -0.6, 0.32, 1.6)`,
    //     transitionProperty: 'color',
    //     "&:hover": {
    //       color: `primary`,
    //       textDecoration: `none`,
    //     },
    //   },
    // },
    inlineCode: {
      ...vsDark,
      display: 'inline-block',
      fontFamily: 'monospace',
      fontSize: 0,
      borderRadius: `0.2rem`,
      paddingTop: `0`,
      paddingBottom: `0`,
      paddingX: `0.2rem`,
    },
    code: {
      ...vsDark,
      fontFamily: 'monospace',
      fontSize: 0
    },
    root: {
      margin: 0,
      padding: 0,
      boxSizing: `border-box`,
      textRendering: `optimizeLegibility`,
      WebkitFontSmoothing: `antialiased`,
      MozOsxFontSmoothing: `grayscale`,
      color: `text`,
      backgroundColor: `background`,
    },
    a: {
      color: `primary`,
      textDecoration: `none`,
      "&:hover": {
        // color: `primary`,
        textDecoration: `none`,
        // transform: 'perspective(1px) translateZ(0)'
      },
    },
    p: {
      fontSize: [1],
      letterSpacing: `-0.003em`,
      lineHeight: `normal`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
      color: `text`,
      a: {
        color: `primary`,
        textDecoration: `none`,
      },
      code: {
        fontSize: [1]
      }
    },
    blockquote: {
      marginLeft: 0,
      borderLeft: '3px solid',
      borderLeftColor: 'heading',
      paddingLeft: 10,
      p: {
        fontSize: [1],
        fontWeight: `medium`,
        color: `heading`,
      },
    },
    h1: {
      fontSize: [5, 6],
      mt: 2,
      mb: 3,
      textShadow: `rgba(255, 255, 255, 0.15) 0px 5px 35px`,
      letterSpacing: `wide`,
      color: `heading`,
    },
    h2: {
      fontSize: [4, 5],
      mt: 2,
      mb: 2,
      color: `heading`,
    },
    h3: {
      fontSize: [3, 4],
      mt: 3,
      color: `heading`,
    },
    h4: {
      fontSize: [2, 3],
      color: `heading`,
    },
    h5: {
      fontSize: [1, 2],
      color: `heading`,
    },
    h6: {
      fontSize: 1,
      mb: 2,
      color: `heading`,
    },
  },
  sizes: {
    container: 800
  },
  buttons: {
    toggle: {
      color: `background`,
      border: `none`,
      backgroundColor: `text`,
      cursor: `pointer`,
      alignSelf: `center`,
      px: 3,
      py: 2,
      ml: 3,
    },
  },
  // texts: {
  //   bigger: {
  //     p: {
  //       fontSize: [2, 3, 4],
  //     },
  //   },
  // },
})

export default theme

// TAILWIND
// Based on https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
// and https://tailwindcss.com/components

// export const borderWidths = {
//   px: '1px',
//   '0': '0',
//   '2': '2px',
//   '4': '4px',
//   '8': '8px',
// }

// export const breakpoints = ['640px', '768px', '1024px', '1280px']

// export const baseColors = {
//   transparent: 'transparent',
//   black: '#000',
//   white: '#fff',
//   gray: [
//     null,
//     '#f7fafc',
//     '#edf2f7',
//     '#e2e8f0',
//     '#cbd5e0',
//     '#a0aec0',
//     '#718096',
//     '#4a5568',
//     '#2d3748',
//     '#1a202c',
//   ],
//   red: [
//     null,
//     '#fff5f5',
//     '#fed7d7',
//     '#feb2b2',
//     '#fc8181',
//     '#f56565',
//     '#e53e3e',
//     '#c53030',
//     '#9b2c2c',
//     '#742a2a',
//   ],
//   orange: [
//     null,
//     '#fffaf0',
//     '#feebc8',
//     '#fbd38d',
//     '#f6ad55',
//     '#ed8936',
//     '#dd6b20',
//     '#c05621',
//     '#9c4221',
//     '#7b341e',
//   ],
//   yellow: [
//     null,
//     '#fffff0',
//     '#fefcbf',
//     '#faf089',
//     '#f6e05e',
//     '#ecc94b',
//     '#d69e2e',
//     '#b7791f',
//     '#975a16',
//     '#744210',
//   ],
//   green: [
//     null,
//     '#f0fff4',
//     '#c6f6d5',
//     '#9ae6b4',
//     '#68d391',
//     '#48bb78',
//     '#38a169',
//     '#2f855a',
//     '#276749',
//     '#22543d',
//   ],
//   teal: [
//     null,
//     '#e6fffa',
//     '#b2f5ea',
//     '#81e6d9',
//     '#4fd1c5',
//     '#38b2ac',
//     '#319795',
//     '#2c7a7b',
//     '#285e61',
//     '#234e52',
//   ],
//   blue: [
//     null,
//     '#ebf8ff',
//     '#bee3f8',
//     '#90cdf4',
//     '#63b3ed',
//     '#4299e1',
//     '#3182ce',
//     '#2b6cb0',
//     '#2c5282',
//     '#2a4365',
//   ],
//   indigo: [
//     null,
//     '#ebf4ff',
//     '#c3dafe',
//     '#a3bffa',
//     '#7f9cf5',
//     '#667eea',
//     '#5a67d8',
//     '#4c51bf',
//     '#434190',
//     '#3c366b',
//   ],
//   purple: [
//     null,
//     '#faf5ff',
//     '#e9d8fd',
//     '#d6bcfa',
//     '#b794f4',
//     '#9f7aea',
//     '#805ad5',
//     '#6b46c1',
//     '#553c9a',
//     '#44337a',
//   ],
//   pink: [
//     null,
//     '#fff5f7',
//     '#fed7e2',
//     '#fbb6ce',
//     '#f687b3',
//     '#ed64a6',
//     '#d53f8c',
//     '#b83280',
//     '#97266d',
//     '#702459',
//   ],
// }

// const commonButtonStyles = {
//   py: 2,
//   px: 3,
//   cursor: `pointer`,
//   fontSize: `100%`,
//   lineHeight: `inherit`,
// }

// export const buttons = {
//   simple: {
//     ...commonButtonStyles,
//     backgroundColor: `primary`,
//     border: `none`,
//     color: `white`,
//     fontWeight: `bold`,
//     borderRadius: `default`,
//     '&:hover': {
//       backgroundColor: `primaryHover`,
//     },
//   },
//   pill: {
//     ...commonButtonStyles,
//     backgroundColor: `primary`,
//     border: `none`,
//     color: `white`,
//     fontWeight: `bold`,
//     borderRadius: `full`,
//     '&:hover': {
//       backgroundColor: `primaryHover`,
//     },
//   },
//   outline: {
//     ...commonButtonStyles,
//     backgroundColor: `transparent`,
//     borderWidth: `1px`,
//     borderStyle: `solid`,
//     borderColor: `primary`,
//     color: `primary`,
//     fontWeight: `semibold`,
//     borderRadius: `default`,
//     '&:hover': {
//       backgroundColor: `primary`,
//       color: `white`,
//       borderColor: `transparent`,
//     },
//   },
//   bordered: {
//     ...commonButtonStyles,
//     backgroundColor: `primary`,
//     borderWidth: `1px`,
//     borderStyle: `solid`,
//     borderColor: `primaryHover`,
//     color: `white`,
//     fontWeight: `bold`,
//     borderRadius: `default`,
//     '&:hover': {
//       backgroundColor: `primaryHover`,
//     },
//   },
//   disabled: {
//     ...commonButtonStyles,
//     backgroundColor: `primary`,
//     border: `none`,
//     opacity: 0.5,
//     cursor: `not-allowed`,
//     color: `white`,
//     fontWeight: `bold`,
//     borderRadius: `default`,
//   },
//   '3D': {
//     ...commonButtonStyles,
//     backgroundColor: `primary`,
//     border: `none`,
//     borderBottomWidth: `4px`,
//     borderBottomStyle: `solid`,
//     borderBottomColor: `primaryHover`,
//     color: `white`,
//     fontWeight: `bold`,
//     borderRadius: `default`,
//     transition: `transform 0.3s ease-in-out`,
//     '&:hover': {
//       transform: `translateY(-1px)`,
//     },
//   },
//   elevated: {
//     ...commonButtonStyles,
//     backgroundColor: `white`,
//     borderWidth: `1px`,
//     borderStyle: `solid`,
//     borderColor: `gray.4`,
//     color: `text`,
//     fontWeight: `bold`,
//     borderRadius: `default`,
//     boxShadow: `default`,
//     '&:hover': {
//       backgroundColor: `gray.1`,
//     },
//   },
// }

// export const colors = {
//   ...baseColors,
//   grayDark: baseColors.gray[8],
//   text: baseColors.gray[8],
//   background: baseColors.white,
//   primary: baseColors.blue[7],
//   primaryHover: baseColors.blue[8],
//   secondary: baseColors.gray[6],
//   muted: baseColors.gray[3],
//   success: baseColors.green[3],
//   info: baseColors.blue[4],
//   warning: baseColors.yellow[3],
//   danger: baseColors.red[3],
//   light: baseColors.gray[1],
//   dark: baseColors.gray[8],
//   textMuted: baseColors.gray[6],
// }

// export const baseFonts = {
//   sans:
//     '-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
//   serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
//   mono: 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
// }

// export const fonts = {
//   ...baseFonts,
//   body: baseFonts.sans,
//   heading: 'inherit',
//   monospace: baseFonts.mono,
// }

// export const fontSizes = [
//   '0.875rem',
//   '1rem',
//   '1.25rem',
//   '1.5rem',
//   '1.875rem',
//   '2.25rem',
//   '3rem',
//   '4rem',
//   '4.5rem',
// ]

// export const baseFontWeights = {
//   hairline: '100',
//   thin: '200',
//   light: '300',
//   normal: '400',
//   medium: '500',
//   semibold: '600',
//   bold: '700',
//   extrabold: '800',
//   black: '900',
// }

// export const fontWeights = {
//   ...baseFontWeights,
//   body: baseFontWeights.normal,
//   heading: baseFontWeights.bold,
// }

// const commonInputStyles = {
//   py: 2,
//   px: 3,
//   fontSize: `100%`,
//   borderRadius: `default`,
//   appearance: `none`,
//   lineHeight: `tight`,
// }

// export const inputs = {
//   shadow: {
//     ...commonInputStyles,
//     border: `none`,
//     color: `gray.7`,
//     boxShadow: `default`,
//     '&:focus': {
//       outline: `none`,
//       boxShadow: `outline`,
//     },
//   },
//   inline: {
//     ...commonInputStyles,
//     backgroundColor: `gray.2`,
//     borderWidth: `2px`,
//     borderStyle: `solid`,
//     borderColor: `gray.2`,
//     color: `gray.7`,
//     '&:focus': {
//       outline: `none`,
//       borderColor: `primary`,
//       backgroundColor: `white`,
//     },
//   },
//   underline: {
//     ...commonInputStyles,
//     backgroundColor: `transparent`,
//     border: `none`,
//     borderBottomWidth: `2px`,
//     borderBottomStyle: `solid`,
//     borderBottomColor: `primary`,
//     borderRadius: `0px`,
//     color: `gray.7`,
//     '&:focus': {
//       outline: `none`,
//       borderColor: `primary`,
//       backgroundColor: `white`,
//     },
//   },
// }

// export const letterSpacings = {
//   tighter: '-0.05em',
//   tight: '-0.025em',
//   normal: '0',
//   wide: '0.025em',
//   wider: '0.05em',
//   widest: '0.1em',
// }

// export const baseLineHeights = {
//   none: '1',
//   tight: '1.25',
//   snug: '1.375',
//   normal: '1.5',
//   relaxed: '1.625',
//   loose: '2',
// }

// export const lineHeights = {
//   ...baseLineHeights,
//   body: baseLineHeights.relaxed,
//   heading: baseLineHeights.tight,
// }

// export const radii = {
//   none: '0',
//   sm: '0.125rem',
//   default: '0.25rem',
//   lg: '0.5rem',
//   full: '9999px',
// }

// export const sizes = {
//   px: '1px',
//   '0': '0',
//   '1': '0.25rem',
//   '2': '0.5rem',
//   '3': '0.75rem',
//   '4': '1rem',
//   '5': '1.25rem',
//   '6': '1.5rem',
//   '8': '2rem',
//   '10': '2.5rem',
//   '12': '3rem',
//   '16': '4rem',
//   '20': '5rem',
//   '24': '6rem',
//   '32': '8rem',
//   '40': '10rem',
//   '48': '12rem',
//   '56': '14rem',
//   '64': '16rem',
//   xs: '20rem',
//   sm: '24rem',
//   md: '28rem',
//   lg: '32rem',
//   xl: '36rem',
//   '2xl': '42rem',
//   '3xl': '48rem',
//   '4xl': '56rem',
//   '5xl': '64rem',
//   '6xl': '72rem',
//   '1/2': '50%',
//   '1/3': '33.333333%',
//   '2/3': '66.666667%',
//   '1/4': '25%',
//   '2/4': '50%',
//   '3/4': '75%',
//   '1/5': '20%',
//   '2/5': '40%',
//   '3/5': '60%',
//   '4/5': '80%',
//   '1/6': '16.666667%',
//   '2/6': '33.333333%',
//   '3/6': '50%',
//   '4/6': '66.666667%',
//   '5/6': '83.333333%',
//   '1/12': '8.333333%',
//   '2/12': '16.666667%',
//   '3/12': '25%',
//   '4/12': '33.333333%',
//   '5/12': '41.666667%',
//   '6/12': '50%',
//   '7/12': '58.333333%',
//   '8/12': '66.666667%',
//   '9/12': '75%',
//   '10/12': '83.333333%',
//   '11/12': '91.666667%',
//   full: '100%',
//   screenHeight: '100vh',
//   screenWidth: '100vw',
// }

// export const shadows = {
//   default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
//   md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
//   lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
//   xl:
//     '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
//   '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
//   inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
//   outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
//   none: 'none',
// }

// export const space = [
//   0,
//   '0.25rem',
//   '0.5rem',
//   '1rem',
//   '2rem',
//   '4rem',
//   '8rem',
//   '16rem',
//   '32rem',
// ]

// export const zIndices = {
//   auto: 'auto',
//   '0': '0',
//   '10': '10',
//   '20': '20',
//   '30': '30',
//   '40': '40',
//   '50': '50',
// }

// const heading = {
//   fontFamily: 'heading',
//   fontWeight: 'heading',
//   lineHeight: 'heading',
//   m: 0,
//   mb: 1,
// }

// export const styles = {
//   root: {
//     fontFamily: 'body',
//     lineHeight: 'body',
//     fontWeight: 'body',
//   },
//   a: {
//     color: 'primary',
//     textDecoration: 'none',
//     ':hover': {
//       textDecoration: 'underline',
//     },
//   },
//   h1: {
//     ...heading,
//     fontSize: 6,
//     mt: 2,
//   },
//   h2: {
//     ...heading,
//     fontSize: 5,
//     mt: 2,
//   },
//   h3: {
//     ...heading,
//     fontSize: 4,
//     mt: 3,
//   },
//   h4: {
//     ...heading,
//     fontSize: 3,
//   },
//   h5: {
//     ...heading,
//     fontSize: 2,
//   },
//   h6: {
//     ...heading,
//     fontSize: 1,
//     mb: 2,
//   },
//   code: {},
//   pre: {},
//   hr: {
//     bg: 'muted',
//     border: 0,
//     height: '1px',
//     m: 3,
//   },
// }

// export const tailwind = {
//   borderWidths,
//   breakpoints,
//   colors,
//   fonts,
//   fontSizes,
//   fontWeights,
//   letterSpacings,
//   lineHeights,
//   sizes,
//   shadows,
//   space,
//   radii,
//   zIndices,
//   styles,
//   buttons,
//   inputs,
// }

// export default tailwind

// GATSBY THEME UI PRESET
// const purple60 = `#663399`
// const purple30 = `#D9BAE8`
// const grey90 = `#232129`
// const black80 = `#1B1F23`
// const white = `#fff`
// const lightWhite = `rgba(255, 255, 255, 0.86)`
// const opaqueLightYellow = `rgba(255, 229, 100, 0.2)`
// const opaqueLightWhite = `hsla(0, 0%, 100%, 0.2)`
// const lightGray = `hsla(0, 0%, 0%, 0.2)`

// const colors = {
//   text: grey90,
//   background: white,
//   primary: purple60,
//   secondary: black80,
//   muted: lightGray,
//   highlight: opaqueLightYellow,
//   heading: grey90,
//   prism: {
//     background: `#011627`,
//     comment: `#809393`,
//     string: `#addb67`,
//     var: `#d6deeb`,
//     number: `#f78c6c`,
//     constant: `#82aaff`,
//     punctuation: `#c792ea`,
//     className: `#ffc98b`,
//     tag: `#ffa7c4`,
//     boolean: `#ff5874`,
//     property: `#80cbc4`,
//     namespace: `#b2ccd6`,
//     highlight: `hsla(207, 95%, 15%, 1)`,
//   },
//   modes: {
//     dark: {
//       text: lightWhite,
//       background: grey90,
//       primary: purple30,
//       secondary: lightWhite,
//       muted: opaqueLightWhite,
//       highlight: purple60,
//       heading: white,
//     },
//   },
// }

// const prism = {
//   ".attr-name": {
//     fontStyle: `italic`,
//   },
//   ".comment": {
//     color: `prism.comment`,
//   },
//   ".attr-name, .string, .url": {
//     color: `prism.string`,
//   },
//   ".variable": {
//     color: `prism.var`,
//   },
//   ".number": {
//     color: `prism.number`,
//   },
//   ".builtin, .char, .constant, .function": {
//     color: `prism.constant`,
//   },
//   ".punctuation, .selector, .doctype": {
//     color: `prism.punctuation`,
//   },
//   ".class-name": {
//     color: `prism.className`,
//   },
//   ".tag, .operator, .keyword": {
//     color: `prism.tag`,
//   },
//   ".boolean": {
//     color: `prism.boolean`,
//   },
//   ".property": {
//     color: `prism.property`,
//   },
//   ".namespace": {
//     color: `prism.namespace`,
//   },
// }

// const styles = {
//   root: {
//     fontFamily: `body`,
//   },
//   pre: {
//     variant: `prism`,
//     fontFamily: `monospace`,
//     tabSize: 4,
//     hyphens: `none`,
//     marginBottom: 2,
//     color: `white`,
//     bg: `prism.background`,
//     overflow: `auto`,
//     borderRadius: 10,
//     p: 3,
//     ".highlight": {
//       background: `hsla(0, 0%, 40%, .5)`,
//     },
//   },
//   code: {
//     fontFamily: `monospace`,
//     // from typography overrideThemeStyles
//     // "h1 code, h2 code, h3 code, h4 code, h5 code, h6 code"
//     fontSize: `inherit`,
//   },
//   inlineCode: {
//     borderRadius: `0.3em`,
//     color: `secondary`,
//     bg: `highlight`,
//     paddingTop: `0.15em`,
//     paddingBottom: `0.05em`,
//     paddingX: `0.2em`,
//   },
//   // from typography overrideThemeStyles
//   a: {
//     color: `primary`,
//   },
//   hr: {
//     borderColor: `muted`,
//   },
//   p: {
//     code: {
//       fontSize: `inherit`,
//     },
//   },
//   li: {
//     code: {
//       fontSize: `inherit`,
//     },
//   },
//   blockquote: {
//     color: `inherit`,
//     borderLeftColor: `inherit`,
//     opacity: 0.8,
//     "&.translation": {
//       fontSize: `1em`,
//     },
//   },
// }

// const preset = {
//   initialColorModeName: `light`,
//   colors,
//   fonts: {
//     body: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif`,
//     heading: `inherit`,
//     monospace: `Menlo, monospace`,
//   },
//   sizes: {
//     container: 672,
//   },
//   styles,
//   prism,
// }

// module.exports = preset

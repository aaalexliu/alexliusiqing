import { tailwind, polaris } from '@theme-ui/presets';


export default {
  ...polaris,
  colors: {
    ...polaris.colors,
    // text: `#66E0FF`
  }
}

/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a blue theme
 */

const darkBlue = `#007acc`
const lightBlue = `#66E0FF`
const blueGray = `#282c35`

// export default {
//     colors: {
//         text: blueGray,
//         primary: darkBlue,
//         heading: blueGray,
//     },
// }

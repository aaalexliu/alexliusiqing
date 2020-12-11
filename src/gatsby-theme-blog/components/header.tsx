/** @jsx jsx */
import { Link } from "gatsby"
import { jsx, css, Styled, useColorMode } from 'theme-ui';
import { Sun } from 'react-feather';

const Header: React.FC = ({ children, ...props }) => {

  const [colorMode, setColorMode] = useColorMode();

  const toggleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  }

  return (
    <header>
      <div
        css={css({
          maxWidth: `container`,
          mx: `auto`,
          px: 3,
          pt: 4,
          backgroundColor: 'transparent',
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'nowrap'
        })}
        >
      <div
          css={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {/* <Logo css={{
              height: '3em',
              width: '3em',
              margin: '0 5px'
            }}
          /> */}
          <h1 css={{ margin: 0 }}>
          <Styled.a
            as={Link}
            to={'/'}
          >
            Alex Liu
          </Styled.a>
          </h1>
        </div>
        <div
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            flexGrow: 1,
            '& > div': {
              margin: '10px'
            }
          }}
        >
          <div>
            <Styled.a
              as={Link}
              to={'/blog'}
            >
              Blog
            </Styled.a>
          </div>
          <div>
          <Styled.a
              as={Link}
              to={'/about'}
            >
              About
            </Styled.a>
          </div>
          <div>
            <button
              sx={{
                outline: 'none',
                p: '9px',
                border: 'none',
                borderRadius: '100%',
                bg: colorMode === 'light' ? 'icon_darkest' : 'icon_brightest',
                color: 'primary',
                lineHeight: 1,
                cursor: 'pointer',
                fontSize: '0px'
              }}
              onClick={() => toggleColorMode()}
            >
              <Sun size={15} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
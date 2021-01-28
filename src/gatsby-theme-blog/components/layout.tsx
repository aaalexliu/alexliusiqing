import React from "react";
import { css, Styled } from "theme-ui";
import Header from "./header";
import useBlogThemeConfig from "gatsby-theme-blog/src/hooks/configOptions";
import Helmet from "react-helmet";

// import { SkipNavContent } from "@reach/skip-nav"

const Layout: React.FC = ({ children, ...props }) => {
  const blogThemeConfig = useBlogThemeConfig();
  const { webfontURL } = blogThemeConfig;

  return (
    <Styled.root>
      <Helmet>
        <link rel="stylesheet" href={webfontURL} />
      </Helmet>
      <Header {...props} />
       {/* <SkipNavContent /> */}
      <div>
        <div
          css={css({
            maxWidth: `container`,
            mx: `auto`,
            px: '25px',
            py: '10px',
          })}
        >
          {children}
        </div>
      </div>
    </Styled.root>
  );
}

export default Layout

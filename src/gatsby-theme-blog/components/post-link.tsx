/** @jsx jsx */
import React from 'react';
import { Styled, jsx } from "theme-ui"
import { Link } from "gatsby";

interface PostLinkProps {
  title?: string,
  slug: string,
  date?: string,
  excerpt?: string
}

const PostLink: React.FC<PostLinkProps>= ({ title, slug, date, excerpt }) => (
  <article>
    <header>
      <Styled.h2
        sx={{
          mb: 1,
        }}
      >
        <Link
          sx={{
            color: `heading`,
            textDecoration: `none`,
            transition: `transform 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6)`,
            transitionProperty: 'color',
            "&:hover": {
              color: `primary`,
              textDecoration: `none`,
            },
          }}
          to={slug}
        >
          {title || slug}
        </Link>
      </Styled.h2>
      <small>{date}</small>
    </header>
    <section>
      <Styled.p>{excerpt}</Styled.p>
    </section>
  </article>
)

export default PostLink

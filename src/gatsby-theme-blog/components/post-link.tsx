/** @jsx jsx */
import React from 'react';
import { Styled, jsx } from "theme-ui"
import { HoverLink } from "./custom-link";

interface PostLinkProps {
  title?: string,
  slug: string,
  date?: string,
  excerpt?: string
}

const PostLink: React.FC<PostLinkProps>= ({ title, slug, date, excerpt }) => (
  <article>
    <header>
      <Styled.h3
        sx={{
          mb: 1,
        }}
      >
        <HoverLink
          to={slug}
        >
          {title || slug}
        </HoverLink>
      </Styled.h3>
      <small>{date}</small>
    </header>
    {/* <section>
      <Styled.p>{excerpt}</Styled.p>
    </section> */}
  </article>
)

export default PostLink

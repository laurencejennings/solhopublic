import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
const StyledLink = styled(Link)`
  display: block;
  font-size: 1.2rem;
`

const RelatedTitle = styled.p`
    margin: 0.2rem 0;
`

const RelatedPosts = ({ posts }) => {
  return posts ? (

    <div>
    <RelatedTitle>Some related posts:</RelatedTitle>
      {posts
        ? posts.slice(0,3).map(post => {
            return (
              <StyledLink key={post.uid} to={"post/" + post.uid}>
                {post.data.title.text}
              </StyledLink>
            )
          })
        : null}
    </div>
  ) : null
}

export default RelatedPosts

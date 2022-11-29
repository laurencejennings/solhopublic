import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import PostPreview from "src/components/posts/post-preview"
import Masonry from "react-masonry-css"
import "src/components/core/layout/masonry.css"
import colors from "src/components/core/theme/colors"

const PostsWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.lightOrange};
  @media (min-width: 1200px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const PostsIndex = ({ posts, fullwidth }) => {
  const breakpointColumnsObj = fullwidth
    ? {
        default: 1,
      }
    : {
        default: 2,
        1200: 1,
        500: 1,
      }

  const postsArr = []
  posts.forEach(post =>{

    const body = post.data.body ? post.data.body.map(bodypart=>bodypart.text.text + " ") : null

    const abstract = body ? body.reduce((acc, val) => acc.concat(val), []) : null;
    return    postsArr.push(
      <PostPreview
        title={post.data.title.text}
        subtitle={post.data.subtitle ? post.data.subtitle.text : null}
        cover={
          post.data.cover.localFile && post.data.cover.localFile.childImageSharp
            ? post.data.cover.localFile.childImageSharp.fluid
            : null
        }
        date={post.first_publication_date}
        key={post.prismicId}
        uid={"/post/" + post.uid}
        coverQuote={post.data.coverquote ? post.data.coverquote.text : null}
        previewCover={post.data.previewcover ? post.data.previewcover : null }
        abstract={post.data.body ? post.data.body[0].text.html : null}
      />
    )
}
  )
  return (
    <Masonry
    fullwidth={fullwidth}
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {postsArr}
    </Masonry>
  )
}

export default PostsIndex

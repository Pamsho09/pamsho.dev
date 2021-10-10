import React from 'react'
import styled from 'styled-components'
import Card from '../../components/blog/card'
import { groq } from 'next-sanity'

import { getClient } from '../../lib/sanity.server'

const postQuery = groq`
  *[_type == "post" ][0..10] {
    _id,
    title,
  description,
    mainImage,
    body,
    slug,
    publishedAt,
  }
`
const Blog = styled.div`
  min-height: 80vh;
  @media (min-width: 450.1px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 450px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
  }
`
const Index = ({ data }: any): JSX.Element => (
  <Blog>
    {data.map(
      (post: any): JSX.Element => (
        <Card key={post['_id']} {...post} />
      )
    )}
  </Blog>
)

export default Index
export const getStaticProps = async ({ preview = false }) => {
  const post = await getClient(preview).fetch(postQuery)

  return {
    props: {
      preview,
      data: post,
    },
  }
}

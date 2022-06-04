import React from 'react'
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

const Index = ({ data }: any): JSX.Element => (
  <div className="w-full  grid flex-1  grid-cols-1 md:grid-cols-3 h-full gap-8 mb-10">
    {data.map(
      (post: any): JSX.Element => (
        <Card key={post['_id']} {...post} />
      )
    )}
  </div>
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

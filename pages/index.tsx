import Head from 'next/head'
import HeadHero from '../components/home/head'
import Articles from '../components/home/articles'
import { config } from '../lib/config'
import React from 'react'
import { groq } from 'next-sanity'

import { getClient } from '../lib/sanity.server'

const postQuery = groq`
  *[_type == "post" ][0..4] {
    _id,
    title,
  description,
    mainImage,
    body,
    slug,
    publishedAt
    
  }
`
const Home = ({ data, domain }: any): JSX.Element => (
  <div>
    <Head>
      <title>Pamsho.dev</title>
      <meta name="description" content="Generated by create next app" />
    </Head>
    <HeadHero />
    <Articles data={data} domain={domain} />
  </div>
)
export default Home
export const getStaticProps = async ({ preview = false }) => {
  const post = await getClient(preview).fetch(postQuery)

  return {
    props: {
      preview,
      data: post,
      domain: config.domain,
    },
  }
}

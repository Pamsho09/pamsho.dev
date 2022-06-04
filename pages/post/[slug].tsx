import React from 'react'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { groq } from 'next-sanity'
// eslint-disable-next-line import/default
import Image from 'next/image'
import Seo from '../../components/seo'
import { usePreviewSubscription, urlFor, PortableText } from '../../lib/sanity'
import { getClient } from '../../lib/sanity.server'

const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    body,
    mainImage,
    categories[]->{
      _id,
      title
    },
    
    "slug": slug.current
  }
`

const Post = ({ data, preview }: any) => {
  const router = useRouter()

  const { data: post } = usePreviewSubscription(postQuery, {
    params: { slug: data.post?.slug },
    initialData: data.post,

    enabled: preview && data.post?.slug,
  })

  if (!router.isFallback && !data.post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const { title, mainImage, body, slug } = post
  const imgUrl = urlFor(mainImage).url()
  return (
    <div className="w-full flex-1 ">
      <Seo title={title} img={imgUrl} url={slug} />
      <article className="prose lg:prose-xl w-full">
        {/* <Seo title={title}  url={'pamsho.dev/post/'+slug} img={urlFor(mainImage).url()}/> */}
        <div className="post-content">
          <h2>{title}</h2>
          <figure>
            <Image width={0} height={0} src={imgUrl} />
          </figure>
          <PortableText blocks={body} />
        </div>
      </article>
    </div>
  )
}

export default Post
export const getStaticProps = async ({ params, preview = false }) => {
  if (!params.slug || params.slug === '') {
    return {
      notFound: true,
    }
  }
  const post = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  })

  if (!post || post.length === 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      preview,
      data: { post },
    },
  }
}

export const getStaticPaths = async () => {
  const paths = await getClient().fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

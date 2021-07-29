import React from "react";
import styled from "styled-components";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { groq } from "next-sanity";
import Image from "next/image";
import {

  usePreviewSubscription,
  urlFor,
  PortableText,
} from "../../lib/sanity";
import { getClient } from "../../lib/sanity.server";

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
`;
const PostC = styled.div`
  width: 100%;
  article{
    margin: auto;
      width: 100%;
    .post-content {
    width: 80%;
    margin: auto;
    display: grid;
    place-content: center;
    text-align: justify;
    figure{
        width: 100%;
        margin: 0 auto;
        img{
            width: 100%;
        }
    }
    div{
        img {
    width: 500px;
    height: auto;

  }
    }
  }
  }
  

  
`;
function Post({ data, preview }) {
  const router = useRouter();

  const { data: post } = usePreviewSubscription(postQuery, {
    params: { slug: data.post?.slug },
    initialData: data.post,

    enabled: preview && data.post?.slug,
  });

  if (!router.isFallback && !data.post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const { title, mainImage, body } = post;

  return (
    <PostC>
     {post&& <article>
        <div className="post-content">
          <h2>{title}</h2>
          <figure>
            <Image width={0} height={0} src={urlFor(mainImage).url()} />
          </figure>
          <PortableText blocks={body} />
        </div>
      </article>}
    </PostC>
  );
}

export default Post;
export async function getStaticProps({ params, preview = false }) {
  const post = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  });

  if (!post ||post.length===0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      preview,
      data: { post },
    },
  };
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

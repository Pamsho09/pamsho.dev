import React from 'react'
import styled from "styled-components"
import Card from "../../components/blog/card"
import { groq } from "next-sanity";

import { getClient } from "../../lib/sanity.server";

const postQuery = groq`
  *[_type == "post" ][0..10] {
    _id,
    title,
  description,
    mainImage,
    body,
    slug,
    
  }
`;
const Blog = styled.div` 
@media (min-width: 450.1px) {
    width: 100%;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
}
@media (max-width:450px){
    width: 100%;
display: grid;
grid-template-columns: 1fr ;
}


`   
function Index({data}) {
   
    return (
        <Blog>
            {data.map(post => (<Card key={post._id} {...post} />))}
            
            

        </Blog>
    )
}

export default Index
export async function getStaticProps({  preview = false }) {
    const post = await getClient(preview).fetch(postQuery);
 
    return {
      props: {
        preview,
        data:post,
      },
    };
  }
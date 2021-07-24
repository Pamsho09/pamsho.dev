import React from 'react'
import styled   from 'styled-components'
import CardArticle from './cardArticle'
const ArticlesC=styled.div`
width: 100%;
padding: 1em;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
column-gap:33px;row-gap:43px;

`
function Articles() {
    return (
        <ArticlesC>
            <CardArticle head={true}/>
            <CardArticle />
            <CardArticle />
            
        </ArticlesC>
    )
}

export default Articles

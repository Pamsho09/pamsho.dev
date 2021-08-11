import React from 'react'
import styled from 'styled-components'
import CardArticle from './cardArticle'
import Streams from './streams'

const ArticlesC = styled.div`
  @media (min-width: 450.1px) {
    width: 100%;
    padding: 1em;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 33px;
    row-gap: 43px;
    place-items: center;
  }
  @media (max-width: 450px) {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-items: center;
  }
`

const Articles = ({ data, domain }: any): JSX.Element => (
  <ArticlesC>
    {(data.length > 0 || data) &&
      data.map((e, index) => (
        <CardArticle key={index} head={index === 0} data={e} />
      ))}

    <Streams domain={domain} />
  </ArticlesC>
)

export default Articles
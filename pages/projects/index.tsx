import React, { useState } from 'react'
import styled from 'styled-components'
import { groq } from 'next-sanity'

import { getClient } from '../../lib/sanity.server'
import CardProject from '@/components/projects/cardProject'
import ModalProject from '@/components/projects/modalProject'

const postQuery = groq`
  *[_type == "project" ][0..10] {
    _id,
    name,
    image,
    bio,
    urlRepo,
    urlDemo

  }
`
const Projects = styled.div`
  min-height: 80vh;
  display: flex;
  padding: 1em;
  flex-wrap: wrap;

  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
    gap: 1em;
  }
`
interface IData {
  _id: string
  image: any
  name: string
  bio: any
  urlRepo: string
  urlDemo: string
}
interface IProps {
  prewiew: boolean
  data: IData[]
}
interface IState {
  state: boolean
  project?: IData
}
const Index = (props: IProps): JSX.Element => {
  const initialState: IState = {
    state: false,
    project: null,
  }
  const [modal, setModal] = useState<IState>(initialState)
  const handleClick = (data?: IData) => {
    setModal({ state: !modal.state, project: data })
  }
  return (
    <Projects>
      {props.data.map((item) => (
        <>
          {' '}
          <CardProject key={item['_id']} {...item} click={handleClick} />
        </>
      ))}
      {modal.state && <ModalProject click={handleClick} data={modal.project} />}
    </Projects>
  )
}

export default Index
export const  getServerSideProps = async ({ preview = false }) => {
  const post = await getClient(preview).fetch(postQuery)
  return {
    props: {
      preview,
      data: post,
    },
  }
}

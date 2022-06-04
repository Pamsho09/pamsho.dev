import React, { useState } from 'react'
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
    <div className="flex-1 flex p-3 flex-wrap flex-col md:flex-row gap-4 justify-center items-center box-border ">
      {props.data.map((item) => (
        <>
          {' '}
          <CardProject key={item['_id']} {...item} click={handleClick} />
        </>
      ))}
      {modal.state && <ModalProject click={handleClick} data={modal.project} />}
    </div>
  )
}

export default Index
export const getServerSideProps = async ({ preview = false }) => {
  const post = await getClient(preview).fetch(postQuery)
  return {
    props: {
      preview,
      data: post,
    },
  }
}

import { NextSeo } from 'next-seo'
import React from 'react'
interface Iprops {
  title: string
  url: string
  img: string
}
const Seo = ({ title, url, img }: Iprops): JSX.Element => (
  <>
    <NextSeo
      title="Using More of Config"
      description="This example uses more of the available config options."
      canonical="https://www.canonical.ie/"
      openGraph={{
        url,
        title,

        images: [
          {
            url: img,
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
          },
          {
            url: img,
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
          },
          { url: img },
          { url: img },
        ],
        site_name: 'pamsho.dev',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
  </>
)

export default Seo

import React from 'react'
import Streams from './streams'
const Articles = ({ domain }: any): JSX.Element => (
  <>
    <div className="w-full md:mt-10 p-4 flex flex-wrap  md:grid items-center justify-centergrid-cols-1  md:grid-cols-3 gap-8 place-items-center">
      {/* {(data.length > 0 || data) &&
        data.map((e, index) => (
          <CardArticle key={index} head={index === 0} data={e} />
        ))} */}

      <Streams domain={domain} />
    </div>
  </>
)

export default Articles

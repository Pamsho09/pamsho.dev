import React from 'react'
interface Iprops {
  domain: string
}
const Streams = ({ domain }: Iprops): JSX.Element => (
  <div className="w-full grid col-start-1 col-end-4 place-items-center gap-2 md:grid-cols-2 mt-14">
    <div className="w-80 md:w-full text-center flex flex-col justify-center items-center gap-6">
      <h1 className="font-bold text-4xl">Aprende en directo.</h1>
      <p className="font-normal text-base text-slate-500">
        Todos los dias apartir de las 20:30pm (GMT-5) me encuentro trasmitiendo
        en mi canal twitch en donde puedes aprender cosas nuevas y divertidas
        uwu
      </p>

      <a
        className="bg-indigo-700 rounded-md font-bold text-lg text-white px-4 py-2 "
        href="http://twitch.tv/pamsho_"
        target={'_blank'}
        rel="noreferrer"
      >
        Vamos a twitch
      </a>
    </div>
    <iframe
      className="w-full h-80"
      src={`https://player.twitch.tv/?channel=pamsho_&parent=${domain}`}
      frameBorder="0"
      allowFullScreen={true}
      scrolling="no"
    ></iframe>
  </div>
)

export default Streams

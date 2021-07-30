import { NextSeo } from 'next-seo';

const Seo = ({title,url,img}) => (
  
   <> <NextSeo
   title="Using More of Config"
   description="This example uses more of the available config options."
   canonical="https://www.canonical.ie/"
   openGraph={{
     url: url,
     title: title,
    
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
);

export default Seo;
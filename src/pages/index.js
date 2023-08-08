import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { PortableText } from "@portabletext/react"
import { graphql } from "gatsby"
import Spacer from "../components/spacer"

const IndexPage = ({ data: { home } }) => {
  const components = {
    types: {
      span: ({ value }) => <span>{value.text}</span>,
    },
  }
  return (
    <Layout>
      <div className='max-1400 ma p20'>
        <Spacer />
        <h1 className='title text-center'>{home.heroTitle} </h1>
        <picture className='max-600 ratio-1-1 ma pos-rel overflow oval'>
          <GatsbyImage image={home.image.asset.gatsbyImageData} className='bg-image' />
        </picture>
        <h2 className='h1 title text-center'>{home.heroCaption}</h2>
        <article className='max-600 ma text-center text-lg p10'>
          <PortableText value={home.description[0]._rawChildren} components={components} />
        </article>
        <Spacer />
        <Spacer />
        <aside className='grid p20'>
          {home.gallery.map(image => {
            console.log(image)
            return (
              <picture key={image._id} className='ratio-1-1 overflow oval pos-rel small'>
                <GatsbyImage image={image.asset.gatsbyImageData} className='bg-image' />
              </picture>
            )
          })}
        </aside>
        <Spacer />
        <Spacer />
        <article className='p20 text-center text-lg'>
          <PortableText value={home.testimonial[0]._rawChildren} components={components} />
          <p className='text-md mt20 op-75'>{`${home.testimonialAuthor} // ${home.testimonialPosition}`}</p>
        </article>
        <Spacer />
        <Spacer />
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title='Florist' />

export default IndexPage

export const sanityQuery = graphql`
  query homepage {
    home: sanityHomepage {
      heroTitle
      image {
        asset {
          gatsbyImageData
        }
      }
      heroCaption
      description {
        _rawChildren
      }
      gallery {
        asset {
          gatsbyImageData
          _id
        }
      }
      testimonial {
        _rawChildren
      }
      testimonialAuthor
      testimonialPosition
    }
  }
`

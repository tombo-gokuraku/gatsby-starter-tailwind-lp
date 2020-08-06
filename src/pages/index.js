/** @jsx jsx */
import { jsx } from "@emotion/core"
import tw from "twin.macro"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <H1>Gatsby starter using Emotin and tailwind</H1>
      <H2>Install</H2>
      <P>Install the Gatsby CLI and create a project with this starter</P>
      <Pre>
        <code>
          gatsby new emotion_tailwind
          https://github.com/tombo-gokuraku/gatsby-starter-emotion-tailwind
        </code>
        <br />
        <code>cd emotion_tailwind</code>
        <br />
        <code>gatsby develop</code>
      </Pre>
    </Layout>
  )
}

const H1 = tw.h1`
  text-3xl font-bold py-4 pb-3
`
const H2 = tw.h2`
  text-2xl font-semibold py-5 pb-2
`
const P = tw.p`
  text-base
  py-1
`

const Pre = tw.pre`
  text-sm
  bg-gray-300
  overflow-auto
  mb-2
`

export default IndexPage

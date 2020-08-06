/** @jsx jsx */
import { jsx } from "@emotion/core"
import tw from "twin.macro"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import Button from "../components/Button"
import H1 from "../components/H1"
import H2 from "../components/H2"

const IndexPage = () => {
  return (
    <Layout>
      <Button>hoge</Button>
      <Button reverse>reverse</Button>
      <SEO title="Home" />
      <H1>Gatsby starter using Emotin and tailwind</H1>
      <H1>Gatsby starter using Emotin and tailwind</H1>
      <H1>Gatsby starter using Emotin and tailwind</H1>
      <H1>Gatsby starter using Emotin and tailwind</H1>
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

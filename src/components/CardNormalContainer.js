import React from "react"
import tw from "twin.macro"

import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import H3 from "./H3"
import P from "./P"
import CardNormal from "./CardNormal"

const cardData = [
  {
    title: "hoge",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,",
  },
  {
    title: "piyo",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,",
  },
  {
    title: "foo",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,",
  },
]

function CardNormalContainer() {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativePath: { glob: "item*" } }) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          id
        }
      }
    }
  `)
  return (
    <div tw="flex flex-wrap mx-auto justify-around items-center">
      {data.allFile.nodes.map((image, index) => {
        return (
          <CardNormal key={image.id}>
            <Image
              fluid={image.childImageSharp.fluid}
              style={tw`h-48 rounded-t-lg`}
            />
            <div tw="p-4">
              <H3>{cardData[index].title}</H3>
              <P>{cardData[index].description}</P>
            </div>
          </CardNormal>
        )
      })}
    </div>
  )
}

export default CardNormalContainer

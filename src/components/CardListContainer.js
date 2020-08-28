
import React from "react"
import tw from "twin.macro"

import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import H3 from "./H3"
import P from "./P"
import CardList from "./CardList"

const cardData = [
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
]

function CardListContainer() {
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
    <>
      {data.allFile.nodes.map((image, index) => {
        return (
          <CardList key={image.id}>
            <div tw="w-full p-6 sm:w-1/2">
              <Image
                fluid={image.childImageSharp.fluid}
                style={tw`w-full h-48`}
              />
            </div>
            <div tw="w-full p-6 sm:w-1/2">
              <H3>{cardData[index].title}</H3>
              <P>{cardData[index].description}</P>
            </div>
          </CardList>
        )
      })}
    </>
  )
}

export default CardListContainer

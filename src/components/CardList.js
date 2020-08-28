/** @jsx jsx */
import { jsx } from "@emotion/core"
import tw, { css } from "twin.macro"
import PropTypes from "prop-types"

function CardList({ children }) {
  return (
    <div
      css={[
        tw`even:(bg-primary-100)`,
        css`
          :nth-child(even) > div {
            ${tw`flex-row-reverse`}
          }
        `,
      ]}
    >
      <div tw="flex flex-wrap container mx-auto px-4 md:px-0">{children}</div>
    </div>
  )
}

CardList.propTypes = {
  children: PropTypes.node,
}

export default CardList

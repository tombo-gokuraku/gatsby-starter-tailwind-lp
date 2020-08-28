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
          :nth-of-type(even) > div {
            ${tw`flex-row-reverse`}
          }
        `,
      ]}
    >
      <div tw="flex flex-wrap container mx-auto p-4 justify-between items-center">
        {children}
      </div>
    </div>
  )
}

CardList.propTypes = {
  children: PropTypes.node,
}

export default CardList

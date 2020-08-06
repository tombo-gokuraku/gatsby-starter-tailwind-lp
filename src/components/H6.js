import tw, { styled, css } from "twin.macro"

const H6 = styled.h6(() => [
  tw`text-base font-bold text-gray-900 xl:text-lg md:text-base`,
  css`
    margin-bottom: 0.35em;
  `,
])

export default H6

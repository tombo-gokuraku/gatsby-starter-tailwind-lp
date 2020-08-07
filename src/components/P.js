import tw, { styled, css } from "twin.macro"

const P = styled.p(() => [
  tw`text-sm font-normal text-gray-900 xl:text-base md:text-base`,
  css`
    margin-bottom: 0.35em;
  `,
])

export default P

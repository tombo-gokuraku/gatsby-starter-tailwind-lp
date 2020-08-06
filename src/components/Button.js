import tw, { styled } from "twin.macro"

const Button = styled.a(({ reverse }) => [
  tw`inline-block w-full px-4 py-1 text-xl font-bold text-center text-white no-underline whitespace-no-wrap align-middle cursor-pointer bg-primary-700 rounded-md hover:bg-primary-400 active:bg-primary-800 duration-200 transition-colors ease-in-out md:w-auto`,
  reverse &&
    tw`bg-white text-primary-700 hover:bg-primary-100 active:bg-primary-200`,
])
export default Button

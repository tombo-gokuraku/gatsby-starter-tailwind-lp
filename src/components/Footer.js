import React from "react"
import "twin.macro"

function Footer() {
  return (
    <footer tw="flex flex-col items-center justify-center px-4 pb-20 md:(px-6 py-12) xl:(px-8) text-gray-700">
      <div tw="text-xs text-center">
        © {new Date().getFullYear()}, Built with{" "}
        <a href="https://github.com/tombo-gokuraku/gatsby-starter-tailwind-lp">
          gatsby-starter-tailwind-lp
        </a>
      </div>
    </footer>
  )
}

export default Footer

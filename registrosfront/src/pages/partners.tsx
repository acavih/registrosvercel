import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Navigation from "../components/Navigation"

const PartnersPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navigation />
      <p>Partners</p>
    </>
  )
}

export default PartnersPage

export const Head: HeadFC = () => <title>Home Page</title>

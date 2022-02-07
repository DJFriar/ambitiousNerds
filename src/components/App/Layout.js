import React from 'react'
import { RecoilRoot } from 'recoil'
import GoTop from './GoTop'
import Seo from './SEO'

const Layout = ({ children }) => {
  return (
    <RecoilRoot>
      <Seo />
      {children}
      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </RecoilRoot>
  )
}

export default Layout

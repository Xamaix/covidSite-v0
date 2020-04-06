import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SEO from "../components/seo"
import { css } from "@emotion/core"

/* const post_css = css`
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  max-width: 640px;
` */

const cen = css`
  text-align: center;
  flex-wrap: wrap;
  align-content: center;
`

const Layout = () => (
  <div> 
    <SEO title="COVID-19 Spain"/>
    <Header />
    {/* <div css={post_css}>{children}</div> */}
    <div css = {cen}>
      <iframe src="https://flo.uri.sh/story/240956/embed?auto=1" width="600"  height="800"></iframe>
    <Footer />
    </div>
  </div>
)

export default Layout
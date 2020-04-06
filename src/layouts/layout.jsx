import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SEO from "../components/seo"
import { css } from "@emotion/core"
import iframe from '../components/iframe.css'

/* const post_css = css`
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  max-width: 640px;
` */

const cen = css`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  max-width: 700px;
`

const Layout = () => (
  <div> 
    <SEO title="COVID-19 Spain"/>
    <Header />
    {/* <div css={post_css}>{children}</div> */}
    <div class="iframe-container">
      <iframe scrolling="no" src="https://flo.uri.sh/story/240956/embed?auto=1" width="700" height="100%"></iframe>
    <Footer />
    </div>
  </div>
)

export default Layout
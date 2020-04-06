import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { fonts } from "gatsby-design-tokens"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"
// import { FaTwitter, FaGithub,  FaHome } from 'react-icons/fa';

// https://news.ycombinator.com/item?id=21050501
// https://codeburst.io/flexbox-building-a-navigation-part-2-2-6cc58b9d4173
import headerStyles from "./header.module.css"
import logo from "../static/websitelogo.png"



/* const NavLiItem = styled(`li`)`
  color: black;
  margin-bottom:  ${rhythm(1 / 2)};
  margin-top:  ${rhythm(1 / 2)};
  font-family: ${fonts.monospace.join(", ")};
  text-align: center;
` */

/* const BlackA = styled(`a`)`
  color: black;
` */

const mono = css`
  font-family: ${fonts.monospace.join(", ")};
  text-align: center;
`
const Image = styled.img`
  margin: 1rem;
  filter: alpha(opacity=100);
  min-width: 2em;
  `

const Header = () => (
  <header className={headerStyles.headevr}>
  <div css={mono} className={headerStyles.cov}>
    <Link to="/">
        <Image src={logo} alt="website logo" height={32} />
    </Link>
  </div>
    <hr/>
  </header>
)

export default Header
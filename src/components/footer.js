import React from 'react'
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"
import { FaTwitter, FaGithub,  FaHome } from 'react-icons/fa';
import headerStyles from "./header.module.css"


const NavLiItem = styled(`li`)`
  color: black;
  position:center;
  content-align: center;
`

const BlackA = styled(`a`)`
  color: black;
`

const foot = css`
  margin-top: 2em;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  max-width: 640px;
  font-size: 87%;
  `

const cen = css`
  text-align: center;
`

const mar = css`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`

const Footer = () => (
    <div>
    <hr css={mar}/>
    <footer css={foot}>
      <p css={cen}><Link to="/">Back to homepage.</Link></p>
      
            <p css={cen}>  Website by <a href="https://linkedin.com/xavier-bollo">Xavier Bolló</a>, promoted by <a href="https://ignasialcalde.es">Ignasi Alcalde</a>. &nbsp; Source code <a href="https://github.com/xamaix/covid19SpainSite">here</a>.</p>
    </footer>
{/*     <nav css={cen}>
      <ul>
        <NavLiItem>
          <BlackA href="https://twitter.com/ignasialcalde/"><FaTwitter /></BlackA>
        </NavLiItem>
        <NavLiItem>
          <BlackA href="https://github.com/xamaix/"><FaGithub /></BlackA>
        </NavLiItem>
        <NavLiItem><Link to="/"><BlackA href=""><FaHome /></BlackA></Link></NavLiItem>
      </ul>
    </nav> */}
    </div>
)

export default Footer
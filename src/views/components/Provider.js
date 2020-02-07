import React from "react"
import styled from "styled-components"

const Footer = styled.div`
  position: fixed;
  padding: 16px 24px;
  right: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;

  a {
    color: rgba(255, 255, 255, 0.3);
    text-decoration: none;
    font-size: 0.8em;
  }
`

const Provider = props => (
  <div>
    {props.children}
    <Footer>
      <a href="https://twitter.com/sh4hids">twitter @sh4hids</a>
      <a href="https://shahid.pro">www.shahid.pro</a>
    </Footer>
  </div>
)

export default {
  Provider,
}

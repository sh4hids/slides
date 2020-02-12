import React from "react"
import styled from "styled-components"
import Text from "./Text"
import { useDeck } from "mdx-deck"

const Footer = styled.div`
  position: fixed;
  padding: 16px 24px;
  right: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;

  span {
    svg {
      width: 13px;
      height: 13px;
      position: relative;
      top: 1px;
      margin-right: 4px;
    }
  }

  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-size: 0.8em;
  }
`

const Provider = props => {
  const state = useDeck()

  return (
    <div>
      {props.children}
      <Footer>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>
          <a href="https://twitter.com/sh4hids">@sh4hids</a>
        </span>
        <Text color="white" margin={0} padding={0}>
          {state.index + 1}/{state.length}
        </Text>
        <span>
          <a href="https://shahid.pro">www.shahid.pro</a>
        </span>
      </Footer>
    </div>
  )
}

export default {
  Provider,
}

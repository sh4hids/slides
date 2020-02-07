import React from "react"
import Flex from "./Flex"
import styled, { css } from "styled-components"

const Container = styled(Flex)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ bgImage }) =>
    bgImage
      ? css`
          background-image: url(${bgImage});
          background-repeat: no-repeat;
          background-position: center center;
          background-attachment: fixed;
          background-size: cover;
        `
      : ""};
`

const Layout = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
)

export default Layout

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

code {
  font-size: 1.1rem;
}

ul {
  list-style: none;

  li {
    &::before {
      content: '';
      background: url('/assets/images/bullet.svg');
      width: 16px;
      height: 16px;
      display: inline-block;
      background-position: center;
      background-size: cover;
      position: relative;
      top: 2px;
    }
  }

}
  
`

export default GlobalStyle

import { createGlobalStyle } from 'styled-components'

export const CSSReset = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
  }

  img{
    width: 100%;
  }
  body{
    background-color: ${({ theme }) => theme.colors['white-100']};
  }

  body, html{
    overflow-x: hidden;
  }



`

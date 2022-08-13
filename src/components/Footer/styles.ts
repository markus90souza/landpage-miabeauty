import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors['pink-700']};
`
export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 667px) and (min-width: 320px) {
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`

export const Brand = styled(Image)``

export const FooterBrandContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  p {
    color: ${({ theme }) => theme.colors['gray-100']};
  }

  @media only screen and (max-width: 667px) and (min-width: 320px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const FooterSocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
`

export const SocialLink = styled(Link)`
  padding: 13px;
  cursor: pointer;
  display: inline-block;
  background-color: bisque;
  a:hover {
    background-color: red;
  }
`

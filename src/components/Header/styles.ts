import Image from 'next/image'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors['white-100']};
`
export const HeaderWrapper = styled.div`
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  margin: 0 auto;
  @media only screen and (max-width: 667px) and (min-width: 320px) {
    padding: 20px;
  }
`
export const Brand = styled(Image)``

export const HeaderButton = styled.button`
  height: 3rem;
  background-color: transparent;
  padding: 0.75rem 1.5rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors['blue-100']};
  border: 2px solid ${({ theme }) => theme.colors['blue-100']};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  border-radius: 90px;

  &:hover {
    color: ${({ theme }) => theme.colors['blue-200']};
    border-color: ${({ theme }) => theme.colors['blue-200']};
  }
`

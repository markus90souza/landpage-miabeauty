import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors['blue-200']};
  border-radius: 2rem;
  overflow: hidden;
`

export const Info = styled.div`
  padding: 2rem;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  margin-bottom: 0.5rem;
`

export const Description = styled.p`
  color: ${({ theme }) => theme.colors['white-100']};
  font-weight: 400;
  font-size: 1rem;
`

export const Cover = styled(Image)`
  background-size: contain;
`

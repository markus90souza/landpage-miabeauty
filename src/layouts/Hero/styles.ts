import Image from 'next/image'
import styled from 'styled-components'

export const HeroContainer = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors['white-100']};
`

export const HeroWrapper = styled.div`
  display: flex;
  max-width: 1120px;
  margin: 0 auto;
  gap: 1rem;

  @media only screen and (max-width: 667px) and (min-width: 320px) {
    flex-direction: column;
    padding: 20px;
  }
`

export const HeadlineContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
`

export const Headline = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.heading};
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  color: ${({ theme }) => theme.colors['blue-100']};
  font-weight: 700;
`

export const SubHeadline = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 400;
  color: ${({ theme }) => theme.colors['blue-200']};
`

export const WhatsappButton = styled.button`
  padding: 20px 40px;
  height: 64px;
  background-color: ${({ theme }) => theme.colors['purple-800']};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  border: 0;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  border-radius: 90px;

  &:hover {
    background-color: ${({ theme }) => theme.colors['purple-900']};
  }
`

export const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`

export const Cover = styled(Image)`
  /* width: 100%;
  max-width: 457px;
  max-height: 518px;

  @media (max-width: 357px) {
    width: 457px;
    max-height: 518px;
  } */
`

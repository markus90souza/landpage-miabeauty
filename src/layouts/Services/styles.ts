import styled from 'styled-components'

export const ServicesContainer = styled.section`
  padding: 96px 72px;

  background-color: ${({ theme }) => theme.colors['blue-100']};

  @media only screen and (max-width: 667px) and (min-width: 320px) {
    padding: 20px;
  }
`

export const ServicesWrapper = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  header {
    margin-bottom: 48px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h2 {
      font-size: ${({ theme }) => theme.fontSizes['4xl']};
      color: ${({ theme }) => theme.colors.white};
      font-weight: 700;
    }
    h3 {
      font-size: ${({ theme }) => theme.fontSizes.md};
      color: ${({ theme }) => theme.colors['green-100']};
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`

export const ServicesCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media only screen and (max-width: 667px) and (min-width: 320px) {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
`

import { WhatsappLogo } from 'phosphor-react'
import {
  HeroContainer,
  HeroWrapper,
  HeadlineContainer,
  ImageContainer,
  Headline,
  SubHeadline,
  WhatsappButton,
  Cover,
} from './styles'

import heroImage from '@assets/images/hero.png'

export function Hero() {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeadlineContainer>
          <Headline>Eleve sua autoestima com nossos serviços</Headline>
          <SubHeadline>
            Revele a essência da sua beleza com nosso trabalho de qualidade,
            profissionais qualificados e um ambiente seu igual!
          </SubHeadline>

          <WhatsappButton>
            <WhatsappLogo size={20} />
            AGENDAR HORÁRIO
          </WhatsappButton>
        </HeadlineContainer>
        <ImageContainer>
          <Cover src={heroImage} />
        </ImageContainer>
      </HeroWrapper>
    </HeroContainer>
  )
}

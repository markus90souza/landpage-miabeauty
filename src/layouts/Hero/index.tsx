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
            Nossos especialistas estão prontos para cuidar da saúde e limpeza do
            seu melhor amigo com um atendimento exclusivo!
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

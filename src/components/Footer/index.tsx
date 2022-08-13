import {
  FooterContainer,
  FooterWrapper,
  FooterBrandContainer,
  Brand,
  FooterSocialContainer,
  SocialLink,
} from './styles'

import logoIcon from '@assets/images/logo.svg'
import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Footer() {
  const { colors } = useTheme()
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterBrandContainer>
          <Brand src={logoIcon} />
          <p>
            © {new Date().getFullYear()} - Lovet. Todos os direitos reservados.
          </p>
        </FooterBrandContainer>
        <FooterSocialContainer>
          <SocialLink href={''}>
            <a>
              <FacebookLogo size={24} color={colors.white} />
            </a>
          </SocialLink>

          <SocialLink href={''}>
            <a>
              <TwitterLogo size={24} color={colors.white} />
            </a>
          </SocialLink>

          <SocialLink href={''}>
            <a>
              <InstagramLogo size={24} color={colors.white} />
            </a>
          </SocialLink>
        </FooterSocialContainer>
      </FooterWrapper>
    </FooterContainer>
  )
}

import { HeaderContainer, HeaderWrapper, Brand, HeaderButton } from './styles'

import logoIcon from '@assets/images/logo.svg'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Brand src={logoIcon} />
        <HeaderButton>Agendar horário</HeaderButton>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export { Header }

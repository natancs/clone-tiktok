import { Container, Content, LogoContainer, LogoIcon, Logo, OptionsContainer, Icon, Avatar } from './styled'

export default function Header() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <LogoIcon src="/images/logoIcon.svg"/>
          <Logo src="/images/logo.svg"/>
        </LogoContainer>

        <OptionsContainer>
          <Icon src="/images/uploadIcon.svg" />
          <Avatar>
            <img src="https://avatars.githubusercontent.com/u/59514027?s=400&u=e6657d3cea381b4eb9e89ab9075d1042a724dcdc&v=4" alt=""/>
          </Avatar>
        </OptionsContainer>
      </Content>
    </Container>
  )
}

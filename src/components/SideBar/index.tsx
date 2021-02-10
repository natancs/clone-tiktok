import {
  Container,
  MenuItem,
  Following,
  FollowingHeader,
  InfoContainer,
  Links
} from './styled'

import User from '../User'

export default function SideBar() {
  return (
    <Container>
      <MenuItem active>
        <img src='/images/homeIcon.svg' />
        <span>Para Você</span>
      </MenuItem>
      <MenuItem>
        <img src='/images/peopleIcon.svg' />
        <span>Seguindo</span>
      </MenuItem>

      <Following>
        <FollowingHeader>Suas principais contas</FollowingHeader>
        <User user={{
          name: 'Natan',
          username: 'Natanael',
          avatar: 'https://avatars.githubusercontent.com/u/59514027?s=400&u=e6657d3cea381b4eb9e89ab9075d1042a724dcdc&v=4'
        }} />
      </Following>

      <InfoContainer>
        <Links margin>
          <a>Início</a>
          <a>Sobre</a>
          <a>Sala de Inprensa</a>
          <a>Carreira</a>
          <a>ByteDance</a>
        </Links>
        <Links>
          <a>Ajuda</a>
          <a>Segurança</a>
        </Links>
        <Links>
          <a>Diretrizes da comunidade</a>
          <a>Termos</a>
        </Links>
        <Links margin>
          <a>Privacidade</a>
        </Links>
        <Links margin>
          <a>&copy; 2021 TikTok</a>
        </Links>
      </InfoContainer>
    </Container>
  )
}

import Header from '../Header'
import SideBar from '../SideBar'

import { Container, ContentContainer, SideBarContainer } from './styled'

export default function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <Container>
        <SideBarContainer>
          <SideBar></SideBar>
        </SideBarContainer>

        <ContentContainer>
          {children}
        </ContentContainer>
      </Container>
    </>

  )
}

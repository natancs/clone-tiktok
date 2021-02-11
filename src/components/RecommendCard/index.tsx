import {
  Container,
  Avatar,
  Info
} from './styled'

export default function RecommendCard({ recommend }) {
  return (
    <Container>
      <Avatar  src={recommend.avatar} />
      <Info>
        <a>{recommend.title}</a>
        <span>{recommend.views}</span>
      </Info>
    </Container>
  )
}

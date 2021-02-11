import { Container } from './styled'

import PostCard from '../PostCard'

export default function Feed({ posts }) {
  return (
    <Container>
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </Container>
  )
}

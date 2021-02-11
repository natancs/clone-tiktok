import { isTaggedTemplateExpression } from "typescript";

export default function PostCard({ post }) {
  return (
    <Container>
      <Header>
        <PersonContainer>
          <Avatar src={post?.author?.avatar} />
          <Info>
            <Autor>
              {post?.author?.username}
              <span>{post?.author?.name}</span>
            </Autor>
            <Description>
              <span>{post?.description}</span>
              {post?.tags.map(tag,index) => (
                <Tag key={index}>{tag.title}</Tag>
              )}
            </Description>
          </Info>
        </PersonContainer>
      </Header>

      <Content>
        <Song></Song>
        <VideoContainer>
          <Video
            src={post?.videoUrl}
            webkit-playsinline='true'
            playsinline=''
            loop='true'
            preload='metadata'
          />
          <ActionsContainer>
            <PlayIcon src='/images/playIcon.svg'></PlayIcon>
          </ActionsContainer>
        </VideoContainer>
      </Content>
    </Container>
  )
}

import { useRef, useState } from 'react'

import Button from '../Button'
import {
  Container,
  Header,
  PersonContainer,
  Avatar,
  Info,
  Author,
  Description,
  Tag,
  Content,
  Song,
  VideoContainer,
  Video,
  ActionsContainer,
  PlayIcon,
  Actions,
  Action,
  ButtonContainer
} from './styled'

export default function PostCard({ post }) {
  const videoRef = useRef()
  const [running, setRunning] = useState(false)

  function playAction() {
    if (videoRef?.current != null) {
      if (!running) videoRef.current.play()
      else videoRef.current.pause()

      setRunning(!running)
    }
  }

  return (
    <Container>
      <Header>
        <PersonContainer>
          <Avatar src={post?.author?.avatar} />
          <Info>
            <Author>
              {post?.author?.username}
              <span>{post?.author?.name}</span>
            </Author>
            <Description>
              <span>{post?.description}</span>
              {post?.tags.map((tag,index) => (
                <Tag key={index}>{tag.title}</Tag>
              ))}
            </Description>
          </Info>
        </PersonContainer>
        <ButtonContainer>
          <Button fontSize={14} outlined >Segir</Button>
        </ButtonContainer>
      </Header>

      <Content>
        <Song>
          <img src="/images/songIcon.svg" alt=""/>
          <a>{post?.songName}</a>
        </Song>
        <VideoContainer>
          <Video
            ref={videoRef}
            src={post?.videoUrl}
            webkit-playsinline='true'
            playsinline=''
            loop='true'
            preload='metadata'
          />
          <ActionsContainer onClick={playAction}>
            <PlayIcon src={running ? '/images/pauseIcon.svg' : '/images/playIcon.svg'}/>
          </ActionsContainer>
        </VideoContainer>
      </Content>
      <Actions>
        <Action>
          <img src="/images/heartIcon.svg" alt=""/>
          <a>{post?.likes}</a>
        </Action>
        <Action>
          <img src="/images/bubbleIcon.svg" alt=""/>
          <a>{post?.comments}</a>
        </Action>
        <Action>
          <img src="/images/arrowIcon.svg" alt=""/>
          <a>{post?.replices}</a>
        </Action>
      </Actions>
    </Container>
  )
}

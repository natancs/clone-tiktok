import Button from "../Button";
import { Container } from "../Header/styled";

export default function Suggestions() {
  return (
    <Container>
      <IconsContainer>
        <Icon src='/images/facebookIcon.svg'/>
        <Icon src='/images/pinterestIcon.svg'/>
        <Icon src='/images/twitterIcon.svg'/>
      </IconsContainer>

      <BoxContainer>
        <BoxHeader><span>Contas Sugeridas</span></BoxHeader>
        <ItemContainer>
          {people.map((person, index) => (
            <Item >
              <User user={person} key={index} />
              <Button fontSize={14} outlined >Seguir</Button>
            </Item>
          ))}
        </ItemContainer>
      </BoxContainer>

      <BoxContainer>
      <BoxHeader><span>Descobrir</span></BoxHeader>
      <ItemContainer>
        {itens.map((item, index) => (
          <Item >
            <RecomendedCard recomended={item} key={index} />
            <ArrowIcon />
          </Item>
        ))}
      </ItemContainer>
      </BoxContainer>

      <DownloadImage src='/images/appstore.png' />
      <DownloadImage src='/images/playtore.png' />
      <DownloadImage src='/images/amazon.png' />
    </Container>
  )
}

import { Strong } from "../../styles/common";
import { Container, Content, SubParagraph, SubTitle, Title } from "./styled";

export default function Target() {
  return (
    <Container>
      <Title>
        <Strong>대상</Strong>
      </Title>
      <Content>
        <SubTitle>65세 미만</SubTitle>
        <SubParagraph>
          치매/알츠하이머, 중풍, 파킨슨, 뇌혈관성 질환 등 노인성 질환으로 거동이
          불편하신 분들
        </SubParagraph>
      </Content>
      <Content>
        <SubTitle>65세 이상</SubTitle>
        <SubParagraph>거동이나 일상생활이 불편하신 분들</SubParagraph>
      </Content>
    </Container>
  );
}

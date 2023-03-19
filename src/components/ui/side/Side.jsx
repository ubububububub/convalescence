import { Strong } from "../../../styles/common";
import { Container, Paragraph, Tel, Title, Wrapper } from "./styled";

export default function Side() {
  return (
    <Wrapper>
      <Container>
        <Paragraph>
          건강한 <Strong>노후</Strong>, 행복한 <Strong>동행</Strong>
        </Paragraph>
        <Title>국민건강재가복지센터</Title>
        <Tel>
          상담문의 <Strong>051-635-0086</Strong>
        </Tel>
      </Container>
    </Wrapper>
  );
}

import { Strong } from "../../../styles/common";
import { Container, Paragraph, Title, Button } from "./styled";

export default function Introduction() {
  return (
    <Container>
      <Title>
        건강한 <Strong>노후</Strong>, 행복한 <Strong>동행</Strong>
      </Title>
      <Paragraph>
        나의 사랑하는 부모님 걱정되시죠?
        <br />
        이제는 걱정하지 마시고
        <br />
        <Strong>국민건강재가복지센터</Strong>에서
        <br />
        가장 든든한 보호자가 되어
        <br />
        가족의 고민을 덜어드리겠습니다.
      </Paragraph>
      <Button>문의하기</Button>
    </Container>
  );
}

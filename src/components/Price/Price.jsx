import { Strong } from "../../styles/common";
import { Container, Paragraph, Title } from "./styled";

export default function Price() {
  return (
    <Container>
      <Title>
        <Strong>비용</Strong>
      </Title>
      <Paragraph>
        노인장기요양보험에서
        <br />
        국비로 사용금액의
        <br />
        85~100% 지원해드립니다.
        <br />
        (본인 부담금 0~15%)
      </Paragraph>
    </Container>
  );
}

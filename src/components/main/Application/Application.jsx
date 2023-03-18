import { Strong } from "../../../styles/common";
import { Container, Paragraph, Title } from "./styled";

export default function Application() {
  return (
    <Container>
      <Title>
        <Strong>신청</Strong>
      </Title>
      <Paragraph>
        저희 복지센터에서는 장기요양등급을 받아 요양보호사의 도움을 받으실 수
        있도록 장기요양급여를 이용하기 위한 <Strong>신청절차</Strong>를&nbsp;
        <Strong>무료대행</Strong>해드리고 있습니다.
      </Paragraph>
    </Container>
  );
}

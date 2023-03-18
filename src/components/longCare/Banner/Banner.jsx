import { Strong } from "../../../styles/common";
import { Container, Paragraph } from "./styled";

export default function Banner() {
  return (
    <Container>
      <Paragraph>
        저희 국민건강재가복지센터는
        <br />
        시간을 낼 수 없어
        <br />
        도움이 필요하신 분들을 위해
        <br />
        장기 요양 급여를 이용하기 위한
        <br />
        <Strong>신청 절차</Strong>부터&nbsp;
        <Strong>서비스 이용</Strong>까지
        <br />
        <Strong>무료 대행</Strong> 해드리고 있습니다.
      </Paragraph>
    </Container>
  );
}

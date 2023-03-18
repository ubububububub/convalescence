import { Strong } from "../../../styles/common";
import { Container, ExplanationItem, ExplanationList, Title } from "./styled";

export default function Condition() {
  return (
    <Container>
      <Title>가족요양 조건</Title>
      <ExplanationList>
        <ExplanationItem>
          <Strong>첫번째,</Strong> 수발하는 분은 자격증 보유
        </ExplanationItem>
        <ExplanationItem>
          <Strong>두번째,</Strong> 보호받는 분은 노인장기요양등급 보유
        </ExplanationItem>
        <ExplanationItem>
          <Strong>세번째,</Strong> 가족 관계
        </ExplanationItem>
        <ExplanationItem>
          <Strong>네번째,</Strong> 타 직업 근무 월 160시간 미만
        </ExplanationItem>
      </ExplanationList>
    </Container>
  );
}

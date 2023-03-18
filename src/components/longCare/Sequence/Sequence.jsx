import { Strong } from "../../../styles/common";
import { Container, ExplanationItem, ExplanationList, Title } from "./styled";

export default function Sequence() {
  return (
    <Container>
      <Title>장기요양 인정 및 서비스 이용절차</Title>
      <ExplanationList>
        <ExplanationItem>
          <Strong>첫번째,</Strong> 인정신청(방문, 우편, 팩스, 인터넷)
        </ExplanationItem>
        <ExplanationItem>
          <Strong>두번째,</Strong> 인정조사(공단 직원의 방문)
        </ExplanationItem>
        <ExplanationItem>
          <Strong>세번째,</Strong> 의사소견서 제출(병원 방문 후 소견서 공단
          제출)
        </ExplanationItem>
        <ExplanationItem>
          <Strong>네번째,</Strong> 등급판정(의사, 한의사, 사회복지사 등)
        </ExplanationItem>
        <ExplanationItem>
          <Strong>다섯번째,</Strong> 결과 통보(인정서, 표준장기요양이용계획서,
          복지용 구급여확인서 제공)
        </ExplanationItem>
        <ExplanationItem>
          <Strong>여섯번째,</Strong> 이용상담(서비스 이용 관련 상담)
        </ExplanationItem>
      </ExplanationList>
    </Container>
  );
}

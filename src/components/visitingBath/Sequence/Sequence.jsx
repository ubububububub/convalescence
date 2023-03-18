import { Strong } from "../../../styles/common";
import { Container, ExplanationItem, ExplanationList, Title } from "./styled";

export default function Sequence() {
  return (
    <Container>
      <Title>서비스 절차</Title>
      <ExplanationList>
        <ExplanationItem>
          <Strong>첫번째,</Strong> 목욕 전 신체 상태를 확인 합니다.
        </ExplanationItem>
        <ExplanationItem>
          <Strong>두번째,</Strong> 목욕물 온도는 개인차가 있으므로 욕조에
          들어가기 전에 대상자 팔로 물 온도를 확인시 켜 줍니다.
        </ExplanationItem>
        <ExplanationItem>
          <Strong>세번째,</Strong> 피로를 느낄 수 있으므로 대상자의 표정과
          움직임을 관찰하고, 욕창 등 상처가 있는 경우 환부를 보호하면서 서비스를
          제공합니다.
        </ExplanationItem>
        <ExplanationItem>
          <Strong>네번째,</Strong> 목욕 후 환부를 깨끗이 건조 후 필요한 소독
          이나 처치 후에 옷을 입힙니다.
        </ExplanationItem>
      </ExplanationList>
    </Container>
  );
}

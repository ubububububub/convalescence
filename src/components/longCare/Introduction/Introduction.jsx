import { Container, Paragraph, TempImg, Title } from "./styled";

export default function Introduction() {
  return (
    <Container>
      <Title>장기요양서비스란?</Title>
      <Paragraph>
        65세 이상 또는 65세 미만으로 고령이나 노인성 질환을 앓는 분들로 거동이
        불편하여 혼자서 일상생활의 수행이 어려운 어르신들을 위해 신체활동 또는
        가사 활동 지원 등의 장기요양급여를 제공하여 노후의 건강증진 및 생활
        안정으로 도모하고 그 가족의 부담을 덜어줌으로써 국민의 삶의 질을
        향상하기 위한 사회 보험제도이며, 어르신 집으로 찾아가 지원하는
        서비스입니다.
      </Paragraph>
      <TempImg />
    </Container>
  );
}

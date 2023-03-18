import { Container, Paragraph, Title } from "./styled";

export default function Target() {
  return (
    <Container>
      <Title>장기요양 급여 서비스 이용대상</Title>
      <Paragraph>
        장기요양급여 대상자는 65세 이상 또는 65세 미만이지만 노인성 질병 치매,
        중풍(뇌혈관성 질환), 파킨슨병 등, 대통령령으로 정하는 질병 등을 가진
        자로 거동이 불편하거나 치매 등으로 인지가 저하 등으로 6개월 이상의 기간
        동안 혼자서 일상생활을 수행하기 어려운 분
      </Paragraph>
    </Container>
  );
}

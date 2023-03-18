import {
  Container,
  ContentItem,
  ContentList,
  Paragraph,
  SubTitle,
  Title,
} from "./styled";

export default function Application() {
  return (
    <Container>
      <Title>장기요양 인정 등급 신청</Title>
      <ContentList>
        <ContentItem>
          <SubTitle>신청자격</SubTitle>
          <Paragraph>
            장기 요양보험 가입자와 그 피부양자 또는 의료급여수급자 중 65세
            이상의 노인 또는 65세 미만자로서 치매, 뇌혈관성 등 노인성 질병을
            가진 자
          </Paragraph>
        </ContentItem>
        <ContentItem>
          <SubTitle>급여대상</SubTitle>
          <Paragraph>
            65세 이상 노인 또는 치매 등 노인성 질병으로 6개월 이상의 기간 혼자서
            일상생활을 수행하기 어렵다고 인정되는 자(장기 요양등급 1등급~5등급
            뇌혈관성 질환)
          </Paragraph>
        </ContentItem>
      </ContentList>
    </Container>
  );
}

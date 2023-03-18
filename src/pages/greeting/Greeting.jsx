import { Strong } from "../../styles/common";
import { Container, Paragraph, Title } from "./styled";

export default function Greeting() {
  return (
    <Container>
      <Title>인사말</Title>
      <Paragraph>
        안녕하십니까? 국민건강재가복지센터 홈페이지를 방문하여 주셔서
        감사합니다.
      </Paragraph>
      <Paragraph>
        급격한 고령화 시대에 접어들면서 핵가족화로 거동이 불편한 부모님을
        보살핌에 있어 어려움을 겪는 가정이 많아졌습니다.
      </Paragraph>
      <Paragraph>
        센터에서는 치매, 뇌졸중, 파킨슨, 뇌혈관 질환 등 노인성 질환으로 고생하고
        계시는 어르신들과 그 가족의 걱정을 해결해 드리는 국가에서 지정한 전문
        방문 요양 기관입니다.
      </Paragraph>
      <Paragraph>
        국가 공인 자격증을 취득한 전문 요양보호사 선생님들께서 어르신 댁으로
        방문하여 맞춤형 복지서비스를 제공하고&nbsp;
        <Strong>
          “어르신 모두를 소중한 내 부모님을 모시듯 헌신적인 보살핌과 섬기는
          마음”
        </Strong>
        으로 최고의 서비스로 더 나은 노후 생활을 영위할 수 있도록 노력하고
        있습니다.
      </Paragraph>
      <Paragraph>
        언제나 한결같은 마음으로 어르신들께서 건강하고 편안한 안식처가 될 수
        있도록 센터 전 직원들 모두가 최선을 다하겠습니다. 감사합니다.
      </Paragraph>
      <Paragraph>국민건강재가복지센터 임직원 일동</Paragraph>
    </Container>
  );
}

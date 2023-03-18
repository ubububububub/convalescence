import Explanation from "../Explanation/Explanation";
import { Container, Paragraph, TempImg, Title } from "./styled";

export default function Introduction() {
  return (
    <Container>
      <Title>방문요양서비스란?</Title>
      <Paragraph>
        장기요양보험에 의거하여 등급판정을 받을시 전문교육을 받은 요양보호사가
        어르신댁을 방문하여 하루에 3~4시간 동안 신체활동이나 일상생활에 필요한
        가사활동 등을 제공하는 서비스입니다.
      </Paragraph>
      <TempImg />
      <Explanation
        title="신체 활동 지원"
        texts={[
          "식사 및 복약 도움, 개인 위생 활동(세면 도움)",
          "개인위생관리(세면도움, 구강관리, 머리감기, 손‧발톱정리, 옷갈아입히기, 목욕도움, 식사도움, 몸단장)",
          "체위변경, 이동도움, 일어나 앉기 도움, 배설도움(화장실, 이동변기이용, 기저귀교체)",
          "신체 기능 유지 증진 활동 및 행동 변화 대처",
        ]}
      />
      <Explanation
        title="정서 지원"
        texts={[
          "말벗, 격려 및 위로",
          "의사 소통(어르신 욕구 파악, 책읽기, 편지 대필, 의사 전달 대행, 여가활동)",
          "체위변경, 이동도움, 일어나 앉기 도움, 배설도움(화장실, 이동변기이용, 기저귀교체)",
          "신체 기능 유지 증진 활동 및 행동 변화 대처",
        ]}
      />
      <Explanation
        title="가사 및 일상 생활 지원"
        texts={[
          "가사지원(식사준비, 설거지, 청소 및 환경관리, 세탁, 침구관리, 환경관리)",
          "외출 동행(산책, 장보기, 일상 생활 업무 대행, 병원 동행, 관공서)",
        ]}
      />
      <Explanation
        title="인지 활동 지원(치매 지원 5등급)"
        texts={[
          "인지 자극 활동(회상 훈련, 기억력 향상 활동)",
          "일상 생활 함께 하기(청소 하기, 옷 개기, 요리 하기)",
        ]}
      />
    </Container>
  );
}

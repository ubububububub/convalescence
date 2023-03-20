import { Strong } from "../../styles/common";
import { Conatiner, Paragraph, Title } from "./styled";

export default function NotFound() {
  return (
    <Conatiner>
      <Title>
        <Strong>404</Strong>
      </Title>
      <Paragraph>존재하지 않는 페이지입니다.</Paragraph>
    </Conatiner>
  );
}

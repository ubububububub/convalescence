import { Title, ExplanationItem, ExplanationList, Container } from "./styled";

export default function Explanation({ title, texts }) {
  const mapedTexts = texts.map((text) => (
    <ExplanationItem key={text}>{text}</ExplanationItem>
  ));

  return (
    <Container>
      <Title>{title}</Title>
      <ExplanationList>{mapedTexts}</ExplanationList>
    </Container>
  );
}

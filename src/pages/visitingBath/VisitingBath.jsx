import { Container } from "./styled";
import Introduction from "../../components/visitingBath/Introduction/Introduction";
import Sequence from "../../components/visitingBath/Sequence/Sequence";
import Price from "../../components/visitingBath/Price/Price";

export default function VisitingBath() {
  return (
    <Container>
      <Introduction />
      <Sequence />
      <Price />
    </Container>
  );
}

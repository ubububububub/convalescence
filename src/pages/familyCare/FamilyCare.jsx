import { Container } from "./styled";
import Condition from "../../components/familyCare/Condition/Condition";
import Introduction from "../../components/familyCare/Introduction/Introduction";
import Range from "../../components/familyCare/Range/Range";

export default function FamilyCare() {
  return (
    <Container>
      <Introduction />
      <Condition />
      <Range />
    </Container>
  );
}

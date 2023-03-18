import Application from "../../components/longCare/Application/Application";
import Banner from "../../components/longCare/Banner/Banner";
import Introduction from "../../components/longCare/Introduction/Introduction";
import Limit from "../../components/longCare/Limit/Limit";
import Price from "../../components/longCare/Price/Price";
import Sequence from "../../components/longCare/Sequence/Sequence";
import Standard from "../../components/longCare/Standard/Standard";
import Target from "../../components/longCare/Target/Target";
import VisitPrice from "../../components/longCare/VisitPrice/VisitPrice";
import { Container } from "./styled";

export default function LongCare() {
  return (
    <Container>
      <Introduction />
      <Banner />
      <Target />
      <Application />
      <Sequence />
      <Standard />
      <Price />
      <Limit />
      <VisitPrice />
    </Container>
  );
}

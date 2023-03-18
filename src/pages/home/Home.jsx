import { Container } from "./styled";
import Application from "../../components/main/Application/Application";
import End from "../../components/main/End/End";
import Introduction from "../../components/main/Introduction/Introduction";
import Price from "../../components/main/Price/Price";
import Target from "../../components/main/Target/Target";

export default function Home() {
  return (
    <Container>
      <Introduction />
      <Price />
      <Target />
      <Application />
      <End />
    </Container>
  );
}

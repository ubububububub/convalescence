import Application from "../../components/Application/Application";
import End from "../../components/End/End";
import Introduction from "../../components/Introduction/Introduction";
import Price from "../../components/Price/Price";
import Target from "../../components/Target/Target";

export default function Home() {
  return (
    <>
      <Introduction />
      <Price />
      <Target />
      <Application />
      <End />
    </>
  );
}

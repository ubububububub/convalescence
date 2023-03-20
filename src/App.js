import { Helmet } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import FamilyCare from "./pages/familyCare/FamilyCare";
import Greeting from "./pages/greeting/Greeting";
import Home from "./pages/home/Home";
import LongCare from "./pages/longCare/LongCare";
import NotFound from "./pages/NotFound/NotFound";
import VisitingBath from "./pages/visitingBath/VisitingBath";
import VisitingCare from "./pages/visitingCare/VisitingCare";

function App() {
  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="https://res.cloudinary.com/dhfkiaac8/image/upload/v1679139776/%EA%B5%AD%EB%AF%BC%EA%B1%B4%EA%B0%95%EC%9E%AC%EA%B0%80%EB%B3%B5%EC%A7%80%EC%84%BC%ED%84%B0/favicon/favicon_57x57_ga5umz.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="https://res.cloudinary.com/dhfkiaac8/image/upload/v1679139776/%EA%B5%AD%EB%AF%BC%EA%B1%B4%EA%B0%95%EC%9E%AC%EA%B0%80%EB%B3%B5%EC%A7%80%EC%84%BC%ED%84%B0/favicon/favicon_60x60_jgbrbf.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="https://res.cloudinary.com/dhfkiaac8/image/upload/v1679139776/%EA%B5%AD%EB%AF%BC%EA%B1%B4%EA%B0%95%EC%9E%AC%EA%B0%80%EB%B3%B5%EC%A7%80%EC%84%BC%ED%84%B0/favicon/favicon_72x72_mb8pcc.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="https://res.cloudinary.com/dhfkiaac8/image/upload/v1679139776/%EA%B5%AD%EB%AF%BC%EA%B1%B4%EA%B0%95%EC%9E%AC%EA%B0%80%EB%B3%B5%EC%A7%80%EC%84%BC%ED%84%B0/favicon/favicon_76x76_opfecn.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="https://res.cloudinary.com/dhfkiaac8/image/upload/v1679139777/%EA%B5%AD%EB%AF%BC%EA%B1%B4%EA%B0%95%EC%9E%AC%EA%B0%80%EB%B3%B5%EC%A7%80%EC%84%BC%ED%84%B0/favicon/favicon_114x114_sba5ek.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="https://res.cloudinary.com/dhfkiaac8/image/upload/v1679139777/%EA%B5%AD%EB%AF%BC%EA%B1%B4%EA%B0%95%EC%9E%AC%EA%B0%80%EB%B3%B5%EC%A7%80%EC%84%BC%ED%84%B0/favicon/favicon_120x120_pskgd4.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="https://res.cloudinary.com/dhfkiaac8/image/upload/v1679139777/%EA%B5%AD%EB%AF%BC%EA%B1%B4%EA%B0%95%EC%9E%AC%EA%B0%80%EB%B3%B5%EC%A7%80%EC%84%BC%ED%84%B0/favicon/favicon_144x144_nkj2st.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="https://res.cloudinary.com/dhfkiaac8/image/upload/v1679139776/%EA%B5%AD%EB%AF%BC%EA%B1%B4%EA%B0%95%EC%9E%AC%EA%B0%80%EB%B3%B5%EC%A7%80%EC%84%BC%ED%84%B0/favicon/favicon_152x152_n1anuu.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://res.cloudinary.com/dhfkiaac8/image/upload/v1679139776/%EA%B5%AD%EB%AF%BC%EA%B1%B4%EA%B0%95%EC%9E%AC%EA%B0%80%EB%B3%B5%EC%A7%80%EC%84%BC%ED%84%B0/favicon/favicon_180x180_skbhr8.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="https://res.cloudinary.com/dhfkiaac8/image/upload/v1679139776/%EA%B5%AD%EB%AF%BC%EA%B1%B4%EA%B0%95%EC%9E%AC%EA%B0%80%EB%B3%B5%EC%A7%80%EC%84%BC%ED%84%B0/favicon/favicon_192x192_oubz6x.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://res.cloudinary.com/dhfkiaac8/image/upload/v1679139550/%EA%B5%AD%EB%AF%BC%EA%B1%B4%EA%B0%95%EC%9E%AC%EA%B0%80%EB%B3%B5%EC%A7%80%EC%84%BC%ED%84%B0/favicon/favicon_32x32_vpv74e.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="https://res.cloudinary.com/dhfkiaac8/image/upload/v1679139777/%EA%B5%AD%EB%AF%BC%EA%B1%B4%EA%B0%95%EC%9E%AC%EA%B0%80%EB%B3%B5%EC%A7%80%EC%84%BC%ED%84%B0/favicon/favicon_96x96_ce8cpv.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://res.cloudinary.com/dhfkiaac8/image/upload/v1679139777/%EA%B5%AD%EB%AF%BC%EA%B1%B4%EA%B0%95%EC%9E%AC%EA%B0%80%EB%B3%B5%EC%A7%80%EC%84%BC%ED%84%B0/favicon/favicon_16x16_n2lzbf.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="https://res.cloudinary.com/dhfkiaac8/image/upload/v1679139777/%EA%B5%AD%EB%AF%BC%EA%B1%B4%EA%B0%95%EC%9E%AC%EA%B0%80%EB%B3%B5%EC%A7%80%EC%84%BC%ED%84%B0/favicon/favicon_144x144_nkj2st.png"
        />
        <meta name="theme-color" content="#ffffff" />
        {/* <!-- 필수는 og 태그 --> */}
        <meta property="og:site_name" content="국민건강재가복지센터" />
        <meta property="og:locale" content="ko" />

        {/* <!-- 필수는 아니지만, 추천하는 og 태그 --> */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* <!-- 네이버, 카카오 --> */}
        <meta property="og:title" content="국민건강재가복지센터" />
        <meta property="og:url" content="웹페이지 URL" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dhfkiaac8/image/upload/v1679141658/%EA%B5%AD%EB%AF%BC%EA%B1%B4%EA%B0%95%EC%9E%AC%EA%B0%80%EB%B3%B5%EC%A7%80%EC%84%BC%ED%84%B0/favicon/opengraph_ydizfv.png"
        />
        <meta
          property="og:description"
          content="건강한 노후, 행복한 동행 국민건강재가복지센터"
        />

        {/* <!-- 트위터 --> */}
        <meta
          name="twitter:card"
          content="https://res.cloudinary.com/dhfkiaac8/image/upload/v1679141658/%EA%B5%AD%EB%AF%BC%EA%B1%B4%EA%B0%95%EC%9E%AC%EA%B0%80%EB%B3%B5%EC%A7%80%EC%84%BC%ED%84%B0/favicon/opengraph_ydizfv.png"
        />
        <meta name="twitter:title" content="국민건강재가복지센터" />
        <meta
          name="twitter:description"
          content="건강한 노후, 행복한 동행 국민건강재가복지센터"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dhfkiaac8/image/upload/v1679141658/%EA%B5%AD%EB%AF%BC%EA%B1%B4%EA%B0%95%EC%9E%AC%EA%B0%80%EB%B3%B5%EC%A7%80%EC%84%BC%ED%84%B0/favicon/opengraph_ydizfv.png"
        />

        <meta
          name="description"
          content="나의 사랑하는 부모님 걱정되시죠? 이제는 걱정하지 마시고 국민건강재가복지센터에서 가장 든든한 보호자가 되어 가족의 고민을 덜어드리겠습니다."
        />
      </Helmet>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/greeting" element={<Greeting />} />
          <Route path="/longcare" element={<LongCare />} />
          <Route path="/familycare" element={<FamilyCare />} />
          <Route path="/visitingcare" element={<VisitingCare />} />
          <Route path="/visitingbath" element={<VisitingBath />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

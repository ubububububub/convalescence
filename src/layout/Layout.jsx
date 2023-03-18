import { useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { CustomDrawer } from "../components/ui/CustomDrawer";
import {
  Wrapper,
  Header,
  LayoutContainer,
  Title,
  Main,
  Footer,
  FooterTitle,
  FooterButton,
} from "./styled";
import MenuIcon from "@mui/icons-material/Menu";

export default function Layout() {
  const [isMenuShowing, setIsMenuShowing] = useState(false);
  const drawerContainerRef = useRef();

  const handleDrawerClick = () => {
    setIsMenuShowing((prev) => !prev);
  };

  return (
    <Wrapper>
      <LayoutContainer ref={drawerContainerRef}>
        <Header>
          <MenuIcon
            sx={{ position: "absolute", left: "8px", cursor: "pointer" }}
            fontSize="large"
            onClick={handleDrawerClick}
          />
          <img
            alt="logo"
            src="https://res.cloudinary.com/dhfkiaac8/image/upload/v1679139940/%EA%B5%AD%EB%AF%BC%EA%B1%B4%EA%B0%95%EC%9E%AC%EA%B0%80%EB%B3%B5%EC%A7%80%EC%84%BC%ED%84%B0/favicon/logo_f96on8.svg"
          />
          <Title>국민건강재가복지센터</Title>
        </Header>
        <CustomDrawer
          ref={drawerContainerRef}
          isMenuShowing={isMenuShowing}
          onDrawerClick={handleDrawerClick}
        />
        <Main>
          <Outlet />
        </Main>
        <Footer>
          <FooterTitle>장기요양등급신청 접수</FooterTitle>
          <FooterButton>접수하기</FooterButton>
        </Footer>
      </LayoutContainer>
    </Wrapper>
  );
}

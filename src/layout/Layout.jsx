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

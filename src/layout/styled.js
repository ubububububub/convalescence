import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const LayoutContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0px;
  }

  @media (min-width: 420px) {
    margin: 0 auto;
    width: 393px;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background: #d1d6db;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
      background-color: rgba(33, 122, 244, 0.1);
    }
  }

  @media (min-width: 1024px) {
    margin: 0 0 0 calc(50vw - 1px);
  }
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 8px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dcdcdc;
  background-color: #fff;

  @media (min-width: 420px) {
    border-left: 1px solid #dcdcdc;
    border-right: 1px solid #dcdcdc;
    width: 393px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  line-height: 19px;
  text-align: center;
`;

export const Main = styled.main`
  padding: 24px;
  width: 100%;

  @media (min-width: 420px) {
    border-left: 1px solid #dcdcdc;
    border-right: 1px solid #dcdcdc;
    width: 393px;
  }
`;

export const Footer = styled.footer`
  border-top: 1px solid #dcdcdc;
  padding-top: 16px;
  padding-bottom: 24px;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 420px) {
    border-left: 1px solid #dcdcdc;
    border-right: 1px solid #dcdcdc;
    width: 393px;
  }
`;

export const FooterTitle = styled.h3`
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  text-align: center;
`;

export const FooterButton = styled.button`
  margin-top: 22px;
  padding: 12px 32px;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
  background-color: #3182f6;
  border-radius: 7px;
  cursor: pointer;

  &:hover {
    background-color: #1b64da;
  }
`;

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    position: fixed;
    z-index: 0;
    width: 100%;
    max-width: 512px;
    height: 100%;
    left: calc(50vw - 512px);
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 24%;
  width: 100%;
`;

export const Paragraph = styled.p`
  color: #191f28;
  font-weight: 700;
  font-size: 40px;
  line-height: 56px;
`;

export const Title = styled.h2`
  color: #191f28;
  font-weight: 700;
  font-size: 40px;
  line-height: 56px;
`;

export const Tel = styled.p`
  margin-top: 128px;
  color: #191f28;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
`;

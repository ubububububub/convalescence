import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 120px;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
`;

export const Content = styled.div`
  margin-top: 10px;

  & + & {
    margin-top: 24px;
  }
`;

export const SubTitle = styled.h4`
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
`;

export const SubParagraph = styled.p`
  font-weight: 700;
  margin-top: 10px;
  font-size: 14px;
  line-height: 22px;
  color: #6b7684;
  word-break: keep-all;
`;

import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 32px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
`;

export const Paragraph = styled.p`
  margin-top: 12px;
  font-weight: 700;
  color: #6b7684;
  word-break: keep-all;
`;

export const ExplanationList = styled.ol`
  margin-top: 12px;
`;

export const ExplanationItem = styled.li`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  word-break: keep-all;

  & + & {
    margin-top: 16px;
  }
`;

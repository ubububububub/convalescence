import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 56px;
`;

export const Title = styled.h2`
  border-bottom: 1px solid #d9d9d9;
  font-weight: 700;
  font-size: 22px;
  line-height: 40px;
`;

export const ExplanationList = styled.ul`
  margin-top: 12px;
`;

export const ExplanationItem = styled.li`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #6b7684;
  word-break: keep-all;

  & + & {
    margin-top: 8px;
  }
`;

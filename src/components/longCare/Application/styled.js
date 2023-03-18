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

export const ContentList = styled.ul`
  margin-top: 8px;
`;

export const ContentItem = styled.li`
  & + & {
    margin-top: 32px;
  }
`;

export const SubTitle = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #3182f6;
`;

export const Paragraph = styled.p`
  margin-top: 8px;
  font-weight: 700;
  word-break: keep-all;
  font-size: 16px;
  line-height: 22px;
`;

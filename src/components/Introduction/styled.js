import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 96px;
  text-align: center;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 40px;
  word-break: keep-all;
`;

export const Paragraph = styled.p`
  margin-top: 40px;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  word-break: keep-all;
`;

export const Button = styled.button`
  margin-top: 40px;
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

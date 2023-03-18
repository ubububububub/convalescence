import styled from "@emotion/styled";
import { TableCell, tableCellClasses, TableContainer } from "@mui/material";

export const Container = styled.div`
  margin-top: 56px;
`;

export const Title = styled.h2`
  border-bottom: 1px solid #d9d9d9;
  font-weight: 700;
  font-size: 22px;
  line-height: 40px;
`;

export const Paragraph = styled.p`
  margin-top: 12px;
  font-weight: 700;
  color: #6b7684;
  word-break: keep-all;
  line-height: 22px;
`;

export const StyledTableCotnainer = styled(TableContainer)`
  margin-top: 12px;
  border-radius: 5px;
  border: 1px solid #6b7684;
`;

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#e5e5e5",
    fontWeight: 700,
    borderBottom: "1px solid #6b7684",
  },
}));

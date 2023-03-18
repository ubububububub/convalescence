import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  Container,
  StyledTableCell,
  StyledTableCotnainer,
  Title,
} from "./styled";

export default function Price() {
  return (
    <Container>
      <Title>비용 안내</Title>
      <StyledTableCotnainer>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">대상</StyledTableCell>
              <StyledTableCell align="center">비용</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">기초생활수급자</TableCell>
              <TableCell align="center">정부지원금 100%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">차상위계층</TableCell>
              <TableCell align="center">
                정부지원금 91% ~ 94%(본인부담금 6% ~ 9%)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">일반</TableCell>
              <TableCell align="center">
                정부지원금 85%(본인부담금 15%)
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </StyledTableCotnainer>
    </Container>
  );
}

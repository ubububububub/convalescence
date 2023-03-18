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
  TitleExplanation,
} from "./styled";

export default function Limit() {
  return (
    <Container>
      <Title>
        재가급여 월 한도액
        <TitleExplanation>(2023. 1. 1 수가기준)</TitleExplanation>
      </Title>
      <StyledTableCotnainer>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">등급</StyledTableCell>
              <StyledTableCell align="center">수가(월)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">1등급</TableCell>
              <TableCell align="center">
                {parseInt(1885000).toLocaleString()}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">2등급</TableCell>
              <TableCell align="center">
                {parseInt(1690000).toLocaleString()}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">3등급</TableCell>
              <TableCell align="center">
                {parseInt(1417200).toLocaleString()}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">4등급</TableCell>
              <TableCell align="center">
                {parseInt(1306200).toLocaleString()}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">5등급</TableCell>
              <TableCell align="center">
                {parseInt(1121100).toLocaleString()}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">인지지원등급</TableCell>
              <TableCell align="center">
                {parseInt(624600).toLocaleString()}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </StyledTableCotnainer>
    </Container>
  );
}

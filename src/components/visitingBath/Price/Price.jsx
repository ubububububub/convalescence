import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  Container,
  Paragraph,
  Title,
  StyledTableCell,
  StyledTableCotnainer,
} from "./styled";

export default function Price() {
  return (
    <Container>
      <Title>비용</Title>
      <StyledTableCotnainer>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">대상</StyledTableCell>
              <StyledTableCell align="center">본인부담금</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">일반(15%)</TableCell>
              <TableCell align="center">{`${parseInt(
                6938
              ).toLocaleString()}원`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">감경대상자(9%)</TableCell>
              <TableCell align="center">{`${parseInt(
                4163
              ).toLocaleString()}원`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">감경대상자(6%)</TableCell>
              <TableCell align="center">{`${parseInt(
                2775
              ).toLocaleString()}원`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">기초수급자(0%)</TableCell>
              <TableCell align="center">{`${parseInt(
                0
              ).toLocaleString()}원`}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </StyledTableCotnainer>
      <Paragraph>
        방문 목욕 급여 비용은 주 1회 산정하며 2인 이상의 요양보호사가 60분 이상
        서비스를 제공한 경우에 산정하고, 소요 시간이 40분 이상 60분 미만인
        경우에는 해당 급여비용의 80%를 산정 합니다.
      </Paragraph>
    </Container>
  );
}

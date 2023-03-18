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

export default function VisitPrice() {
  return (
    <Container>
      <Title>
        가정방문급여 비용 안내
        <TitleExplanation>
          (2023. 1. 1 수가기준, 방문요양 1회당 이용시간별 급여비용 정보)
        </TitleExplanation>
      </Title>
      <StyledTableCotnainer
        sx={{
          "&::-webkit-scrollbar": {
            height: 4,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#d1d6db",
            borderRadius: 10,
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "rgba(33, 122, 244, 0.1)",
          },
        }}
      >
        <Table aria-label="customized table" sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell
                align="center"
                rowSpan={2}
                sx={{ width: 100, borderRight: 1 }}
              >
                제공시간
              </StyledTableCell>
              <StyledTableCell
                align="center"
                rowSpan={2}
                sx={{ width: 100, borderRight: 1 }}
              >
                금액(원)
              </StyledTableCell>
              <StyledTableCell align="center" colSpan={4} sx={{ border: 0 }}>
                본인부담금
              </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell align="center">일반(15%)</StyledTableCell>
              <StyledTableCell align="center">감경대상자(9%)</StyledTableCell>
              <StyledTableCell align="center">감경대상자(6%)</StyledTableCell>
              <StyledTableCell align="center">기초수급자(0%)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">30분</TableCell>
              <TableCell align="center">
                {parseInt(16190).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(2428).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(1457).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(971).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(0).toLocaleString()}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">60분</TableCell>
              <TableCell align="center">
                {parseInt(23480).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(3522).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(2113).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(1408).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(0).toLocaleString()}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">90분</TableCell>
              <TableCell align="center">
                {parseInt(31650).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(4747).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(2848).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(1899).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(0).toLocaleString()}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">120분</TableCell>
              <TableCell align="center">
                {parseInt(40280).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(6042).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(3625).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(2416).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(0).toLocaleString()}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">150분</TableCell>
              <TableCell align="center">
                {parseInt(46970).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(7045).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(4227).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(2818).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(0).toLocaleString()}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">180분</TableCell>
              <TableCell align="center">
                {parseInt(52880).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(7932).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(4759).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(3172).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(0).toLocaleString()}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">210분</TableCell>
              <TableCell align="center">
                {parseInt(58930).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(8839).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(5303).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(3535).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(0).toLocaleString()}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">240분</TableCell>
              <TableCell align="center">
                {parseInt(65000).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(9750).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(5850).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(3900).toLocaleString()}
              </TableCell>
              <TableCell align="center">
                {parseInt(0).toLocaleString()}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </StyledTableCotnainer>
    </Container>
  );
}

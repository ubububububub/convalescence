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
  StyledTableCell,
  StyledTableCotnainer,
  Title,
} from "./styled";

export default function Standard() {
  return (
    <Container>
      <Title>등급 판정 기준</Title>
      <Paragraph>
        등급판정은 심신의 기능 상태에 따라 일상생활에서 도움이 얼마나 필요한가?
        을 지표화하여 장기 요양 인정점수를 기준으로 하고 있습니다.
      </Paragraph>
      <Paragraph>
        장기 요양 인정점수를 기준으로 6개 등급으로 등급 판정을 합니다.
      </Paragraph>
      <StyledTableCotnainer>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">장기요양등급</StyledTableCell>
              <StyledTableCell align="center" sx={{ width: "220px" }}>
                심신의 기능 상태
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">1등급</TableCell>
              <TableCell align="center">
                심신의 기능상태 장애로 일상생활에서 전적으로 다른 사람의도움이
                필요한 자로서장기요양인정 점수가 95점 이상인자
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">2등급</TableCell>
              <TableCell align="center">
                심신의 기능상태 장애로 일상생활에서 상당 부분 다른 사람의
                도움이필요한 자로서 장기요양인정 점수가 75점 이상 95점 미만인 자
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">3등급</TableCell>
              <TableCell align="center">
                심신의 기능상태 장애로 일상생활에서 부분적으로 다른 사람의도움이
                필요한 자로서 장기요양인정 점수가 60점 미만인 자
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">4등급</TableCell>
              <TableCell align="center">
                심신의 기능상태 장애로 일상생활에서 일정 부분 다른 사람의도움이
                필요한 자로서 장기요양인정 점수가 51점 이상 60점 미만인 자
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">5등급</TableCell>
              <TableCell align="center">
                치매환자로서 (노인장기요양보험법 시행령 제 2조에 따른 노인성
                질병으로 한정)장기요양인정 점수가 45점 이상 51점 미만인 자
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">인지지원등급</TableCell>
              <TableCell align="center">
                치매환자로서(노인장기요양보험법 시행령 제2조에 따른 노인성
                질병으로 한정)장기요양인정 점수가 45점 미만인 자
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </StyledTableCotnainer>
    </Container>
  );
}

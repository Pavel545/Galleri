import { useThemeContext } from "../../context/theme";
import * as S from "./style";

export function Pagination({setStep, currentPage, pagesAmount }) {

  const arr = [];
  for (let i = 0; i < pagesAmount; i++) {
    arr[i] = i + 1;
  }
  const { theme } = useThemeContext();

  return (
    <S.Box>
      <S.Button style={{ background: theme.background }} globalPoz={currentPage} onClick={()=>setStep(arr[0])} poz={"first"}>{"<<"}</S.Button>
      <S.Button style={{ background: theme.background }} globalPoz={currentPage} onClick={()=>setStep(currentPage-1)}>{"<"}</S.Button>
      {arr.map((id) => {
        if (id === currentPage) {
          return <S.Button style={{ background: theme.background }} key={id} poz="active">{id}</S.Button>;
        }
        return <S.Button style={{ background: theme.background }} key={id}>{id}</S.Button>;
      })}
      <S.Button style={{ background: theme.background }} Li={currentPage} globalPoz={arr.length}  onClick={()=>setStep(currentPage+1)}>{">"}</S.Button>
      <S.Button style={{ background: theme.background }} Li={currentPage} globalPoz={arr.length}  onClick={()=>setStep(pagesAmount)} poz={"end"}>{">>"}</S.Button>
    </S.Box>
  );
}

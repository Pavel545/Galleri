import * as S from "./style";

export function Sorting(params) {
  return (
    <S.Box>
      <S.Input type="text" placeholder="Name" />
      <S.Select>
        <S.Option value="">Author</S.Option>
      </S.Select>
      <S.Select>
        <S.Option value="">Location</S.Option>
      </S.Select>
      <S.Select>
        <S.Option value="">Created</S.Option>
      </S.Select>
    </S.Box>
  );
}

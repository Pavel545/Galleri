import * as S from "./style";

export function Picture({ todo, author, loc }) {
  return (
    <S.Box img={todo.imageUrl}>
      <S.Text>
        <S.Name>{todo.name}</S.Name>
        <S.Text_op>
          <S.Str>
            <S.Key>Author:</S.Key>
            <S.Content>{author.name}</S.Content>
          </S.Str>
          <S.Str>
            <S.Key>Created:</S.Key>
            <S.Content>{todo.created}</S.Content>
          </S.Str>
          <S.Str>
            <S.Key>Location:</S.Key>
            <S.Content>{loc.location}</S.Content>
          </S.Str>
        </S.Text_op>
      </S.Text>
    </S.Box>
  );
}

import * as S from "./style";

export function Picture({todo}) {
    return(
        <S.Box img ={todo.imageUrl} >
            <S.Name>{todo.name}</S.Name>
        </S.Box>
    )
}
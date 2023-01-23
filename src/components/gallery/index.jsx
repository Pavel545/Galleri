import { useGetPagesQuery } from "../../servise/todo";
import { Picture } from "../Picture";
import * as S from "./style";
export function Gallery({ author, loc, currentPage }) {
  const { data, error, isLoading } = useGetPagesQuery({
    pages: currentPage,
    limit: 12,
  });

  const none = () => {};
  console.log(data);

  const a1 = (todo,aut)=>{
    let le = 'd'
    if(loc){
      loc.forEach((loca)=>
      {if(todo.locationId===loca.id){ 
       le=loca
      }})
    }
    return<Picture key={todo.id} todo={todo}author={aut} loc={le} />
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <S.Box>
    
    {data.map((todo) =>
      author.map((aut) =>
      (todo.authorId===aut.id)? 
      a1(todo,aut):none())


    )}
  </S.Box>
  );
}

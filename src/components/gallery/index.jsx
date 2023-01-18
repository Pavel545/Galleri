
import { useDispatch, useSelector } from "react-redux";
import { allPictures } from "../../store/actions/thunk/todo";
import { todosSelector } from "../../store/selectors/todo";
import { Picture } from "../Picture";
import * as S from "./style";
export function Gallery({author,loc,currentPage}) {
  
  const data =useSelector(todosSelector)
  const dispatch= useDispatch()
  dispatch(allPictures({
    pages:currentPage, limit:12,
  }))

 
  const none = ()=>{}
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

  return (
    <S.Box>
      {data.map((todo) =>
      <Picture key={todo.id} todo={todo}author={todo.authorId} loc={todo.locationId} />
        
        
      )}
    </S.Box>
  );
}

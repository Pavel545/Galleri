import { useState } from "react";
import { Gallery } from "../../components/gallery/index.jsx";
import { Pagination } from "../../components/Pagi/index.jsx";
import { Sorting } from "../../components/sortingGallery";
import { useThemeContext } from "../../context/theme.jsx";
import { useDispatch, useSelector } from "react-redux";

import * as S from "./style";
import { todosSelector } from "../../store/selectors/todo.js";
import { allPictures } from "../../store/actions/thunk/todo.js";

export function MainGallery() {
  const data =useSelector(todosSelector)
  const dispatch= useDispatch()
  dispatch(allPictures())


  const [isTheme, setIsTheme] = useState(false);
  const [step, setStep] = useState(1);

  const [author, setAuthor] = useState();
  const [loc, setLoc] = useState();

  const toggleIsTheme = () => {
    setIsTheme(!isTheme);
    toggleTheme();
    console.log("tema smen");
  };
  const { toggleTheme, theme } = useThemeContext();

  const noteOnPages = 12;


  const Pages = sliceIntoChunks(data, noteOnPages);
  console.log(data);
  return (
    <S.Main style={{ background: theme.background, color: theme.color }}>
      <S.Header style={{ background: theme.background }}>
        <img  src={process.env.PUBLIC_URL + "/logo.png"} />
        {isTheme ? (
          <img
            onClick={toggleIsTheme}
            src={process.env.PUBLIC_URL + "/VectorBlack.png"}
          />
        ) : (
          <img
            onClick={toggleIsTheme}
            src={process.env.PUBLIC_URL + "/VectorWhite.png"}
          />
        )}
      </S.Header>
      <Sorting setLoc={setLoc} setAuthor={setAuthor} />
      <Gallery loc={loc} currentPage={step} author={author} />
      <Pagination
        setStep={setStep}
        currentPage={step}
        pagesAmount={Pages.length}
      />
    </S.Main>
  );
}
function sliceIntoChunks(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

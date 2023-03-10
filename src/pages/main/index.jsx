import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Gallery } from "../../components/gallery/index.jsx";
import { Pagination } from "../../components/Pagination/index.jsx";
import { Sorting } from "../../components/sortingGallery";
import { useThemeContext } from "../../context/theme.jsx";

import * as S from "./style";
import { todosSelector } from "../../store/selectors/todo.js";
import {
  allPictures,
  dataFilter,
  filterAuthor,
  filterLocations,
} from "../../store/actions/thunk/todo.js";
import { useEffect } from "react";
export function MainGallery() {
  const [locationFilter, setLocationFilter] = useState();
  const [authorFilter, setAuthorFilter] = useState();
  const data = useSelector(todosSelector);
  const dispatch = useDispatch();
  let a = 0;
  useEffect(() => {
    if (a === 0) {
      dispatch(allPictures());
      a++;
    }
  });

  const [isTheme, setIsTheme] = useState(false);
  const [step, setStep] = useState(1);
  const [filter, setFilter] = useState();
  useEffect(() => {
    console.log(filter);
    if (filter) {
      dispatch(
        dataFilter({
          filter: filter,
        })
      );
    }
  }, [dispatch,filter]);
  const toggleIsTheme = () => {
    setIsTheme(!isTheme);
    toggleTheme();
    console.log("tema smen");
  };
  const { toggleTheme, theme } = useThemeContext();

  const noteOnPages = 12;
  const Pages = sliceIntoChunks(data.all, noteOnPages);
  useEffect(() => {
    if (authorFilter) {
      dispatch(
        filterAuthor({
          filter: authorFilter,
        })
      );
    }
  }, [dispatch,authorFilter]);
  useEffect(() => {
    if (locationFilter) {
      dispatch(
        filterLocations({
          filter: locationFilter,
        })
      );
    }
  }, [dispatch,locationFilter]);
  return (
    <S.Main style={{ background: theme.background, color: theme.color }}>
      <S.Header style={{ background: theme.background }}>
        <img src={process.env.PUBLIC_URL + "/logo.png"} />
        {!isTheme ? (
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
      <Sorting
        setAuthorFilter={setAuthorFilter}
        setLocationFilter={setLocationFilter}
        setFilter={setFilter}
      />
      <Gallery  currentPage={step} />
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

import { useState } from "react";
import { Gallery } from "../../components/gallery/index.jsx";
import { Pagination } from "../../components/Pagi/index.jsx";
import { Sorting } from "../../components/sortingGallery";
import * as S from './style'

export function MainGallery() {
  const  [topic, setTopic ] = useState(true);
  const  [step, setStep ] = useState(1);
  
  return (
    <S.Main >
      <S.Header>
        <img src={process.env.PUBLIC_URL + "/logo.png"} />
        {!topic ? (
          <img
            onClick={()=> setTopic(!topic)}
            src={process.env.PUBLIC_URL + "/VectorBlack.png"}
          />
        ) : (
          <img
            onClick={()=>setTopic(!topic)}
            src={process.env.PUBLIC_URL + "/VectorWhite.png"}
          />
        )}
      </S.Header>
      <Sorting/>
      <Gallery currentPage={1}/>
      <Pagination setStep={setStep} currentPage={step} pagesAmount={3}/>
    </S.Main>
  );
}

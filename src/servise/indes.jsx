import { useGetAllPicturesQuery, useGetPagesQuery } from "./todo";

export function useAllPictures() {
  const { data, error, isLoading } = useGetAllPicturesQuery();
  if (isLoading) {
    return console.log("load");;
  }

  if (error) {
    return console.log(error);;
  }
  return data;
    
}
export function Pages({currentPage, set}) {
    const { data, error, isLoading } = useGetPagesQuery({pages:currentPage, limit:12});

    
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }
    if(data){
        console.log(data);
        set(data)
        return;
    }
      
  }
import { useGetLocationsQuery } from "../../services/todo";
import { Select } from "../sortingGallery/style";

export function Location(params) {
  const { data, error, isLoading } = useGetLocationsQuery();

  if (isLoading) {
    return console.log("Loading Location");
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  params.setLoc(data)
  return (
    <Select>
      <option value="Location">Location</option>
      {data.map((todo) => (
        <option value={todo.location} key={todo.id}>
          {todo.location}
        </option>
      ))}
      
    </Select>
  );
}

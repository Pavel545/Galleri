import axios from "axios";
const BASE_URL = "https://6376707e81a568fc25fed4bf.mockapi.io/Cart";
export const createCart = (title) => async (dispatch) => {
  dispatch(addTodoStarted());

  try {
    const { data } = await axios.post(BASE_URL, {
      title,
    });

    dispatch(addTodoSuccess(data));
  } catch (error) {
    dispatch(addTodoFailure(error));
  }
};
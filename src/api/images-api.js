import axios from "axios";

export const getImagesApi = async (query, page) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=JsSmgy-EoRzlMwncMO-pVMbnUr4PMr_mVBmYlDxBbMY&query=${query}&page=${page}`
  );
  return data;
};

import axios from "axios";

export const getImagesApi = async (query) => {
  const {
    data: { results },
  } = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=JsSmgy-EoRzlMwncMO-pVMbnUr4PMr_mVBmYlDxBbMY&query=${query}`
  );
  return results;
};

import { fetchAPI } from "./api";

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  if (action.type === "DATE_CHANGE") {
    return fetchAPI(action.payload);
  }
  return state;
};

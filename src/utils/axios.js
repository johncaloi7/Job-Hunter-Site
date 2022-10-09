import axios from "axios";
import { clearStore } from "../features/user/userSlice";

const customFetch = axios.create({
  baseURL: process.env.REACT_APP_API_LINK,
});

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearStore());
    return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
  }
  return thunkAPI.rejectWithValue(error.response.data.msg);
};

export default customFetch;

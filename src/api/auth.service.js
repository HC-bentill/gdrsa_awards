import { dispatch } from "./api.service";
import jwtService from "./jwt.service";

const base = "/auth";


export const login = data => dispatch(data, `${base}/login`);
export const logout = () => {
  jwtService.destroyItem("token");
  jwtService.destroyItem("user");
};

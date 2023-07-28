import { useSelector } from "react-redux";
import type { RootState } from "../index";
export const useAuth = () => useSelector((state: RootState) => state.auth.user);

import { AppDispatch } from "general";
import { useDispatch } from "react-redux";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

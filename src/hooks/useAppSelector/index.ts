import { useSelector } from "react-redux";
import { RootState } from "redux/types/rootTypes";

export const useAppSelector = useSelector.withTypes<RootState>();

import { reducerWithInitialState } from "typescript-fsa-reducers";
import { sidebarState } from "../states/sidebarState";

export const sidebarReducer = reducerWithInitialState(sidebarState);

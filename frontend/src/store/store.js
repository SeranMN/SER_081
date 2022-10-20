import { configureStore } from "@reduxjs/toolkit";
import filterEventReducer from "./reducers/filterEventReducer";
import containerReducer from "./reducers/containerReducer";
import reportsReducer from "./reducers/reportsReducer";
import filterBoardMembersReducer from "./reducers/filterBoardMembersReducer";

import projectReducer from "./reducers/projectReducer";
export const store = configureStore({
    reducer: {
        filterEvents: filterEventReducer,
        container: containerReducer,
        report: reportsReducer,
        filterBoards: filterBoardMembersReducer,
        project: projectReducer

    }
})
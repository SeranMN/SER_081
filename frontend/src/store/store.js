import { configureStore } from "@reduxjs/toolkit";
import filterEventReducer from "./reducers/filterEventReducer";
import containerReducer from "./reducers/containerReducer";
import reportsReducer from "./reducers/reportsReducer";

export const store = configureStore({
    reducer: {
        filterEvents: filterEventReducer,
        container: containerReducer,
        report: reportsReducer
    }
})
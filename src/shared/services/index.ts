import { configureStore } from "@reduxjs/toolkit";
import api from "./api";
import obterContatoReducer from "./reducers/contatos";
import modifyDialogReducer from "./reducers/dialog";

const store = configureStore({
  reducer: {
    contatos: obterContatoReducer,
    dialog: modifyDialogReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;

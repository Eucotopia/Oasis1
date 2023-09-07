import UsersSlice from "@/app/user/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import Token from "./api/Token";
const store = configureStore({
    reducer: {
        user: UsersSlice,
        token: Token
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

import {configureStore} from '@reduxjs/toolkit'
import {postApi} from "@/app/api/postApi";
import authReducer from '@/features/auth/authSlice'
import {authApi} from "@/app/api/authApi";
// 导入持久化插件
export const store = configureStore({
    reducer: {
        [postApi.reducerPath]: postApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware, authApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
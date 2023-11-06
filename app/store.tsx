import {combineReducers, configureStore,} from '@reduxjs/toolkit'
import {postApi} from "@/app/api/postApi";
import authReducer from '@/features/auth/authSlice'
import {authApi} from "@/app/api/authApi";
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";


// 定义配置信息
const persistConfig = {
    key: "root",
    storage: storage,
    // 如果不想将部分state持久化，可以将其放入黑名单(blacklist)中.黑名单是设置
    blacklist: ['ll']
}
const rootReducer = combineReducers({
    auth: authReducer,
    [postApi.reducerPath]: postApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
})
// 创建持久化的配置persist的信息
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    // reducer: {
    //     [postApi.reducerPath]: postApi.reducer,
    //     [authApi.reducerPath]: authApi.reducer,
    //     auth: authReducer,
    // },
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware).concat(authApi.middleware).concat(thunk)
})

export const persistor = persistStore(store)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
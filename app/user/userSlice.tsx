import api from "@/app/api/request";
import { APIRoutes } from "@/config/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import store, { RootDispatch } from "../store";
import { setToken } from "@/app/api/Token";
// 定义用户接口
interface UserModel {
    username: string,
    password: string,
}
// 定义用户状态
const initialState = {
    users: [] as UserModel[],
    status: 'idle',
    error: null
}
// 定义异步action
export const login = createAsyncThunk(
    'users/login',
    async (user: UserModel) => {
        console.log(user);
        return await api.post(APIRoutes.userLogin, user);
    }
)
export const register = createAsyncThunk(
    'users/register',
    async (user: UserModel) => {
        console.log(user)
        return await api.post(APIRoutes.userRegister, user);
    }
)
const UsersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            // 需要将 token 进行存储
        }).addCase(register.fulfilled, (state, action) => {
            console.log(state);
            // 打印返回结果
            console.log(action.payload);
        }
        )
    }
});
export default UsersSlice.reducer;

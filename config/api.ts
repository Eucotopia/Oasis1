export const APIRoutes = {
    userLogin: 'user/login',
    userRegister: 'user/register',
    getUser: 'api/user',
    getUsers: 'api/users',
    createUser: 'api/user/create',
    updateUser: (userId: string) => `api/user/${userId}/update`,
    deleteUser: (userId: string) => `api/user/${userId}/delete`,
};
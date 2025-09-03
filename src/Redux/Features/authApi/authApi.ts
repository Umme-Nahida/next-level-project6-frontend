import { baseApi } from "@/Redux/baseApi";


const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        register: builder.mutation({
            query: (userInfo) => ({
                url: 'user/register',
                method: "POST",
                data: userInfo
            })
        }),

        login: builder.mutation({
            query: (userInfo) => ({
                url: 'auth/login',
                method: "POST",
                data: userInfo
            })
        }),

        getUser: builder.query({
            query: () => ({
                url: "auth/me",
                method: "GET", 
            }),
            providesTags: ["User"],
        }),
        logOut: builder.mutation({
            query: () => ({
                url: "auth/logout",
                method: "POST"
            }),
            invalidatesTags: ['User'],
        }),
        changePassword: builder.mutation({
            query: (passwordInfo) => ({
                url: "auth/change-password",
                method: "POST",
                data: passwordInfo
            }),
        }),

    }),

})

export const { 
useRegisterMutation, useLoginMutation,
 useGetUserQuery, useLogOutMutation,
useChangePasswordMutation} = authApi
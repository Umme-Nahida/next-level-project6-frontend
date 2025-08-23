import { baseApi } from "@/Redux/baseApi";


const riderApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
     register:builder.mutation({
        query:(userInfo)=>({
            url:'user/register',
            method:"POST",
            data: userInfo
        })
     })
    })
})

export const {useRegisterMutation} = riderApi
import { baseApi } from "@/Redux/baseApi";


const riderApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
     rideRequest:builder.mutation({
        query:(riderInfo)=>({
            url:'rides/request',
            method:"POST",
            data: riderInfo,
             credentials: "include", 
        })
     })
    })
})

export const {useRideRequestMutation} = riderApi
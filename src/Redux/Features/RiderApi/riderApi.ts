import { baseApi } from "@/Redux/baseApi";


const riderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        rideRequest: builder.mutation({
            query: (riderInfo) => ({
                url: 'rides/request',
                method: "POST",
                data: riderInfo,
                credentials: "include",
            })
        }),
        estimate: builder.mutation({
            query: (estimateInfo) => ({
                url: 'rides/estimate',
                method: "POST",
                data: estimateInfo,
                credentials: "include",
            })
        }),
        rideHistory: builder.query({
            query: ({ page = 1, limit = 5, searchTerm = "", status= "all", minFare = "", maxFare = "", startDate, endDate }) => {
                let queryString = `rides/myRides?page=${page}&limit=${limit}`;

                if (searchTerm) queryString += `&searchTerm=${searchTerm}`;
                if (status && status !== "all") queryString += `&status=${status}`;
                if (minFare) queryString += `&minFare=${minFare}`;
                if (maxFare) queryString += `&maxFare=${maxFare}`;
                if (startDate) queryString += `&startDate=${startDate}`;
                if (endDate) queryString += `&endDate=${endDate}`;

                return {
                    url: queryString,
                    method: "GET",
                };
            },
        }),
         rideDetails: builder.query({
            query: ({id}) => ({
                url: `rides/rideDetails/${id}`,
                method: "GET",
                credentials: "include",
            })
        }),

    })
})

export const { useRideRequestMutation, useRideHistoryQuery, useEstimateMutation, useRideDetailsQuery} = riderApi
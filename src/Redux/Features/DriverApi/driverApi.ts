import { baseApi } from "@/Redux/baseApi";



const driverApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        myRideHistory: builder.query({
            query: ({ page = 1, limit = 5, searchTerm = "",  minFare = "", maxFare = "", startDate, endDate }) => {
                let queryString = `drivers/getMyRides?page=${page}&limit=${limit}`;

                if (searchTerm) queryString += `&searchTerm=${searchTerm}`;
                if (minFare) queryString += `&minFare=${minFare}`;
                if (maxFare) queryString += `&maxFare=${maxFare}`;
                if (startDate) queryString += `&startDate=${startDate}`;
                if (endDate) queryString += `&endDate=${endDate}`;

                return {
                    url: queryString,
                    method: "GET",
                };
            },
            providesTags: ['Driver']
        }),

        incomingRequests: builder.query({
            query: ()=>({
                url: `drivers/incomingRequest`,
                method: "GET"
            }),
            providesTags: ['Driver']
        }),

        acceptRide: builder.mutation({
            query: (id)=>({
                url: `drivers/approve/${id}`,
                method: "PATCH"
            }),
            invalidatesTags: ['Driver']
        }),

        manageActiveRide: builder.query({
            query: ()=>({
                url: `drivers/manageRide`,
                method: "GET"
            }),
            providesTags: ['Driver']
        }),
        updateStatus: builder.mutation({
        query: ({id,status})=>({
                url: `drivers/updateStatus/${id}/${status}`,
                method: "PATCH",
            }),
            invalidatesTags: ['Driver']
        }),
        setAvailibity: builder.mutation({
            query: (status)=>({
                url: `drivers/setAvaility`,
                method: "PATCH",
                data: status
            }),
            invalidatesTags: ['Driver']
        }),

    }),

})

export const { useMyRideHistoryQuery,
    useIncomingRequestsQuery,useAcceptRideMutation,
     useManageActiveRideQuery, useUpdateStatusMutation,
     useSetAvailibityMutation } = driverApi;
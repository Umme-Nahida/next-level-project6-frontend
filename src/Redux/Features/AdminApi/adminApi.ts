import { baseApi } from "@/Redux/baseApi";



const adminApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        updateProfile: builder.mutation({
            query: (updateInfo) => ({
                url: 'user/updateProfile',
                method: "PATCH",
                data: updateInfo
            }),
            invalidatesTags: ['Admin']
        }),

        allUsers: builder.query({
            query: ({ searchTerm, isApproved, isActive,role }) => {
                let queryString = `user/all-users`
                if (searchTerm) queryString += `?searchTerm=${searchTerm}`
                if(isApproved) queryString += `${searchTerm ? '&' : '?'}isApproved=${isApproved}`
                if(isActive) queryString += `${searchTerm || isApproved ? '&' : '?'}isActive=${isActive}`
                if(role) queryString += `${searchTerm || isApproved || isActive ? '&' : '?'}role=${role}`

                return {
                    url: queryString,
                    method: "GET"
                }
            },
            providesTags: ['Admin']
        }),


        AllRideOversight: builder.query({
            query: ({ page = 1, limit = 5, searchTerm = "", status = "", minFare = "", maxFare = "", date }) => {
                let queryString = `user/all-rides?page=${page}&limit=${limit}`;

                if (searchTerm) queryString += `&searchTerm=${searchTerm}`;
                if (status) queryString += `&status=${status}`;
                if (minFare) queryString += `&minFare=${minFare}`;
                if (maxFare) queryString += `&maxFare=${maxFare}`;
                if (date) queryString += `&startDate=${date}`;

                return {
                    url: queryString,
                    method: "GET",
                };
            },
            providesTags: ['Admin']
        }),

         blockUser: builder.mutation({
            query: ({id,action}) => ({
                url: `user/block/${id}/${action}`,
                method: "PATCH"
            }),
            invalidatesTags: ['Admin', 'User']
        }),

         unBlockUser: builder.mutation({
            query: ({id,action}) => ({
                url: `user/unblock/${id}/${action}`,
                method: "PATCH"
            }),
             invalidatesTags: ['Admin', 'User']
        }),


         userAnalytics: builder.query({
            query: () => ({
                url: `user/analyticsUser`,
                method: "GET"
            }),
             providesTags: ['Admin', 'User']
        }),


         analyticsRides: builder.query({
            query: () => ({
                url: `user/analyticsRide`,
                method: "GET"
            }),
             providesTags: ['Admin', 'User']
        }),

    }),

})

export const { useUpdateProfileMutation, 
    useAllRideOversightQuery,
    useAllUsersQuery, 
    useBlockUserMutation, 
    useUnBlockUserMutation,
    useUserAnalyticsQuery,
    useAnalyticsRidesQuery} = adminApi;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRepo, ServerResponse } from "../models/models";

export const githubApi = createApi({
    reducerPath: 'githubApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    refetchOnFocus: true,
    endpoints: build => ({
        searchUsers: build.query<IRepo[], string>({
            query: (search: string) => ({
                url: `search/repositories`,
                params: {
                    q: search,
                    per_page: 10
                }
            }),
            transformResponse: (response: ServerResponse<IRepo>) => response.items
        }),
    })
})

export const {
    useSearchUsersQuery
} = githubApi
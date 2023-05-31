'use client'

import { graphqlClient } from "@/clients/api"
import { getCurrentUserQuery } from "@/graphql/query/user"
import { useQuery } from "react-query"

export const useCurrentUser = () => {
    const query = useQuery({
        queryKey: ['current-user'],
        queryFn: () => graphqlClient.request(getCurrentUserQuery)
    })

    return { ...query, user: query.data?.getCurrentUser }
}
import { queryOptions, type UseQueryOptions } from "@tanstack/react-query";
import { getUsers } from "../api";
import type { GetUserOptions } from "../type/types";


export function createUsersQueryOptions<
  TData = GetUserOptions,
  TError = Error
>
(params? : GetUserOptions,options? : Omit<UseQueryOptions<GetUserOptions,TError,TData>, "queryKey"|"queryFn">) {
  return queryOptions({
    ...options,
    queryKey : ["users",params],
    queryFn : () => getUsers(params)
  })
}



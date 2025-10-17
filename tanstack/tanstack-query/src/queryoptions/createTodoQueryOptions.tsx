import { queryOptions } from "@tanstack/react-query";
import { getUsers } from "../api";
import type { GetUserOptions } from "../type/types";


export function createUsersQueryOptions(params? : GetUserOptions) {
  return queryOptions({
    queryKey : ["users",params],
    queryFn : () => getUsers(params)
  })
}



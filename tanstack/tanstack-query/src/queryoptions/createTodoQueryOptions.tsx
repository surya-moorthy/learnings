import { queryOptions } from "@tanstack/react-query";
import { getUsers } from "../api";


export function createUsersQueryOptions() {
  return queryOptions({
    queryKey : ["users"],
    queryFn : getUsers,
    staleTime : 6000,
  })
}


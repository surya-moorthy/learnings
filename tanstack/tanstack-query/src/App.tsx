import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import Card from "./Card"
import { createUsersQueryOptions } from "./queryoptions/createTodoQueryOptions"
import type { UserType } from "./type/types"
import { createUsers } from "./api"

function App() {
  const { data: users } = useQuery(createUsersQueryOptions())

  const queryClient = useQueryClient()

  const {mutate} = useMutation({
    mutationFn : (user : Omit<UserType,"_id">) => createUsers(user),
  })

  const handleCreate = async () => {
    const user = {
      username: `${Math.random().toString(36).substring(2)}`,
      email: `${Math.random().toString(36).substring(2)}@gmail.com`,
      password : "gobwegbw[og"
    }
   mutate(user,{

    // variables are the arguments that we pass in the mutate function

     onSuccess: (data,variables) => {
      console.log("ON SUCCESS")
     queryClient.invalidateQueries({queryKey : createUsersQueryOptions().queryKey})
     console.log(data);
  } 
   });
  }

  return (
    <div className="flex flex-col gap-4 bg-gray-700">
      {users?.users.map((user : UserType) => (
        <Card user={user} key={user._id} />
      ))}
      <button
        onClick={handleCreate}
        className="rounded-lg bg-green-500 p-2 hover:cursor-pointer"
      >
        Create New User
      </button>
    </div>
  )
}

export default App

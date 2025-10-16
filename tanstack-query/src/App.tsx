
import { useQuery } from '@tanstack/react-query'
import './App.css'

function App() {

  const {data,isPending,refetch} = useQuery({
    queryKey : ["todos"],
    queryFn : getTodos
  })

  return (
    <>
       <div>{isPending ? <p>  Is Loading....</p> : JSON.stringify(data?.slice(1,10))}</div>
       <br />
       <br />
       <br />
       <button onClick={()=>{refetch()}}>refetch</button>
    </>
  )
}

const getTodos = async () => {
  await new Promise((resolve)=>  setTimeout(resolve,1000))
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await response.json();
}

export default App

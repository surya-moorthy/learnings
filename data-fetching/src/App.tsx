import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

interface User {
    name: string;
    email: string;
}

function App() {
  const [Loading , setLoading] = useState(true);
  const [data,setData] = useState<User>();

  useEffect(()=>{
    axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details",)
    .then((res)=>{
      setLoading(false);
      setData(res.data);
    })
  },[])

  return (
    <div>
      <h2>
           {
            Loading ? "loading..." : "the data are" + ` ${data?.name} , ${data?.email}`
           }
      </h2>

    </div>
  )
}

export default App

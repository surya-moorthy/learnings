
import { useQuery } from '@tanstack/react-query'
import './App.css'
import { useState } from 'react';
import { createTodoQueryOptions } from './queryoptions/createTodoQueryOptions';

function App() {


  const {data,isPending} = useQuery(createTodoQueryOptions())

  return (
    <>
       <div>{isPending ? <p>  Is Loading....</p> : JSON.stringify(data?.slice(1,10))}</div>
    </>
  )
}



export default App

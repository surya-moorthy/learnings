"use client"
import React, { useActionState } from 'react'
import { ContactType } from '../_types/contact'
import { FiTrash2 } from 'react-icons/fi';

type DeleteButtonTypeProps = {
    action : (prevState : any,formData : FormData) => Promise<any>,
   contact?: ContactType;
}

function DeleteButton({action,contact} : DeleteButtonTypeProps) {
    const [state,formAction] = useActionState(action,null);
  return (
    <form action={formAction} method='post' suppressHydrationWarning>
        <input type='hidden' name="id" value={contact?.id}/>
        <button 
        onClick={(e)=> {
          if(!confirm("Are you Sure? you want to delete the contacts??")) {
            e.preventDefault();
          }  
        }}
        type="submit" className='flex items-center px-3 py-1 bg-red-100 border border-red-300 rounded-md hover:border-red-400 hover:bg-red-100 cursor-pointer'>
                  <FiTrash2 className='text-red-500 text-lg'/> Delete
        </button>
    </form>
  )
}

export default DeleteButton
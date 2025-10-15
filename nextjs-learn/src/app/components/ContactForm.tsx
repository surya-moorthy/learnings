"use client"
import React, { useActionState, useEffect } from 'react'
import { ContactType } from '../_types/contact';
import Router from 'next/router';
import { useRouter } from 'next/navigation';

type ContactFormProps = {
    action : (prevState : any,formData : FormData) => Promise<any>,
   contact?: ContactType;
}

function ContactForm({action,contact} : ContactFormProps) {
    const router = useRouter();
    const [state, formAction] = useActionState(action,null);

    useEffect(()=> {
        if(state?.success) {
         router.push('/contacts');   
        }
    },[state,router]);

  return (
     <form className="flex flex-col gap-4" action={formAction}>
                 <div>
                      <label htmlFor='name' className="block text-sm font-medium text-gray-700">
                         Name 
                      </label>
                      <input 
                      type="text"  
                      name="name" 
                      placeholder="enter your name..." 
                       
                      className="mt-1 block w-full rounded-md border-gray-300 shadom-sm focus:border-blue-500 focus:ring-blue-50 sm:text-sm p-2"/>
                 </div>
                 <div>
                      <label htmlFor='email' className="block text-sm font-medium text-gray-700">
                         Email  
                      </label>
                      <input 
                      type="email"  
                      name="email" 
                      placeholder="enter your email..." 
                       
                      className="mt-1 block w-full rounded-md border-gray-300 shadom-sm focus:border-blue-500 focus:ring-blue-50 sm:text-sm p-2"/>
                 </div>
                 {
                    state?.error && (
                        <div className='text-red-500 text-sm'>
                             {state?.error}
                        </div>
                    )
                 }
                 <button type="submit" className="w-full bg-blue-500 rounded-lg text-white font-medium px-4 py-2 shadow-sm border border-transparent hover:bg-blue-700" >
                        Submit
                 </button>
            </form>
  )
}

export default ContactForm
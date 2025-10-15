import { createContactAction } from '@/app/actions/contact'
import ContactForm from '@/app/components/ContactForm'
import React from 'react'

function NewContactPage() {
  return (
    <div className='max-w-md mx-auto bg-white rounded-lg shadow-md mt-10 p-4'>
           <h1 className='text-2xl fontbold mb-6'>
               Create New Contact
           </h1>
           <ContactForm action={createContactAction}/>
    </div>
  )
}

export default NewContactPage
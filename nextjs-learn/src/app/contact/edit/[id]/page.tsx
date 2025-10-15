import { createContactAction } from "@/app/actions/contact";
import { getContactById } from "@/app/api/contact";
import ContactForm from "@/app/components/ContactForm";

export default async function EditContactPage({params} : {params : Promise<{id : string}>}) {

    const {id} = await params;
    const contact = await getContactById(id);

    return (
         <div className='max-w-md mx-auto bg-white rounded-lg shadow-md mt-10 p-4'>
           <h1 className='text-2xl fontbold mb-6'>
               Edit a Contact
           </h1>
           <ContactForm action={createContactAction} contact={contact}/>
    </div>
    )
}
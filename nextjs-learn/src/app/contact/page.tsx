import { getSession } from "../_lib/session"
import { getContacts } from "../api/contact";
import {ContactList} from "../components/ContactList";


export default async function ContactPage() {

    const user = await getSession();
    if(!user) {
        return (
            <div>
                 Please <a href="/login" className="text-blue-600 hover:underline">login</a> to view the contacts   
            </div>
        )
    }
    const contacts = await getContacts(user.id);
    console.log(contacts);
    if(!contacts || contacts.length == 0) {
         return (
            <div>
                 Please <a href="/contact/new" className="text-blue-600 hover:underline">add a contact</a> to your contact list 
            </div>
        )
    }

    return (
        <div>
             <div className="flex justify-between items-center mb-8">
                   <h1>Your Contacts</h1>
                   <a href="/contact/new" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">Add a Contact</a>
             </div>
             <ContactList contacts={contacts}/>
        </div>  
    )
}
import Link from "next/link";
import { ContactType } from "../_types/contact";
import { FiEdit } from "react-icons/fi";
import DeleteButton from "./DeleteButton";
import { deleteContactAction } from "../actions/contact";

export function ContactList({contacts} : {contacts : ContactType[]}) {
  return (
    <div className="space-y-4">
        {contacts.map((contact)=> {
            return (
                <div key={contact.id} className="p-4 border rounded-lg">
                     <div className="flex justify-between items-start">
                          <div>
                              <h2 className="text-lg font-semibold">
                                    {contact.name}
                              </h2>
                              <p>
                                {contact.email}
                              </p>
                          </div>
                          <div className="flex items-center self-center gap-3">
                                <Link href={`/contact/edit/${contact.id}`} className="flex items-center px-3 py-1 bg-blue-100 border border-blue-300 rounded-md hover:border-blue-400 hover:bg-blue-100 cursor-pointer">
                                  <FiEdit className="text-blue-600" />
                                      Edit
                                </Link>
                                <DeleteButton action={deleteContactAction} contact={contact}/>
                          </div>
                     </div>
                </div>
            )
        })}
    </div>
  )
}
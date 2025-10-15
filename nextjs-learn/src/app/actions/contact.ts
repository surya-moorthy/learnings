    "use server"
    import { revalidatePath } from "next/cache";
    import { createContact, deleteContact } from "../api/contact";
import { getSession } from "../_lib/session";
import { ContactType } from "../_types/contact";

      export const createContactAction = async (prevstate : any,  formdata : FormData) => {
      if(!formdata.get("name")) {
        return {error : "Name is missing"}
      }
      const user = await getSession();
      const newContact : ContactType = {
        name : formdata.get("name") as string,
        email : formdata.get("email") as string,
        userId : user?.id
      }
      try{
        await createContact(newContact);
        revalidatePath("/contact");
        return {success : true};
      }catch (err) {
        return {error : "Failed to create contact"}
      }
    }

     export const updateContactAction = async (prevstate : any,  formdata : FormData) => {
      
    }


    export const deleteContactAction = async (prevstate : any,  formdata : FormData) => {
        const id = formdata.get("id") as string;
    if (!id) {
        console.error("No ID found in formdata");
        return;
    }
        try {
            await deleteContact(id);
            revalidatePath("/contact");
            return {success : true};
        }catch(err) {
            console.log("Error while deleting the contact :",err);
            return {error : "Failed to delete the contact."}
        }
    }
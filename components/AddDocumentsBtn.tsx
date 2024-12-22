"use client"

import Image from "next/image";
import { Button } from "./ui/button";
import { createDocuments } from "@/lib/actions/room.actions";
import { useRouter } from "next/navigation";
import Loader from "./Loader";


const AddDocumentBtn = ({userId,email} : AddDocumentBtnProps) =>{
    const router = useRouter()
    const addDocumentHandler = async() =>{
        try {
            const room = await createDocuments({userId,email});
            if(room){
                router.push(`/documents/${room.id}`) 
            }
        } catch (error) {
            console.log(`there is an error while creating an documents${error}`)
        }
    }
    return (
       <Button type="submit" onClick={addDocumentHandler} className="flex gap-1 gradient-blue shadow-md">
        <Image 
         src="/assets/icons/add.svg"
         alt="add Document"
         width={24}
         height={24}
        />
          <p className="hidden sm:block font-bold"> Start a blank Document</p>
       </Button>
    )
}

export default AddDocumentBtn;
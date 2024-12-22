"use server"
import {nanoid} from "nanoid"
import { liveblocks } from "@/lib/liveblock";
import { revalidatePath } from "next/cache";
import { parseStringify } from "../utils";

export const createDocuments = async ({userId,email} : CreateDocumentParams)=>{
    const roomId = nanoid();

    try {
        const metadata ={
            createrId:userId,
            email,
            title:"untitled"
        }
        
        const usersAccesses : RoomAccesses ={
            [email] : ['room:write']
        }
        const room = await liveblocks.createRoom(roomId, {
            metadata,
            usersAccesses,
            defaultAccesses: []
          });
          revalidatePath('/')
          return parseStringify(room);
    } catch (error) {
        console.log(`there is error in createing room ${error}`)
    }
}
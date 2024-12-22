import { liveblocks } from "@/lib/liveblock";
import { getUserColor } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import { Import } from "lucide-react";
import { redirect } from "next/navigation";


export async function POST(request: Request) {
  // Get the current user from your database
  const clerkUsser = await currentUser();
  if(!clerkUsser) {
    redirect("sign-in");
  }

  const{id,firstName,lastName,emailAddresses,imageUrl} = clerkUsser;
  const user ={
    id,
    info:{
        id,
        name:`${firstName} ${lastName}`,
        email:emailAddresses[0].emailAddress,
        avatar:imageUrl,
        color:getUserColor(id)
    }
  }
  // Identify the user and return the result
  const { status, body } = await liveblocks.identifyUser(
    {
      userId: user.info.email,
      groupIds:[] // Optional
    },
    { userInfo: user.info },
  );

  return new Response(body, { status });
}
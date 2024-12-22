
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AddDocumentBtn from "@/components/AddDocumentsBtn";

export default async function Home() {
  const clerkUsser = await currentUser();
  if(!clerkUsser) {
    redirect("/sign-in")
  }
  const documents =[]
  return (
   <main className="home-container">
      <Header className="sticky left-0 top-0 ">
         <div className="flex items-center gap-2 lg:gap-4">
             Notifications
             <SignedIn>
               <UserButton />
             </SignedIn>
         </div>
      </Header>
      {documents.length > 0 ? (
        <div>

        </div>
      ) : (
        <div className="document-list-empty">
            <Image 
             src="/assets/icons/doc.svg"
             alt="documents"
             width={40}
             height={40}
             className="mx-auto"
            />

            <AddDocumentBtn
            userId={clerkUsser.id}
            email={clerkUsser.emailAddresses[0].emailAddress}
            />
        </div>
      )}
   </main>
  );
}

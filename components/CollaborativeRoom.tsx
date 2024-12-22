"use client"
import { RoomProvider,ClientSideSuspense } from "@liveblocks/react";
import Loader from "./Loader";
import { Editor } from "@/components/editor/Editor";
import React from "react";
import Header from "@/components/Header";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'


const CollaborativeRoom = () =>{
    return (
        <RoomProvider id="my-room">
            <ClientSideSuspense fallback={<Loader/>}>
             <div className="collaborative-room">
               <Header>
                    <div className="flex w-fit items-center justify-center gap-2">
                      <p className="document-title">test</p>
                    </div>
                    <SignedOut>
                      <SignInButton />
                    </SignedOut>
        
                    <SignedIn>
                      <UserButton />
                    </SignedIn>
               </Header>
            <Editor/>
             </div>
            </ClientSideSuspense>
        </RoomProvider>
    );
}

export default CollaborativeRoom;
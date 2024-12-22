"use client";
import Loader from "@/components/Loader";
import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

export function Provider({ children }: { children: ReactNode }) {
    return (
      <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
     
          <ClientSideSuspense fallback={<Loader/>}>
            {children}
          </ClientSideSuspense>

      </LiveblocksProvider>
    );
  }
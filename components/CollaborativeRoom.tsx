"use client";
import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense'

const CollaborativeRoom = ({ children }:  {children: React.ReactNode}) => {
  return (
    <div>
        <RoomProvider id="my-room">
            <ClientSideSuspense fallback={<div>Loading…</div>}>
            <div className='collaborative-room'>
                <Header>
                    <div className="flex w-fit items-center justify-center gap-2">
                    <p className='document-title'>SHARE</p>
                    </div>
                </Header>
            </div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
            </Header>
            <Editor />
            </ClientSideSuspense>
      </RoomProvider>
    </div>
  )
}

export default CollaborativeRoom

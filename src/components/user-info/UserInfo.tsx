"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function UserInfo() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = () => {
    signOut({
      callbackUrl: "/",
    });
  };

  return (
    <div className="grid place-items-center h-screen">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop" alt="shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-48 p-4 bg-white shadow-md rounded-md">
          <div className="flex flex-col gap-2">
            <div>
              <span className="font-bold">{session?.user?.name}</span>
            </div>
            <div>
              <span className="font-bold">{session?.user?.email}</span>
            </div>
            <button
              onClick={handleSignOut}
              className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
            >
              Log Out
            </button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

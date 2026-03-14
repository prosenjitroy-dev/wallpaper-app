"use client";

import { useState } from "react";
import { Button } from "../shadcnui/button";
import { Loader2Icon, LogOutIcon } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const { push } = useRouter();

  const handleLogout = async () => {
    setIsLoggingOut(true);

    const { error } = await authClient.signOut();

    await new Promise<void>((r) => setTimeout(r, 1000));

    if (!error) {
      toast.success("Logged out successfully!");
      push("/auth");
    }

    setIsLoggingOut(false);
  };

  return (
    <Button
      type="button"
      className="cursor-pointer"
      variant={"destructive"}
      disabled={isLoggingOut}
      onClick={handleLogout}>
      {isLoggingOut ?
        <>
          <Loader2Icon className="animate-spin" />
          Logging out.....
        </>
      : <>
          <LogOutIcon />
          Logout
        </>
      }
    </Button>
  );
};

export default LogoutButton;

"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "../shadcnui/button";
import Link from "next/link";

const LoginDashBoardButton = () => {
  const { data } = authClient.useSession();

  if (data) {
    return (
      <Button asChild>
        <Link href={"/studio"}>Studio</Link>
      </Button>
    );
  }

  return (
    <Button asChild>
      <Link href={"/auth"}>Login</Link>
    </Button>
  );
};

export default LoginDashBoardButton;

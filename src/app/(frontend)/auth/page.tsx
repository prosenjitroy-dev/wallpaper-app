import LoginForm from "@/components/Forms/LoginForm";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login | Wallpaper App",
  description: "Login Page of Wallpaper App",
};

const page = () => {
  return (
    <section className="grid h-[85dvh] place-items-center">
      <Card className="w-xs">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold">
            Join Us
          </CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter className="gap-1 text-center">
          Don&apos;t Hava an Account{" "}
          <Link
            className="underline"
            href={"/auth/register"}>
            Register
          </Link>
          Now
        </CardFooter>
      </Card>
    </section>
  );
};

export default page;

import RegisterForm from "@/components/Forms/RegisterForm";
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
  title: "Register | Wallpaper",
  description: "Register Wallpaper page",
};

const page = () => {
  return (
    <section className="grid h-[85dvh] place-items-center">
      <Card className="w-xs">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold">
            Please Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter className="gap-1 text-center">
          Don&apos;t Hava an Account{" "}
          <Link
            className="underline"
            href={"/auth"}>
            Login
          </Link>
          Now
        </CardFooter>
      </Card>
    </section>
  );
};

export default page;

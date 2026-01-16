import ToastButton from "@/components/Buttons/ToastButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "wallpaper app",
  description: "Wallpaper App Only Login User",
};

const page = () => {
  return (
    <section className="grid h-[85dvh] place-items-center">
      <div className="space-y-4 text-center">
        <h1 className="text-5xl font-semibold">Next.js Starter Fullstack</h1>
        <h2 className="text-3xl">
          Production grade Fullstack Next.js starter template
        </h2>

        <ToastButton />
      </div>
    </section>
  );
};

export default page;

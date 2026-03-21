import CreateWallpaperForm from "@/components/Forms/CreateWallpaperForm";
import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Wallpaper|wallpaper app",
  description:
    "Create your own wallpaper with our easy-to-use wallpaper creator. Customize colors, patterns, and more to design the perfect wallpaper for your device.",
};

const page = () => {
  return (
    <>
      <section className="grid h-[85dvh] place-items-center">
        <Card className="w-xs">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-semibold">
              Please Login
            </CardTitle>
          </CardHeader>
          <CreateWallpaperForm />
        </Card>
      </section>
    </>
  );
};

export default page;

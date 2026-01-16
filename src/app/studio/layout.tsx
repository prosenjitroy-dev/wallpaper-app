import Header from "@/components/Header/PrivateHeader/Header";
import { ReactNode } from "react";

type StudioLayoutProps = {
  children: ReactNode;
};

const StudioLayout = ({ children }: Readonly<StudioLayoutProps>) => {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-6 pt-18 pb-4">{children}</main>
    </>
  );
};

export default StudioLayout;

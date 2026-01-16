import Header from "@/components/Header/PublicHeader/Header";
import { ReactNode } from "react";

type FrontendLayoutProps = {
  children: ReactNode;
};

const FrontendLayout = ({ children }: Readonly<FrontendLayoutProps>) => {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-6 pt-18 pb-4">{children}</main>
    </>
  );
};

export default FrontendLayout;

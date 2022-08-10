import React, { FC } from "react";
import s from "./Layout.module.css";
import { Footer, Navbar } from "@components/common";

type CompProps = {
  children: React.ReactNode;
};

const Layout: FC<CompProps> = ({ children }) => {
  return (
    <div className={s.root}>
      <Navbar />
      <main className="fit">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

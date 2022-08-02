import React, { FC } from "react";
import s from "./Layout.module.css";

type CompProps = {
  children: React.ReactNode;
};

const Layout: FC<CompProps> = ({ children }) => {
  return (
    <div className={s.root}>
      <main className="fit">{children}</main>
    </div>
  );
};

export default Layout;

import React, { FC } from "react";
import s from "./Layout.module.css";
import { Footer, Navbar } from "@components/common";
import { Sidebar } from "@components/ui";
import { CartSidebar } from "@components/cart";
import { useUI } from "@components/ui/context";
import { ApiProvider } from "@framework";

type CompProps = {
  children: React.ReactNode;
};

const Layout: FC<CompProps> = ({ children }) => {
  //const ui = useUI();
  const { isSidebarOpen, closeSidebar } = useUI();
  console.log("Re-rendering LAYOUT");
  //console.log(ui);
  return (
    <ApiProvider>
      <div className={s.root}>
        <Navbar />
        <Sidebar onClose={closeSidebar} isOpen={isSidebarOpen}>
          <CartSidebar />
        </Sidebar>
        <main className="fit">{children}</main>
        <Footer />
      </div>
    </ApiProvider>
  );
};

export default Layout;

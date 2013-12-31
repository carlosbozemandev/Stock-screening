"use client";

import Navbar from "@/components/ui/navbar";
import { Toaster } from "@/components/ui/toaster";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const pathname = usePathname();

  // Conditional checks for paths
  const isAuthPage = pathname === "/auth/signin" || pathname === "/auth/signup";
  const isLandingPage = pathname === "/landing/home";

  return (
    <>
      {isAuthPage && (
        <>
          {children}
          <Toaster />
        </>
      )}

      {isLandingPage && (
        <>
          <Navbar />
          {children}
          <Toaster />
        </>
      )}
    </>
  );
};

export default Layout;

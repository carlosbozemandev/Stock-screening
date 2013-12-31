"use client";

import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import { Toaster } from "@/components/ui/toaster";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const pathname = usePathname();

  // Conditional checks for specific paths
  const isAuthPage = pathname === "/auth/signin" || pathname === "/auth/signup";
  const isLandingPage = pathname === "/landing/home";
  const isDashboardPage = pathname === "/dashboard";

  // Render based on pathname
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
          <Footer />
        </>
      )}

      {isDashboardPage && (
        <>
          {children}
          <Toaster />
        </>
      )}

      {!isAuthPage && !isLandingPage && !isDashboardPage && (
        <>
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;

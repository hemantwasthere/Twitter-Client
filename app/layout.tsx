"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import GoogleAuth from "@/components/GoogleAuth";
import Sidebar from "@/components/Sidebar";
import { useCurrentUser } from "@/hooks/user";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!;
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <QueryClientProvider client={queryClient}>
            <GoogleOAuthProvider clientId={clientId}>
              <main className="grid grid-cols-12 h-screen w-screen ">
                <aside className="col-span-2 xl:col-span-3 overscroll-y-none overflow-x-hidden">
                  <Sidebar />
                </aside>

                <div className="col-span-10 lg:col-span-5 border-x-[1px] border-borderColor overflow-y-scroll">
                  {children}
                </div>

                <div className="col-span-0 lg:col-span-4">
                  <GoogleAuth />
                </div>
              </main>
              <Toaster />
            </GoogleOAuthProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </>
      </body>
    </html>
  );
}

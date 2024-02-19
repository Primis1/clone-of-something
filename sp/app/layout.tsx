import type { Metadata } from "next";
import { roboto } from "@/app/ui/fonts/fonts";
import Header from "./ui/components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Employers",
  description: "Created by great Me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 

{
  return (
    <html lang="en">
      <body className={`${roboto.className} text-xl`}>
            <Header title={"7457+ Job Listed"} description={"Find Your Dream Job"} />
            <div className="container">
              {children}
            </div>
        </body>
    </html>
  );
}

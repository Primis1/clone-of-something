import type { Metadata } from "next";
import { roboto } from "@/app/ui/fonts/fonts";
import Header from "./ui/components/header";
import Footer from "./ui/components/footer";
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
              <Header />
              {children}
              <Footer />
        </body>
    </html>
  );
}

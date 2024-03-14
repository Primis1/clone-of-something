import type { Metadata } from "next";
import { roboto } from "../ui/fonts/fonts";
import Header from "../ui/components/header/header";
import Footer from "../ui/components/footer/footer";
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
      <body className={`${roboto.className} text-xl bg-[#eeeee4] `}>
              <Header />
              {children}
              <Footer />
        </body>
    </html>
  );
}

import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { Syne } from "next/font/google";
import { VT323 } from "next/font/google";
import { Kode_Mono } from "next/font/google";

const kodeMono = Kode_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose what you need
});

const vt323 = VT323({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"] });

const syne = Syne({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata = {
  title: "Arghya Santra | Portfolio",
  description: "Freelance Full Stack Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${kodeMono.className} bg-black text-white`}>
        <ScrollProgressBar />
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

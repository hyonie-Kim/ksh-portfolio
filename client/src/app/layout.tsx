import Footer from "@/components/Footer";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "김세현의 포트폴리오",
    template: "김세현의 포트폴리오 | %s",
  },
  description: "웹 개발자를 꿈꾸는 김세현의 포트폴리오입니다.",
  icons: {
    icons: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="flex flex-col w-full w-screen mx-auto">
        <Navbar />
        <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

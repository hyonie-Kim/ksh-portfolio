import Footer from "@/components/Footer";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "hyonie | Web Developer Portfolio",
    template: "hyonie | %s",
  },
  description: "레거시부터 최신 웹까지, 시스템 가치를 개선하는 3년차 개발자 김세현입니다. 헬스케어 스타트업부터 통신·렌탈 중견기업까지 다양한 도메인 경험과 ASP.NET, Next.js, NestJS, MSSQL 등 풀스택 개발 경험을 보유하고 있습니다.",
  keywords: ["포트폴리오", "웹 개발자", "Full-Stack Developer", "Next.js", "ASP.NET", "NestJS", "김세현", "hyonie"],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="flex flex-col w-full mx-auto">
        <Navbar />
        {/* <main className="md:mx-auto max-w-3xl px-4 sm:px-6 overflow-x-hidden md:max-w-7xl"> */}
        <main className="overflow-x-hidden">
    
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

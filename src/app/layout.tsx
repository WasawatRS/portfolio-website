import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto-sans",
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto-thai",
});

export const metadata: Metadata = {
  title: "วสวัตติ์ รัตนรังษี | Portfolio & Projects",
  description: "รวบรวมผลงานและโปรเจกต์ด้านการพัฒนาระบบ ข้อมูล และ AI โดย วสวัตติ์ รัตนรังษี",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${notoSans.variable} ${notoSansThai.variable} scroll-smooth`}>
      <body
        style={{ fontFamily: "var(--font-noto-thai), var(--font-noto-sans), sans-serif" }}
        className="bg-white text-black antialiased"
      >
        {children}
      </body>
    </html>
  );
}
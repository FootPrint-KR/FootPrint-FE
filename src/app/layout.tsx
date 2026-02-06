import type { Metadata } from "next";

import Providers from "./providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "FootPrint - 여행 발자취 커뮤니티",
  description: "나의 여행 발자취를 기록하고 공유하는 커뮤니티",
  keywords: ["여행", "발자취", "커뮤니티", "여행기록", "FootPrint"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

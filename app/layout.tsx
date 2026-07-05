import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kinoby — 내 이야기를 AI 영상으로",
  description:
    "카메라 구도 몰라도 됩니다. 씬 분위기만 말하면 Kinoby가 Kling 프롬프트로 만들어드려요.",
  openGraph: {
    title: "Kinoby — 내 이야기를 AI 영상으로",
    description: "카메라 구도 몰라도 됩니다. 씬 분위기만 말하면 Kinoby가 Kling 프롬프트로 만들어드려요.",
    url: "https://kinoby-landing.vercel.app",
    siteName: "Kinoby",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={GeistSans.className}>
      <body>{children}</body>
    </html>
  );
}

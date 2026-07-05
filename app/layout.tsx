import type { Metadata } from "next";
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
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

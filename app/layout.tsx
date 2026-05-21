import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Copa do Mundo FIFA 2026",

  description:
    "Acompanhe tudo sobre a Copa do Mundo FIFA 2026: calendário de jogos, seleções classificadas, grupos, cidades-sede, tabelas, notícias e atualizações do torneio.",

  keywords: [
    "FIFA World Cup 2026",
    "World Cup 2026",
    "FIFA",
    "soccer",
    "football",
    "match schedule",
    "host cities",
    "qualified teams",
  ],

  openGraph: {
    title: "FIFA World Cup 2026",
    description:
      "Latest updates, schedules, teams, and host cities for the 2026 FIFA World Cup.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable} ${geistMono.variable} 
        h-full antialiased
        bg-zinc-950 text-zinc-50
        scrollbar-dark`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

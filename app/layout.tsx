import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Toaster } from 'sonner'

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
  metadataBase: new URL("https://fifaworldcup2026on.vercel.app/"),

  title: {
    default: "Copa do Mundo FIFA 2026",
    template: "%s | Copa do Mundo FIFA 2026",
  },

  description:
    "Acompanhe tudo sobre a Copa do Mundo FIFA 2026: jogos, grupos, seleções, cidades-sede, tabela e notícias atualizadas.",

  keywords: [
    "Copa do Mundo 2026",
    "FIFA World Cup 2026",
    "World Cup",
    "Matches",
    "Soccer",
    "Tabela Copa",
    "Calendário Copa",
    "Seleções",
    "Grupos",
    "Jogos",
    "Futebol",
  ],

  applicationName: "FIFA World Cup 2026",

  creator: "Kaique Prado",
  authors: [{ name: "KiqStudio" }],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Copa do Mundo FIFA 2026",
    description:
      "Jogos, tabela, grupos, seleções e notícias da Copa do Mundo FIFA 2026.",

    url: "https://fifaworldcup2026on.vercel.app/",

    siteName: "Copa do Mundo FIFA 2026",

    locale: "pt_BR",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Copa do Mundo FIFA 2026",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Copa do Mundo FIFA 2026",
    description:
      "Jogos, tabela, grupos, seleções e notícias da Copa do Mundo FIFA 2026.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.json",

  category: "sports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`
        ${geistSans.variable} ${geistMono.variable} 
        h-full antialiased
        bg-zinc-950 text-zinc-50
        scrollbar-dark`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <Toaster
          richColors
          position="bottom-center"
          theme="dark"
        />
      </body>
    </html>
  );
}

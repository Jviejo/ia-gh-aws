import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Master de IA para Developers — CodeCrypto",
  description:
    "Domina la Inteligencia Artificial aplicada al desarrollo de software. Aprende a construir agentes, integrar LLMs y automatizar workflows con las herramientas más demandadas del mercado.",
  openGraph: {
    title: "Master de IA para Developers — CodeCrypto",
    description:
      "Domina la Inteligencia Artificial aplicada al desarrollo de software.",
    url: "https://ia.codecrypto.academy",
    siteName: "CodeCrypto",
    locale: "es_ES",
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
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#05050a] text-[#f0f0f5]">
        {children}
      </body>
    </html>
  );
}

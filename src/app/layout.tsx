import type { Metadata } from "next";
import { Fira_Code, Fira_Mono } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

const firaMono = Fira_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-fira-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prashant Rathore",
  description: "Full-stack web developer's portfolio website",
  openGraph: {
    title: "Prashant Rathore | Full Stack Developer",
    url: "https://raahthor.vercel.app",
    siteName: "Prashant Rathore",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.variable} ${firaMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

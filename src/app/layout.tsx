import "@/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Mini URL",
  description: "URL shortener",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <main className="flex min-h-screen flex-col items-center justify-center  bg-gradient-to-b from-[#1b2132] to-[#162133] text-white">
          {children}
        </main>
      </body>
    </html>
  );
}

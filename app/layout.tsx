import type { Metadata } from "next";
import { Khula} from "next/font/google";
import "./globals.css";
import Link from "next/link";

const khula = Khula({ 
  subsets: ["latin"], 
  weight: ["400", "700"],
  variable: "--font-prim"
});


export const metadata: Metadata = {
  title: "HRegniez - Web Dev",
  description: "Explore the portfolio and projects of a passionate web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen">
      <body className={`"${khula.className} h-screen bg-background text-foreground"`}>
        <header className="flex justify-between w-full">
          <div className="flex justify-between ">
            <h1>HRegniez</h1>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Khula} from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Nav } from "@/components/Nav";

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
        <header className="w-full">
          <Section className="flex justify-between p-4">
            <h1 className="p-2">HRegniez</h1>
            <Nav />
          </Section>
        </header>
        <Section>
          {children}
        </Section>
      </body>
    </html>
  );
}

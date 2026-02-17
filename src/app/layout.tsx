import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { BottomNav } from "@/components/BottomNav";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Super Shorts - African Microdrama Platform",
  description: "Bridging the Netflix Gap via sachet payments and premium vertical storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased text-white selection:bg-primary selection:text-black`}>
        <div className="flex min-h-screen bg-background relative">

          {/* Desktop Fixed Sidebar */}
          <Sidebar />

          {/* Main Content Area */}
          <main className="flex-1 lg:ml-[350px] relative w-full overflow-x-hidden min-h-screen">
            {children}
          </main>

          {/* Mobile Fixed Navigation */}
          <BottomNav />

        </div>
      </body>
    </html>
  );
}

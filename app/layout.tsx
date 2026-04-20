import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { Preloader } from "@/components/Preloader";
import { SitePreferencesProvider } from "@/lib/sitePreferences";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kemal Musthafa Rajabi — Software Engineer & Full Stack Developer",
  description:
    "Premium portfolio showcasing Full Stack development expertise, project management, and innovative web solutions.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Kemal Musthafa Rajabi",
    description: "Software Engineer & Full Stack Developer",
    url: "https://kemalportfolio.com",
    siteName: "Kemal Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kemal Musthafa Rajabi",
    description: "Software Engineer & Full Stack Developer",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Outfit:wght@100..900&family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-text antialiased overflow-x-hidden">
        <SitePreferencesProvider>
          <SmoothScroll>
            <Preloader />
            <CustomCursor />
            <Navbar />
            <main className="relative">{children}</main>
          </SmoothScroll>
        </SitePreferencesProvider>
      </body>
    </html>
  );
}

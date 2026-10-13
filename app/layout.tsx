import type { Metadata, Viewport } from "next";
import portfolio from "@/config/portfolio";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Providers from "./providers";


export const metadata: Metadata = {
  title: `${portfolio.name} — ${portfolio.headline}`,
  description: portfolio.intro,
  authors: [{ name: portfolio.name }],
  openGraph: {
    title: `${portfolio.name} — Portfolio`,
    description: portfolio.intro,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1f5f9" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:font-bold focus:text-white"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

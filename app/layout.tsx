import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });
const title = "Generate Meta Tags";
const description =
  "Streamline frontend development with our code generator. Effortlessly create essential code snippets for a seamless web design process.";
const url = "localhost:3000";
const locale = "en-us";
export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s - ${title}`,
  },
  description: description,
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    locale,
    images: [
      {
        url: "localhost:3000/open-graph.jpg",
        width: 1200,
        height: 627,
        alt: "Generate Meta Tags",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
    site: "@farukipekcom",
    images: ["localhost:3000/open-graph.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/icons/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/icons/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/icons/apple-touch-icon.png",
    },
  ],
  manifest: "/icons/site.webmanifest",
  themeColor: "#ffffff",
  alternates: {
    canonical: url,
  },
};
const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Generate Meta Tags",
  url: "localhost:3000",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`flex ${inter.className} ml-5 mr-5 flex flex-col rounded-normal bg-white dark:bg-secondary lg:m-5 lg:flex-row`}
      >
        <Providers>
          {children}
          <Analytics debug={false} />
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

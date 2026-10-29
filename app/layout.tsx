import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { profile } from "@/content/profile";
import { isPlaceholder } from "@/lib/placeholder";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const description = `${profile.name} - ${profile.title}. ${profile.tagline}.`;

export const metadata: Metadata = {
  // Only set once you replace the siteUrl placeholder in content/profile.ts.
  ...(isPlaceholder(profile.siteUrl)
    ? {}
    : { metadataBase: new URL(profile.siteUrl) }),
  title: { default: `${profile.name} - ${profile.title}`, template: `%s | ${profile.name}` },
  description,
  openGraph: {
    title: `${profile.name} - ${profile.title}`,
    description,
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: profile.name, description },
};

export const viewport: Viewport = {
  themeColor: "#0e1116",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${geist.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        {/* Marks a fresh page load (no reduced motion) before first paint so the hero intro can play. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(!matchMedia("(prefers-reduced-motion: reduce)").matches){var d=document.documentElement.dataset;d.typing="1";d.intro="1"}}catch(e){}`,
          }}
        />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

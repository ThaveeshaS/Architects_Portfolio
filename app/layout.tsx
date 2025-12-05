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

// Update metadata to match the Campbell Architects brand
export const metadata: Metadata = {
  title: "Campbell Architects | Creative Design Solutions",
  description: "Luxury architecture and design consulting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          // Strip extension-injected attributes that cause hydration mismatches (e.g., Katalon)
          dangerouslySetInnerHTML={{
            __html: `(() => {
              const attr = 'katalonextensionid';
              const strip = () => document.documentElement.removeAttribute(attr);
              strip();
              // In case the extension re-applies the attribute before or during hydration
              const observer = new MutationObserver((mutations) => {
                for (const m of mutations) {
                  if (m.type === 'attributes' && m.attributeName === attr) strip();
                }
              });
              observer.observe(document.documentElement, { attributes: true });
            })();`,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
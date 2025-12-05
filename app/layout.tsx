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
          // Strip extension-injected attributes that cause hydration mismatches (e.g., Katalon, Grammarly)
          dangerouslySetInnerHTML={{
            __html: `(() => {
              const targets = [
                { el: () => document.documentElement, attrs: ['katalonextensionid', 'data-gr-ext-installed', 'data-new-gr-c-s-check-loaded'] },
                { el: () => document.body, attrs: ['data-gr-ext-installed', 'data-new-gr-c-s-check-loaded'] },
              ];

              const stripAll = () => {
                for (const { el, attrs } of targets) {
                  const node = el();
                  if (!node) continue;
                  for (const attr of attrs) {
                    if (node.hasAttribute(attr)) node.removeAttribute(attr);
                  }
                }
              };

              stripAll();

              const observer = new MutationObserver((mutations) => {
                let needsStrip = false;
                for (const m of mutations) {
                  if (m.type === 'attributes') {
                    needsStrip = true;
                    break;
                  }
                }
                if (needsStrip) stripAll();
              });

              observer.observe(document.documentElement, { attributes: true, subtree: true });
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
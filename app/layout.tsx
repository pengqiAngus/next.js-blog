// import { Inter } from "next/font/google"
export const runtime = "edge";
import { ThemeProvider } from "@/components/common/theme-provider";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { I18nProvider } from "@/components/common/I18nProvider";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import "./globals.css";
import { Metadata } from "next";

// 不在服务器组件中导入客户端i18n
// import '@/utils/i18n/i18n';

// const inter = Inter({ subsets: ["latin"] })

// 默认语言
const defaultLocale = 'en';

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: {
    default: 'awesome-blog',
    template: '%s | awesome-blog'
  },
  description: 'A modern blog platform built with Next.js, featuring beautiful UI, dark mode, and internationalization support.',
  keywords: ['blog', 'next.js', 'react', 'typescript', 'tailwindcss'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Name',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://awesome-blog.site',
    title: 'awesome-blog',
    description: 'A modern blog platform built with Next.js',
    siteName: 'awesome-blog',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'awesome-blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'awesome-blog',
    description: 'A modern blog platform built with Next.js',
    images: ['/og-image.jpg'],
    creator: '@yourtwitter',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={defaultLocale} suppressHydrationWarning>
      <head>
        {/* 确保所有CSS样式正确加载 */}
        {/* <script src="https://unpkg.com/react-scan/dist/auto.global.js" /> */}

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* 启用 back/forward cache */}
        <meta name="turbolinks-cache-control" content="no-cache" />
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <script src="/sw.js" defer></script>
        <link
          rel="stylesheet"
          href="https://esm.sh/@excalidraw/excalidraw@0.18.0/dist/dev/index.css"
        />
      </head>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
            <div className="flex min-h-screen flex-col">
              <ScrollToTop />
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

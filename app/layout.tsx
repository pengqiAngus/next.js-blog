// import { Inter } from "next/font/google"
export const runtime = "edge";
import { ThemeProvider } from "@/components/common/theme-provider";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { I18nProvider } from "@/components/common/I18nProvider";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import "./globals.css";

// 不在服务器组件中导入客户端i18n
// import '@/utils/i18n/i18n';

// const inter = Inter({ subsets: ["latin"] })

// 默认语言
const defaultLocale = 'en';

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

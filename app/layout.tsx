// import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/common/theme-provider";
import  RecoilContextProvider  from "@/components/common/recoilProvider";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` bg-background text-foreground`}>
        <RecoilContextProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex min-h-screen flex-col">
              <ScrollToTop />
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
          </ThemeProvider>
        </RecoilContextProvider>
      </body>
    </html>
  );
}

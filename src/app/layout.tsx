import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme.provider";
import Navbar from "@/components/navbar";
import { Providers } from "@/utils/providers";
import AppProvider from "@/context/app.provider";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const CookieStore = cookies();
  const accessToken = CookieStore.get('token');
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
             <AppProvider initialAccessToken={accessToken?.value}>
              <Providers>
                  {children}
              </Providers>
             </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

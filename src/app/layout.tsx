
import "./globals.css";
import type { Metadata } from "next";
import { geistMono, geistSans } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import { ThemeSwitcherProvider } from "@/styles/theme/client/context";
import { getThemeCookieHeader } from "@/styles/theme/server/getThemeCookieHeader";

export const metadata: Metadata = {
  title: "Anantara Blog",
  description: "Life journey of silly frontend developer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = await getThemeCookieHeader()
  return (
    <html lang="en">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          theme === 'dark' && 'dark',
          theme === 'light' && 'light',
          !theme && 'light',
          'antialiased',
        )}
      >
        <ThemeSwitcherProvider initialState={theme ?? 'light'}>
          {children}
        </ThemeSwitcherProvider>
      </body>
    </html>
  );
}

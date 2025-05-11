import "./globals.css";
import type { Metadata } from "next";
import { getCookies } from "@/helper/server/cookies";
import { ThemeSwitcherProvider } from "@/components/theme/theme-switcher/context";
import { Settings } from "@/config";
import { cn } from "@/components/lib/utils";
import { Theme } from "@anantara/theme/types";

export const metadata: Metadata = {
  title: "Anantara Blog",
  description: "Life journey of silly frontend developer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = await getCookies(Settings.Cookies.Theme) as Theme ?? 'light'

  return (
    <html lang="en">
      <body
        className={cn(
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

import "./globals.css";
import type { Metadata } from "next";
import { getCookies } from "@/helper/server/cookies";
import { ThemeSwitcherProvider } from "@/components/theme/theme-switcher/context";
import { Settings } from "@/config";
import { cn } from "@/components/lib/utils";
import { Theme } from "@anantara/theme/types";
import { openSans, poppins } from "@/components/fonts";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";

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
          poppins.variable,
          openSans.variable,
          theme === 'dark' && 'dark',
          theme === 'light' && 'light',
          !theme && 'light',
          'antialiased',
        )}
      >
        <ThemeSwitcherProvider initialState={theme ?? 'light'}>
          <InteractiveGridPattern
            className={cn(
              "z-[-4] [mask-image:linear-gradient(to_bottom_right,white,transparent_60%)]",
            )}
            width={40}
            height={40}
            squares={[50, 50]}
            squaresClassName="hover:fill-blue-500"
          />
          {children}
        </ThemeSwitcherProvider>
      </body>
    </html>
  );
}

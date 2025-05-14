import "./globals.css";
import type { Metadata } from "next";
import { ThemeSwitcherProvider } from "@/components/theme/theme-switcher/context";
import { cn } from "@/components/lib/utils";
import { openSans, poppins } from "@/components/fonts";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { getSanitizedTheme } from "@/helper/server/shared/getSanitizedTheme";

export const metadata: Metadata = {
  title: "Anantara Blog",
  description: "Life journey of silly frontend developer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = await getSanitizedTheme()

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
              "z-[-4] [mask-image:linear-gradient(to_bottom,white,transparent_50%)]",
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

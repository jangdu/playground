import { ReactNode } from "react";
import Header from "../header/Header";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "../theme/ThemeProvider";

type LayoutProps = {
  children: ReactNode;
};

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Header />
        {children}
      </ThemeProvider>
      <footer>Footer</footer>
    </>
  );
}
